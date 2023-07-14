import { LikeIcon } from '../icons';

const SatisfactionBadge = ({ satisfaction, ...rest }) => {
  return (
    <div
      className="inline-block rounded-full bg-green-600 px-2 py-1 text-white sm:px-5"
      {...rest}
    >
      <LikeIcon className="mr-1 inline-block align-middle text-inherit" />
      <span className="inline-block align-middle text-sm font-bold sm:text-base">
        {satisfaction}%
      </span>
    </div>
  );
};
export default SatisfactionBadge;
