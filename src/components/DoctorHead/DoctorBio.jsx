import Avatar from '../Avatar/Avatar';
import { TrustIcon } from '../icons';

const BioCard = ({ image, fullName, isTrust, expertise, ...rest }) => {
  return (
    <main
      className="flex items-center gap-5 rounded-lg bg-slate-50 p-5"
      {...rest}
    >
      <div>
        <Avatar src={image} />
      </div>
      <div>
        <div>
          <h2 className="mr-2 inline-block align-middle font-bold">
            {fullName}
          </h2>
          {isTrust ? <TrustIcon className="inline-block align-middle" /> : null}
        </div>
        <h3 className="mt-1 text-gray-700">{expertise}</h3>
      </div>
    </main>
  );
};
export default BioCard;
