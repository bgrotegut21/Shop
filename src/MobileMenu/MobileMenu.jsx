import './menu.css';

import { useNavigate } from 'react-router-dom';
import { categories } from '../categories';

const MobileMenu = ({ onToggle }) => {
  const navigate = useNavigate();

  return (
    <div className='mobile-menu-overlay'>
      <div className='mobile-menu'>
        <div className='mobile-menu-info'>
          <button
            className='mobile-menu-exit-button'
            onClick={() => onToggle(false)}
          >
            X
          </button>
        </div>
        <div className='mobile-menu-container'>
          <ul className='mobile-menu-list'>
            {categories.map((category) => (
              <li className='mobile-menu-item' key={category.id}>
                <button
                  className='mobile-menu-button'
                  onClick={() => {
                    onToggle(false);
                    navigate(category.param);
                  }}
                >
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
