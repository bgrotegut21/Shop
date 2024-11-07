import {
  getStoreItemsArrayByIdsArray,
  getStoreItemById,
  getStoreItemsByCategory,
  getAllStoreItems,
} from '../store/storeapi.js';

import { defer } from 'react-router-dom';

const productDisplayLoader = ({ params }) => {
  console.log('loading product display loader');
  const { productId } = params;
  return defer({ product: getStoreItemById(productId) });
};

export { productDisplayLoader };
