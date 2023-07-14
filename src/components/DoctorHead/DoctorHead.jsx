import { useState } from 'react';

import { share } from '../../utils';
import { titles } from '../../variables/en';
import { SatisfactionBadge, ViewsCountBadge } from '../badges';
import { SaveButton, ShareButton } from '../Button';
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
  ...rest
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
    <section className="rounded-lg bg-white p-5" {...rest}>
      <header className="mb-4 flex justify-between">
        <div>
          <SaveButton isBookmarked={isBookmarked} onSave={onSave} />
          <ShareButton
            isCopied={isDoctorDataCopied}
            onShare={handleShareClick}
          />
        </div>
        <ViewsCountBadge views={viewCount} />
      </header>
      <DoctorBio
        fullName={`${name} ${family}`}
        image={image}
        expertise={expertise}
        isTrust={isDoctorTrusted(satisfaction, commentsCount, waitingTime)}
      />
      <footer className="mt-4 flex items-center justify-center gap-3">
        <SatisfactionBadge satisfaction={satisfaction} />
        <div>
          <span>
            {titles.SATISFACTION} ({commentsCount} {titles.COMMENTS})
          </span>
        </div>
      </footer>
    </section>
  );
};
export default DoctorHead;
