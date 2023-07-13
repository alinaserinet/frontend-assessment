const MainHeader = ({ logo }) => {
  return (
    <header className="flex h-16 bg-white opacity-60">
      <div className="container mx-auto flex items-center justify-between px-3 2xl:px-0">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" />
          <div className="h-3 w-20 rounded-full bg-slate-100" />
        </div>
        <nav className="hidden lg:flex lg:gap-5">
          <div className="h-3 w-20 rounded-full bg-slate-100" />
          <div className="h-3 w-20 rounded-full bg-slate-100" />
          <div className="h-3 w-20 rounded-full bg-slate-100" />
        </nav>
        <div className="h-9 w-28 rounded-md bg-slate-100" />
      </div>
    </header>
  );
};
export default MainHeader;
