import './app.css';

import ssdImage from '../assets/ssd.png';

import Nav from '../Nav/Nav.jsx';
import MobileNav from '../MobileNav/MobileNav.jsx';

import Home from '../Home/Home.jsx';
import ProductPage from '../ProductPage/ProductPage.jsx';
import ProductDisplay from '../ProductDisplay/ProductDisplay.jsx';
import Cart from '../Cart/Cart.jsx';
import Modal from '../Modal/Modal.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';

import MobileMenu from '../MobileMenu/MobileMenu.jsx';

const App = () => {
  return (
    <div className='app'>
      <MobileMenu />
      <MobileNav />
      {/* <Nav /> */}

      <div className='main'>
        <div className='content'>
          <ErrorPage />
        </div>
      </div>
    </div>
  );
};

export default App;
