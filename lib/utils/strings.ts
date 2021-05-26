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
