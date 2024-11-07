import App from '../App/App.jsx';

import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import Home from '../Home/Home.jsx';

import ProductPage from '../ProductPage/ProductPage.jsx';
import { productPageLoader } from '../ProductPage/productPageActions.js';

import ProductDisplay from '../ProductDisplay/ProductDisplay.jsx';
import { productDisplayLoader } from '../ProductDisplay/productDisplayActions.js';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: ':categoryName',
            element: <ProductPage />,
            loader: productPageLoader,
          },
          {
            path: 'product/:productId',
            element: <ProductDisplay />,
            loader: productDisplayLoader,
          },
        ],
      },
    ],
  },
]);

export { router };
