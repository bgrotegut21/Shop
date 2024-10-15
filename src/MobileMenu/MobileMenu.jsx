import './menu.css';

const MobileMenu = () => {
  return (
    <div className='mobile-menu-overlay'>
      <div className='mobile-menu'>
        <div className='mobile-menu-info'>
          <button className='mobile-menu-exit-button'>X</button>
        </div>
        <div className='mobile-menu-container'>
          <ul className='mobile-menu-list'>
            <li className='mobile-menu-item' key='a'>
              <button className='mobile-menu-button' href='#'>
                Home
              </button>
            </li>
            <li className='mobile-menu-item' key='b'>
              <button className='mobile-menu-button' href='#'>
                {"Men's Clothing"}
              </button>
            </li>
            <li className='mobile-menu-item' key='c'>
              <button className='mobile-menu-button' href='#'>
                {"Woman's Clothing"}
              </button>
            </li>
            <li className='mobile-menu-item' key='d'>
              <button className='mobile-menu-button' href='#'>
                Electronics
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
