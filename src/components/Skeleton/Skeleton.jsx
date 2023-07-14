const Skeleton = ({ className = '', ...rest }) => {
  return <div className={`rounded-lg bg-white/60 ${className}`} {...rest} />;
};
export default Skeleton;
