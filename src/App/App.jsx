import './app.css';

import { itemsReducer } from './itemsReducer.jsx';
import { favoritesReducer } from './favoritesReducer.jsx';

import Nav from '../Nav/Nav.jsx';
import MobileNav from '../MobileNav/MobileNav.jsx';
import Modal from '../Modal/Modal.jsx';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';

import { useState, useReducer } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const [favState, favDispatch] = useReducer(favoritesReducer, []);

  const handleToggleMobile = (toggleBool) => setToggleMobile(toggleBool);

  console.log(favState, 'the fav state on app');
  console.log(favDispatch, 'the fav dispatch');

  return (
    <div className='app'>
      {toggleMobile && <MobileMenu onToggle={handleToggleMobile} />}
      {toggleModal && <Modal />}
      <MobileNav onToggle={handleToggleMobile} />
      <Nav />

      <div className='main'>
        <div className='content'>
          <Outlet context={[favState, favDispatch]} />
        </div>
      </div>
    </div>
  );
};

export default App;
