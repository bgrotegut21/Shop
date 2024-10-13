import './category.css';

const Category = ({ src, alt, children }) => {
  return (
    <div className='category'>
      <div className='category-container'>
        <button className='category-button'>
          <img className='category-image' src={src} alt={alt} />
        </button>

        <a className='category-link' href='#'>
          {children}
        </a>
      </div>
    </div>
  );
};

export default Category;
