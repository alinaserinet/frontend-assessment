const MainLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-y-auto bg-slate-100 pb-7 lg:pb-0">
      {children}
    </div>
  );
};
export default MainLayout;
