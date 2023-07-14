import { LikeIcon } from '../icons';

const SatisfactionBadge = ({ satisfaction }) => {
  return (
    <div className="inline-block rounded-full bg-green-600 px-5 py-1 text-white">
      <LikeIcon className="mr-1 inline-block align-middle text-inherit" />
      <span className="inline-block align-middle font-bold">
        {satisfaction}%
      </span>
    </div>
  );
};
export default SatisfactionBadge;
