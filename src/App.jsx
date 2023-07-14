import { useEffect, useState } from 'react';

import { getDoctorData } from './api';
import { Doctor, Service, Skeleton } from './components';
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
    getDoctorData().then((data) => setDoctorData(data));
  }, []);

  function handleDoctorSave(value) {
    // must send request to the server to change it but can not change json file
    setDoctorData((prevState) => ({
      ...prevState,
      isBookmarked: value,
    }));
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
            waitingTime={doctorData?.waitingTime}
            onSave={handleDoctorSave}
          />
          <Skeleton className="h-56" />
        </MainContent>
        <MainSidebar>
          <Skeleton className="h-52" />
          <Service waitingTime={doctorData?.waitingTime} />
        </MainSidebar>
      </MainContainer>
    </MainLayout>
  );
};

export default App;
