import { useEffect } from 'react';
import { Header } from '../../components/Header';

export const MainPage = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <div className='main-page'>
        <div className='container'></div>
      </div>
    </>
  );
};
