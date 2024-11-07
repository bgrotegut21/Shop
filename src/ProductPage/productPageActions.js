import {
  getStoreItemsArrayByIdsArray,
  getStoreItemById,
  getStoreItemsByCategory,
  getAllStoreItems,
} from '../store/storeapi.js';

import { defer } from 'react-router-dom';

const testTimeout = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const testItemsByCategory = async (categoryName) => {
  await testTimeout(2000);
  const items = await getStoreItemsByCategory(categoryName);
  return items;
};

const productPageLoader = ({ params }) => {
  const { categoryName } = params;

  return defer({
    products: getStoreItemsByCategory(categoryName),
  });
};

export { productPageLoader };
