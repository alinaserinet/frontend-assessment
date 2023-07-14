import { sentences, titles } from '../../variables/en';
import Button from '../Button/Button';
import { getWaitingTimeText } from './waitingTimeMessages';

const Service = ({ waitingTime, ...rest }) => {
  return (
    <div
      className="flex flex-col gap-4 rounded-lg bg-white p-5 shadow-sm"
      {...rest}
    >
      <h2 className="border-b border-solid border-slate-200 pb-3 font-bold">
        {titles.ONLINE_APPOINTMENTS}
      </h2>
      <ul className="before:content relative flex flex-col gap-1 pl-3 text-sm before:absolute before:left-0 before:h-full before:w-[2px] before:bg-slate-200">
        <li>{sentences.EARLIEST_APPOINTMENT}</li>
        <li>
          {sentences.AVERAGE_WAITING_TIME}
          <b className="ml-1">{getWaitingTimeText(waitingTime)}</b>
        </li>
      </ul>
      <Button>{titles.GET_TURN}</Button>
    </div>
  );
};
export default Service;
