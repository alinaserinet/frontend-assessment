const MainSidebar = ({ children, ...rest }) => {
  return (
    <div className="col-span-2 flex flex-col gap-5 lg:col-span-1" {...rest}>
      {children}
    </div>
  );
};
export default MainSidebar;
