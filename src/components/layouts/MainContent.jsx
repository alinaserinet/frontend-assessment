const MainContent = ({ children }) => {
  return (
    <div className="col-span-1 flex flex-col gap-5 lg:col-span-2">
      {children}
    </div>
  );
};
export default MainContent;
