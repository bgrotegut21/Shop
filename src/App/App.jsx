import './app.css';

import Nav from '../Nav/Nav.jsx';
import MobileNav from '../MobileNav/MobileNav.jsx';
import Modal from '../Modal/Modal.jsx';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';

import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const appLoader = ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  console.log(q, 'the query');
};

const App = () => {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  const handleToggleMobile = (toggleBool) => setToggleMobile(toggleBool);

  return (
    <div className='app'>
      {toggleMobile && <MobileMenu onToggle={handleToggleMobile} />}
      {toggleModal && <Modal />}
      <MobileNav onToggle={handleToggleMobile} />
      <Nav />

      

      <div className='main'>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
