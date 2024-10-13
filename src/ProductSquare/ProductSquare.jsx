import './productsquare.css';

import FavoriteButton from '../FavoriteButton/FavoriteButton.jsx';

const ProductSquare = ({ src, alt, size }) => {
  let sizeClass = '';
  let sizeContainerClass = '';
  let sizeFavContainer = '';

  if (size === 'large') {
    sizeClass = 'product-square-large';
    sizeContainerClass = 'product-square-image-container-large';
    sizeFavContainer = 'product-square-favorite-container-large';
  }

  if (size === 'medium') {
    sizeClass = 'product-square-medium';
    sizeContainerClass = 'product-square-image-container-medium';
    sizeFavContainer = 'product-square-favorite-container-medium';
  }

  return (
    <div className={`product-square ${sizeClass}`}>
      <div className={`product-square-favorite-container ${sizeFavContainer}`}>
        <FavoriteButton />
      </div>

      <div className={`product-square-image-container ${sizeContainerClass}`}>
        <img className='product-square-image' src={src} alt={alt} />
      </div>
    </div>
  );
};

export default ProductSquare;
