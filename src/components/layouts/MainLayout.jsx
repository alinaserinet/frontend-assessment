const MainLayout = ({ children, ...rest }) => {
  return (
    <div
      className="h-screen overflow-y-auto bg-slate-100 pb-7 lg:pb-0"
      {...rest}
    >
      {children}
    </div>
  );
};
export default MainLayout;
