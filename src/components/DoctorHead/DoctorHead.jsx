import { useState } from 'react';

import { numbersFormatter, share } from '../../utils';
import { SaveButton, ShareButton } from '../Button';
import { LikeIcon, ViewIcon } from '../icons';
import DoctorBio from './DoctorBio';

function isDoctorTrusted(satisfaction, commentsCount, waitingTime) {
  console.log(satisfaction);
  if (satisfaction <= 90) {
    return false;
  }
  if (commentsCount < 100) {
    return false;
  }
  return waitingTime === 1;
}

const DoctorHead = ({
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
  waitingTime,
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
          <SaveButton isBookmarked={isBookmarked} onSave={onSave} />
          <ShareButton
            isCopied={isDoctorDataCopied}
            onShare={handleShareClick}
          />
        </div>
        <div>
          <ViewIcon className="mr-1 inline-block align-middle" />
          <span className="inline-block align-middle">
            {numbersFormatter(viewCount)}
          </span>
        </div>
      </header>
      <DoctorBio
        fullName={`${name} ${family}`}
        image={image}
        expertise={expertise}
        isTrust={isDoctorTrusted(satisfaction, commentsCount, waitingTime)}
      />
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
export default DoctorHead;
