const MainSidebar = ({ children }) => {
  return (
    <div className="col-span-2 flex flex-col gap-5 lg:col-span-1">
      {children}
    </div>
  );
};
export default MainSidebar;
