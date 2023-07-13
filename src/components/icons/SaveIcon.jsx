const SaveIcon = ({ fill, ...rest }) => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 16 21"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.4697 19.5303C13.6842 19.7448 14.0068 19.809 14.287 19.6929C14.5673 19.5768 14.75 19.3033 14.75 19V4C14.75 2.48122 13.5188 1.25 12 1.25H4C2.48122 1.25 1.25 2.48122 1.25 4V19C1.25 19.3033 1.43273 19.5768 1.71299 19.6929C1.99324 19.809 2.31583 19.7448 2.53033 19.5303L8 14.0607L13.4697 19.5303Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill ? 'currentColor' : ''}
      />
    </svg>
  );
};
export default SaveIcon;
