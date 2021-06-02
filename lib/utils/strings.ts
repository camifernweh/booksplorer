import { Country, Book } from '../types';

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

  for (let i = 0; i < books.length; i++) {
    if (books[i].cover.includes('gr-assets')) {
      cover = books[i].cover;
      break;
    }
  }
  return cover;
};

interface Path {
  params: {
    country: string;
  };
}

export const createPathStrings = (countries: Country[]): Path[] => {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       country: 'germany',

  //     }
  //   },
  //   {
  //     params: {
  //       country: 'united-kingdom'
  //     }
  //   }
  // ]

  const paths = countries.map((country) => {
    return {
      params: {
        country: country.name.toLowerCase().replace(/\s/g, '-'),
      },
    };
  });
  return paths;
};

export const getNameFromPath = (name: string): string => {
  if (name === 'guinea-bissau') return 'Guinea-Bissau';
  else if (name === 'timor-leste') return 'Timor-Leste';
  else if (name === "côte-d'ivoire") return "Côte d'Ivoire";

  let normalizedName: string;

  if (!name.includes('-')) {
    normalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  } else {
    normalizedName = name.charAt(0).toUpperCase();

    for (let i = 1; i < name.length; i++) {
      if (name[i] !== '-' && name[i - 1] !== '-') {
        normalizedName += name.charAt(i);
      } else if (name[i] === '-') {
        normalizedName += ' ' + name.charAt(i + 1).toUpperCase();
      }
    }
  }
  if (normalizedName.includes(' Of ')) {
    normalizedName = normalizedName.replace(' Of ', ' of ');
  } else if (normalizedName.includes(' And ')) {
    normalizedName = normalizedName.replace(' And ', ' and ');
  }

  return normalizedName;
};
