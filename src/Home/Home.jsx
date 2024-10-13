import './home.css';

import mensShirtImage from '../assets/men-shirt.png';
import womenShirtImage from '../assets/womenshirt.png';
import dragonJewleryImage from '../assets/dragonjewlery.png';
import ssdImage from '../assets/ssd.png';

import Category from '../Category/Category.jsx';
import SlideShow from '../SlideShow/SlideShow.jsx';

const Home = () => {
  return (
    <div className='home'>
      <SlideShow />

      <div className='categories-container'>
        <Category src={mensShirtImage} alt='a shirt of a man'>
          {"Men's Clothing"}
        </Category>

        <Category src={womenShirtImage} alt='a shirt of a woman'>
          {"Women's Clothing"}
        </Category>

        <Category src={dragonJewleryImage} alt='a dragon bracelet'>
          Jewlery
        </Category>

        <Category src={ssdImage} alt='solid state drive'>
          Electronics
        </Category>
      </div>
    </div>
  );
};

export default Home;
