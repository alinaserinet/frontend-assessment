import { messages, titles } from '../../variables/en';
import { ShareIcon } from '../icons';

const ShareButton = ({ isCopied, onShare }) => {
  if (isCopied) {
    return (
      <span className="inline-block text-gray-700">{messages.DATA_COPIED}</span>
    );
  }
  return (
    <button className="inline-block disabled:text-gray-700" onClick={onShare}>
      <ShareIcon className="mr-1 inline-block align-middle" />
      <span className="inline-block align-middle">{titles.SHARE}</span>
    </button>
  );
};
export default ShareButton;
