import { Book } from '../types';

export const getTitleString = (
  title: string | string[] | undefined,
): string => {
  let titleString = 'Booksplorer';
  if (title) {
    titleString += ' | ';
    if (Array.isArray(title)) {
      titleString += title.join(' | ');
    } else {
      titleString += title;
    }
  }
  return titleString;
};

export const getBookCoverUrl = (books: Book[]): string => {
  let cover = 'fallback';

  books.forEach((book) => {
    if (book.cover.includes('gr-assets')) {
      cover = book.cover;
      return;
    }
  });

  return cover;
};
