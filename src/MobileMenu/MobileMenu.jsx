import './mobilemenu.css';

const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
      <div className='mobile-menu-info'>
        <h2>menu</h2>
        <button className='mobile-menu-exit'>X</button>
      </div>
      <div className='mobile-menu-container'>
        <ul className='mobile-menu-list'>
          <li key='a'>
            <a className='mobile-menu-link' href='#'>
              Home
            </a>
          </li>
          <li key='b'>
            <a className='mobile-menu-link' href='#'>
              {"Men's Clothing"}
            </a>
          </li>
          <li key='c'>
            <a className='mobile-menu-link' href='#'>
              {"Woman's Clothing"}
            </a>
          </li>
          <li key='d'>
            <a className='mobile-menu-link' href='#'>
              Electronics
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
