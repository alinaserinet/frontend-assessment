import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Button from '../button/button';

export const Service = ({ waitingTime }) => {
  const [waitingTimeText, setWaitingTimeText] = useState('');
  useEffect(() => {
    if (waitingTime === 0) {
      setWaitingTimeText('Less than half an hour');
    } else if (waitingTime === 1) {
      setWaitingTimeText('Less than an hour');
    } else if (waitingTime === 2) {
      setWaitingTimeText('Less than two hours');
    } else if (waitingTime === 3) {
      setWaitingTimeText('More than two hours');
    }
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

Service.prototype = {
  waitingTime: PropTypes.number,
};

export default Service;
