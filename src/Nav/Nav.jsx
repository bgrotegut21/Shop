import './nav.css';

import { categories } from '../categories.js';

import NavIcons from '../NavIcons/NavIcons.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

import { Link } from 'react-router-dom';

const PricePlazaTitleButton = () => {
  return (
    <Link to='/'>
      <button className='price-plaza-button'>
        <h1 className='price-plaza-title'>PRICE SLASH PLAZA 101</h1>
      </button>
    </Link>
  );
};

{
  /* <li key='1'>
<a className='nav-link' href='#'>
  Home
</a>
</li> */
}

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
          {categories.map((category) => (
            <li key={category.id}>
              <Link className='nav-link' to={category.param}>
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
