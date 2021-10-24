import { Navbar } from '../Navbar';
import { SearchBlock } from '../SearchBlock';

export const Header = () => {
  return (
    <>
      <header className='header'>
        <SearchBlock />
        <div className='bb-1px'></div>
        <Navbar />
      </header>
    </>
  );
};
