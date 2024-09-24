import './app.css';

import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <div className='main'>
        <div className='content'>
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
