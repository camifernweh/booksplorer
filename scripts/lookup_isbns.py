"""Look up ISBNs (and cover IDs) for every book in the snapshot via Open Library.
Resumable: results are cached in data/isbn-lookups.json keyed by book id.
Usage: python3 scripts/lookup_isbns.py
"""
import json, os, time, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SNAP = os.path.join(ROOT, 'data', 'booksplorer-snapshot.json')
CACHE = os.path.join(ROOT, 'data', 'isbn-lookups.json')
UA = {'User-Agent': 'booksplorer-data-script'}

def get(url):
    req = urllib.request.Request(url, headers=UA)
    return json.load(urllib.request.urlopen(req, timeout=30))

def pick_isbns(isbns):
    i13 = next((i for i in isbns if len(i) == 13), None)
    i10 = next((i for i in isbns if len(i) == 10), None)
    return i10, i13

def lookup(book):
    q = urllib.parse.urlencode({'title': book['title'], 'author': book['author'],
                                'limit': 1, 'fields': 'isbn,cover_i,key,title,author_name'})
    r = get('https://openlibrary.org/search.json?' + q)
    if not r.get('docs'):
        return {'source': 'openlibrary', 'found': False}
    d = r['docs'][0]
    i10, i13 = pick_isbns(d.get('isbn', []))
    return {'source': 'openlibrary', 'found': True, 'isbn10': i10, 'isbn13': i13,
            'coverId': d.get('cover_i'), 'olKey': d.get('key'),
            'matchedTitle': d.get('title'), 'matchedAuthor': (d.get('author_name') or [None])[0]}

def main():
    snap = json.load(open(SNAP))
    books = [b for p in snap['countryPages'] for b in p['country']['books']]
    cache = json.load(open(CACHE)) if os.path.exists(CACHE) else {}
    todo = [b for b in books if b['id'] not in cache]
    print(f'{len(books)} books, {len(cache)} cached, {len(todo)} to go', flush=True)
    for n, b in enumerate(todo, 1):
        for attempt in range(4):
            try:
                cache[b['id']] = lookup(b); break
            except Exception as e:
                time.sleep(5 * (attempt + 1))
        else:
            print(f'gave up: {b["title"]}', flush=True)
        if n % 100 == 0:
            json.dump(cache, open(CACHE, 'w'))
            hits = sum(1 for v in cache.values() if v.get('isbn13') or v.get('isbn10'))
            print(f'{len(cache)}/{len(books)} done, {hits} with ISBN', flush=True)
        time.sleep(0.3)
    json.dump(cache, open(CACHE, 'w'), indent=1)
    hits = sum(1 for v in cache.values() if v.get('isbn13') or v.get('isbn10'))
    print(f'FINISHED: {len(cache)}/{len(books)} looked up, {hits} with ISBN', flush=True)

if __name__ == '__main__':
    main()
