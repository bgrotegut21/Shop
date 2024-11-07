import './productdisplay.css';

import ProductSquare from '../ProductSquare/ProductSquare';
import ssdImage from '../assets/ssd.png';

import AddButton from '../AddButton/AddButton';

import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

const LoadingProductDisplay = () => {
  return (
    <div className='product-display'>
      <div className='product-display-square-loading loading-animation '></div>

      <div className='product-display-container'>
        <div className='product-display-title-loading loading-animation'></div>

        <div className='product-display-description-loading loading-animation'></div>
        <div className='product-display-price-loading loading-animation'></div>
        <div className='product-display-button-loading loading-animation'></div>
      </div>
    </div>
  );
};

// <div className='product-display'>
// <ProductSquare src={ssdImage} alt='solid state drive' size='large' />

// <div className='product-display-container'>
//   <h1 className='product-display-title'>SSD</h1>

//   <p className='product-display-description'>
//     This Solid State Drive was made by Sandisk it is manufacutred in china
//     and can store up to 500GB. The Solid State Drive is the fastest on the
//     market
//   </p>

//   <h2 className='product-display-price'>$339.99</h2>
//   <AddButton size='large' />
// </div>
// </div>

const ProductDisplay = () => {
  const productData = useLoaderData();

  return (
    <Suspense fallback={<LoadingProductDisplay />}>
      <Await resolve={productData.product}>
        {(product) => (
          <div className='product-display'>
            <ProductSquare
              src={product.image}
              alt={product.title}
              size='large'
            />

            <div className='product-display-container'>
              <h1 className='product-display-title'>{product.title}</h1>

              <p className='product-display-description'>
                {product.description}
              </p>

              <h2 className='product-display-price'>{product.price}</h2>
              <AddButton size='large' />
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default ProductDisplay;
