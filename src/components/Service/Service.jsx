import { useEffect, useState } from 'react';

import Button from '../Button/Button';
import waitingTimeMessages from './waitingTimeMessages';

const Service = ({ waitingTime }) => {
  const [waitingTimeText, setWaitingTimeText] = useState('');

  useEffect(() => {
    const waitingTimeMessage = waitingTimeMessages[waitingTime].en || '';
    setWaitingTimeText(waitingTimeMessage);
  }, [waitingTime]);

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-5 shadow-sm">
      <h2 className="border-b border-solid border-slate-200 pb-3 font-bold">
        Online Appointments
      </h2>
      <ul className="before:content relative flex flex-col gap-1 pl-3 text-sm before:absolute before:left-0 before:h-full before:w-[2px] before:bg-slate-200">
        <li>The possibility of getting the earliest appointment</li>
        <li>
          Average waiting time for a visit: <b>{waitingTimeText}</b>
        </li>
      </ul>
      <Button>Get Turn</Button>
    </div>
  );
};
export default Service;
