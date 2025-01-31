import {
  getStoreItemsArrayByIdsArray,
  getStoreItemById,
  getStoreItemsByCategory,
  getAllStoreItems,
} from '../store/storeapi.js';

import { defer } from 'react-router-dom';

const productDisplayLoader = ({ params }) => {
  const { productId } = params;
  return defer({ product: getStoreItemById(productId) });
};

export { productDisplayLoader };
