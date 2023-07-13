import { useEffect, useState } from 'react';

import { Doctor, Service } from './components';
import {
  MainContainer,
  MainContent,
  MainHeader,
  MainLayout,
  MainSidebar,
} from './components/layouts';
import logo from './logo.svg';

const App = () => {
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    fetch('/profile.json')
      .then((response) => response.json())
      .then((data) => setDoctorData(data));
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

  function handleDoctorSave(value) {
    console.log(value);
    fetch(`/profile.json?isBookmarked:${value}`).then(console.log);
  }

  if (!doctorData) return null;
  return (
    <MainLayout>
      <MainHeader logo={logo} />
      <MainContainer>
        <MainContent>
          <Doctor
            name={doctorData?.name}
            family={doctorData?.family}
            commentsCount={doctorData?.commentsCount}
            expertise={doctorData?.expertise}
            image={doctorData?.image}
            isBookmarked={doctorData?.isBookmarked}
            satisfaction={doctorData?.satisfaction}
            viewCount={doctorData?.viewCount}
            profileUrl={doctorData?.profileUrl}
            onSave={handleDoctorSave}
          />
          <div className="h-56 rounded-lg bg-white/60" />
        </MainContent>
        <MainSidebar>
          <div className="h-52 rounded-lg bg-white/60" />
          <Service waitingTime={doctorData?.waitingTime} />
        </MainSidebar>
      </MainContainer>
    </MainLayout>
  );
};

export default App;
