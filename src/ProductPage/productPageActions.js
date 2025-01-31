import {
  getStoreItemsByCategory,
  getStoreItemsByQuery,
} from '../store/storeapi.js';

import { defer } from 'react-router-dom';

const testTimeout = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const testItemsByCategory = async (categoryNam, request) => {
  await testTimeout(2000);
  const items = await getStoreItemsByCategory(categoryName);
  return items;
};

const productPageLoader = ({ params, request }) => {
  console.log('page loading');
  const { categoryName } = params;

  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  const isQuery = query === null ? false : true;

  // console.log(query, 'the query');

  if (isQuery) {
    return defer({ products: getStoreItemsByQuery(query) });
  }

  return defer({ products: getStoreItemsByCategory(categoryName) });
};

export { productPageLoader };
