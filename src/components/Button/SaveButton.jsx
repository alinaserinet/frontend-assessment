import { SaveIcon } from '../icons';

const SaveButton = ({ onSave, isBookmarked }) => {
  return (
    <button className="mr-4 inline-block" onClick={() => onSave(!isBookmarked)}>
      <SaveIcon
        className="mr-1 inline-block align-middle"
        fill={isBookmarked}
      />
      <span className="inline-block align-middle">Save</span>
    </button>
  );
};
export default SaveButton;
