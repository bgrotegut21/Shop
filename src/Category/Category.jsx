import './category.css';

import { Link } from 'react-router-dom';

const Category = ({ src, alt, children, to }) => {
  return (
    <div className='category'>
      <div className='category-container'>
        <Link to={to}>
          <button className='category-button'>
            <img className='category-image' src={src} alt={alt} />
          </button>
        </Link>

        <Link className='category-link' to={to}>
          {children}
        </Link>
      </div>
    </div>
  );
};

export default Category;
