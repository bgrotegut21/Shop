import './nav.css';

import NavIcons from '../NavIcons/NavIcons.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

const PricePlazaTitleButton = () => {
  return (
    <button className='price-plaza-button'>
      <h1 className='price-plaza-title'>PRICE SLASH PLAZA 101</h1>
    </button>
  );
};

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-subcontainer'>
          <PricePlazaTitleButton />
          <SearchBar />
          <NavIcons />
        </div>
      </div>
      <div className='nav-container2'>
        <ul className='nav-list'>
          <li key='1'>
            <a className='nav-link' href='#'>
              Home
            </a>
          </li>
          <li key='2'>
            <a className='nav-link' href='#'>
              {"Men's Clothing"}
            </a>
          </li>
          <li key='3'>
            <a className='nav-link' href='#'>
              {"Woman's Clothing"}
            </a>
          </li>
          <li key='4'>
            <a className='nav-link' href='#'>
              Electronics
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
