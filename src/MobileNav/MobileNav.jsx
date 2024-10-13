import './mobile.css';

import NavIcons from '../NavIcons/NavIcons';

import SearchBar from '../SearchBar/SearchBar';

const MobileNav = () => {
  return (
    <div className='mobile-nav'>
      <div className='mobile-nav-container'>
        <button className='mobile-hamburger-menu'></button>
        <button className='mobile-nav-title-button'>
          PRICE SLASH PLAZA 101
        </button>
        <NavIcons />
      </div>
      <div className='mobile-nav-subcontainer'>
        <SearchBar />
      </div>
    </div>
  );
};

export default MobileNav;
