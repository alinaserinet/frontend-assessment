import Avatar from '../Avatar/Avatar';
import { TrustIcon } from '../icons';

const BioCard = ({ image, fullName, isTrust, expertise, ...rest }) => {
  return (
    <main
      className="flex flex-col items-center gap-5 rounded-lg bg-slate-50 p-5 sm:flex-row"
      {...rest}
    >
      <div>
        <Avatar src={image} />
      </div>
      <div className="text-center sm:text-start">
        <h2 className="mr-2 inline-block align-middle text-sm font-bold sm:text-base">
          {fullName}
        </h2>
        {isTrust ? <TrustIcon className="inline-block align-middle" /> : null}
        <h3 className="mt-1 text-gray-700">{expertise}</h3>
      </div>
    </main>
  );
};
export default BioCard;
