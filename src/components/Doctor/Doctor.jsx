import { useState } from 'react';

import { numbersFormatter, share } from '../../utils';
import Avatar from '../Avatar';
import { LikeIcon, SaveIcon, ShareIcon, TrustIcon, ViewIcon } from '../icons';

const Doctor = ({
  name,
  family,
  image,
  isBookmarked,
  viewCount,
  expertise,
  satisfaction,
  commentsCount,
  onSave,
  profileUrl,
}) => {
  const [isDoctorDataCopied, setIsDoctorDataCopied] = useState(false);

  function handleShareClick() {
    share({
      url: profileUrl,
      title: `${name} ${family}`,
      text: expertise,
    }).then((result) => {
      setIsDoctorDataCopied(result.wasCopied);
      setTimeout(() => setIsDoctorDataCopied(false), 1500);
    });
  }
  return (
    <section className="rounded-lg bg-white p-5">
      <header className="mb-4 flex justify-between">
        <div>
          <button
            className="mr-4 inline-block"
            onClick={() => onSave(!isBookmarked)}
          >
            <SaveIcon
              className="mr-1 inline-block align-middle"
              fill={isBookmarked}
            />
            <span className="inline-block align-middle">Save</span>
          </button>
          {isDoctorDataCopied ? (
            <span className="inline-block text-gray-700">data was copied</span>
          ) : (
            <button
              className="inline-block disabled:text-gray-700"
              onClick={handleShareClick}
            >
              <ShareIcon className="mr-1 inline-block align-middle" />
              <span className="inline-block align-middle">Share</span>
            </button>
          )}
        </div>
        <div>
          <ViewIcon className="mr-1 inline-block align-middle" />
          <span className="inline-block align-middle">
            {numbersFormatter(viewCount)}
          </span>
        </div>
      </header>
      <main className="flex items-center gap-5 rounded-lg bg-slate-50 p-5">
        <div>
          <Avatar src={image} />
        </div>
        <div>
          <div>
            <h2 className="mr-2 inline-block align-middle font-bold">
              {name} {family}
            </h2>
            <TrustIcon className="inline-block align-middle" />
          </div>
          <h3 className="mt-1 text-gray-700">{expertise}</h3>
        </div>
      </main>
      <footer className="mt-4 flex items-center justify-center gap-3">
        <div className="inline-block rounded-full bg-green-600 px-5 py-1 text-white">
          <LikeIcon className="mr-1 inline-block align-middle text-inherit" />
          <span className="inline-block align-middle font-bold">
            {satisfaction}%
          </span>
        </div>
        <div>
          <span>Satisfaction ({commentsCount} comments)</span>
        </div>
      </footer>
    </section>
  );
};
export default Doctor;
