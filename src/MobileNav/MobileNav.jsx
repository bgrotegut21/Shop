import './mobile.css';

import NavIcons from '../NavIcons/NavIcons';
import SearchBar from '../SearchBar/SearchBar';

import { Link } from 'react-router-dom';

const MobileNav = ({ onToggle }) => {
  return (
    <div className='mobile-nav'>
      <div className='mobile-nav-container'>
        <button
          className='mobile-hamburger-menu'
          onClick={() => onToggle(true)}
        ></button>

        <Link to='/'>
          <button className='mobile-nav-title-button'>
            PRICE SLASH PLAZA 101
          </button>
        </Link>

        <NavIcons />
      </div>
      <div className='mobile-nav-subcontainer'>
        <SearchBar />
      </div>
    </div>
  );
};

export default MobileNav;
