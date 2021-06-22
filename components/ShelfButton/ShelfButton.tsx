import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

interface ShelfButtonProps {
  mainText: string;
  toggleText?: string;
  bookIcon?: boolean;
  isOnShelf?: boolean;
  isMarkedAsRead?: boolean;
  handleToggleFromShelf?: () => void;
  handleMarkAsRead?: () => void;
}

const styles = {
  basic: {
    color: 'rgb(255, 255, 255)',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
  add: {
    backgroundColor: '#2c5075',
  },
  added: {
    backgroundColor: '#0C7C59',
  },
};

export default function ShelfButton({
  mainText,
  toggleText,
  bookIcon,
  isOnShelf,
  isMarkedAsRead,
  handleToggleFromShelf,
  handleMarkAsRead,
}: ShelfButtonProps): React.ReactElement {
  return (
    <>
      {!bookIcon ? (
        <Button
          variant="contained"
          startIcon={!isOnShelf ? <AddIcon /> : <CheckIcon />}
          onClick={handleToggleFromShelf}
          style={
            !isOnShelf
              ? { ...styles.basic, ...styles.add }
              : { ...styles.basic, ...styles.added }
          }
        >
          {mainText}
        </Button>
      ) : (
        <Button
          variant="contained"
          startIcon={
            !isMarkedAsRead ? <BookmarkBorderIcon /> : <BookmarkIcon />
          }
          onClick={handleMarkAsRead}
          style={
            !isMarkedAsRead
              ? { ...styles.basic, ...styles.add }
              : { ...styles.basic, ...styles.added }
          }
        >
          {!isMarkedAsRead ? mainText : toggleText}
        </Button>
      )}
    </>
  );
}
