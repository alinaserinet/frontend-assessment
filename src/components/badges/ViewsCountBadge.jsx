import { numbersFormatter } from '../../utils';
import { ViewIcon } from '../icons';

const ViewsCountBadge = ({ views, className = '', ...rest }) => {
  return (
    <div className={className} {...rest}>
      <ViewIcon className="mr-1 inline-block align-middle" />
      <span className="inline-block align-middle">
        {numbersFormatter(views)}
      </span>
    </div>
  );
};
export default ViewsCountBadge;
