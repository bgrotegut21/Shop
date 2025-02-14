import {
  getStoreItemsByCategory,
  getStoreItemsByQuery,
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

const testItemsByQuery = async (query) => {
  await testTimeout(2000);
  const items = getStoreItemsByQuery(query);
  return items;
};

const productPageLoader = ({ params, request }) => {
  const { categoryName } = params;

  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  const isQuery = query === null ? false : true;

  if (isQuery) {
    // console.log('is the query');
    return defer({ products: getStoreItemsByQuery(query) });
  }

  return defer({ products: getStoreItemsByCategory(categoryName) });
};

export { productPageLoader };
