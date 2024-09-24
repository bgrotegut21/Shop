import './nav.css';
import FavoriteButton from '../FavoriteButton/FavoriteButton.jsx';
import ShoppingButton from '../ShoppingButton/ShoppingButton.jsx';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-subcontainer'>
          <button className='price-plaza-button'>
            <h1 className='price-plaza-title'>PRICE SLASH PLAZA 101</h1>
          </button>
          <div className='search-bar'>
            <input className='search-box' placeholder='Search for anything' />

            <button className='search-button'></button>
          </div>
          <div className='nav-icons'>
            <FavoriteButton />
            <ShoppingButton />
          </div>
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
