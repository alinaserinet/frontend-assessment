import { titles } from '../../variables/en';
import { SaveIcon } from '../icons';

const SaveButton = ({ onSave, isBookmarked }) => {
  return (
    <button className="mr-4 inline-block" onClick={() => onSave(!isBookmarked)}>
      <SaveIcon
        className="mr-1 inline-block align-middle"
        fill={isBookmarked}
      />
      <span className="inline-block align-middle">{titles.SAVE}</span>
    </button>
  );
};
export default SaveButton;
