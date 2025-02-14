import './product.css';

import AddButton from '../AddButton/AddButton.jsx';
import ProductSquare from '../ProductSquare/ProductSquare.jsx';

const Product = ({ price, title, src, productId, favState, favDispatch }) => {
  return (
    <div className='product'>
      <ProductSquare
        src={src}
        alt={title}
        productId={productId}
        favState={favState}
        favDispatch={favDispatch}
      />
      <AddButton />
      <h2 className='product-price'>${price}</h2>
      <p className='product-description'>{title}</p>
    </div>
  );
};

export default Product;
