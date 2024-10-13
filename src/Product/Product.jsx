import './product.css';

import AddButton from '../AddButton/AddButton.jsx';
import ProductSquare from '../ProductSquare/ProductSquare.jsx';

const Product = ({ price, description, src, alt }) => {
  return (
    <div className='product'>
      <ProductSquare src={src} alt={alt} />
      <AddButton />
      <h2 className='product-price'>{price}</h2>
      <p className='product-description'>{description}</p>
    </div>
  );
};

export default Product;
