const MainContainer = ({ children, ...rest }) => {
  return (
    <main
      className="container mx-auto grid grid-cols-1 gap-y-7 px-3 pt-10 lg:grid-cols-3 lg:gap-7 2xl:px-0"
      {...rest}
    >
      {children}
    </main>
  );
};
export default MainContainer;
