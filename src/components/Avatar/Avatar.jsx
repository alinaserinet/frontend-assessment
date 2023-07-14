const Avatar = ({ src, ...rest }) => {
  return (
    <img
      src={src}
      alt=""
      className="h-24 w-24 rounded-full border-2 border-blue-600"
      {...rest}
    />
  );
};
export default Avatar;
