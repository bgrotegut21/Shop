import './home.css';

import { categories } from '../categories.js';

import Category from '../Category/Category.jsx';
import SlideShow from '../SlideShow/SlideShow.jsx';

{
  /* <Category src={mensShirtImage} alt='a shirt of a man'>
{"Men's Clothing"}
</Category> */
}

const Home = () => {
  return (
    <div className='home'>
      <SlideShow />

      <div className='categories-container'>
        {categories.map(
          (category) =>
            category.title !== 'Home' && (
              <Category
                key={category.title}
                src={category.src}
                alt={category.alt}
                to={category.param}
              >
                {category.title}
              </Category>
            )
        )}
      </div>
    </div>
  );
};

export default Home;
