import '../styles/globalStyles.css';
import './productsPage.css';

import ssdImage from '../assets/ssd.png';

import Product from '../Product/Product.jsx';

const LoadingProduct = () => {
  return <div className='product-loading loading-animation'></div>;
};

const LoadingProductPage = () => {
  return (
    <div className='products-page'>
      <div className='product-page-result-loading loading-animation'></div>

      <div className='products-container'>
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
      </div>
    </div>
  );
};

const ProductPage = () => {
  return (
    <div className='products-page'>
      <h1 className='products-page-results'>{'1 Result for  "ssd" '}</h1>
      <div className='products-container'>
        <Product
          price='$339.99'
          description='Sandisk SSD'
          src={ssdImage}
          alt='solid state drive'
        />
        <Product
          price='$339.99'
          description='Sandisk SSD'
          src={ssdImage}
          alt='solid state drive'
        />
        <Product
          price='$339.99'
          description='Sandisk SSD'
          src={ssdImage}
          alt='solid state drive'
        />
      </div>
    </div>
  );
};

export default ProductPage;
