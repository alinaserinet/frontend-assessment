import { useEffect, useState } from 'react';

import Service from './components/service';
import logo from './logo.svg';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/profile.json')
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
    //   Return Data:
    //   name,
    //   family,
    //   image,
    //   viewCount,
    //   isBookmarked,
    //   profileUrl,
    //   expertise,
    //   satisfaction,
    //   commentsCount,
    //   waitingTime
  }, []);

  if (!data) return null;
  return (
    <div className="h-screen bg-slate-100">
      <header className="flex h-16 bg-white opacity-60">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <div className="h-3 w-20 rounded-full bg-slate-100" />
          </div>
          <nav className="flex gap-5">
            <div className="h-3 w-20 rounded-full bg-slate-100" />
            <div className="h-3 w-20 rounded-full bg-slate-100" />
            <div className="h-3 w-20 rounded-full bg-slate-100" />
          </nav>
          <div className="h-9 w-28 rounded-md bg-slate-100" />
        </div>
      </header>
      <main className="container mx-auto grid grid-cols-3 gap-7 pt-10">
        <div className="col-span-2 flex flex-col gap-5">
          {/* Doctor Head */}
          <div className="h-96 rounded-lg bg-white/60" />
          <div className="h-56 rounded-lg bg-white/60" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="h-52 rounded-lg bg-white/60" />
          <Service waitingTime={data?.waitingTime} />
        </div>
      </main>
    </div>
  );
};

export default App;
