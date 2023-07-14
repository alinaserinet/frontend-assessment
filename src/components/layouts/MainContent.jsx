const MainContent = ({ children, ...rest }) => {
  return (
    <div className="col-span-1 flex flex-col gap-5 lg:col-span-2" {...rest}>
      {children}
    </div>
  );
};
export default MainContent;
