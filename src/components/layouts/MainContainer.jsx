const MainContainer = ({ children }) => {
  return (
    <main className="container mx-auto grid grid-cols-3 gap-7 pt-10">
      {children}
    </main>
  );
};
export default MainContainer;
