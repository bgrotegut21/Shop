import '../styles/globalStyles.css';
import './productsPage.css';

import ssdImage from '../assets/ssd.png';
import Product from '../Product/Product.jsx';

import { useLoaderData, Await } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';

const LoadingProduct = () => {
  return <div className='product-loading loading-animation'></div>;
};

const LoadingProductPage = () => {
  return (
    <div className='products-page'>
      <div className='product-page-result-loading loading-animation'></div>

      <div className='products-container'>
        <LoadingProduct key='loading-product-1' />
        <LoadingProduct key='loading-product-2' />
        <LoadingProduct key='loading-product-3' />
        <LoadingProduct key='loading-product-4' />
      </div>
    </div>
  );
};

{
  /* <Product
key={data.id}
price={data.price}
title={data.title}
src={data.image}
/> */
}

const ProductPage = () => {
  const loaderData = useLoaderData();

  return (
    <Suspense fallback={<LoadingProductPage />}>
      <Await resolve={loaderData.products}>
        {(products) => (
          <div className='products-page'>
            <h1 className='products-page-results'>{products.title}</h1>
            <div className='products-container'>
              {products.items.map((data) => (
                <Product
                  key={data.id}
                  price={data.price}
                  title={data.title}
                  src={data.image}
                />
              ))}
            </div>
          </div>
        )}
      </Await>
    </Suspense>
  );
};

export default ProductPage;
