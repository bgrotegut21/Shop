import './error.css';

import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const err = useRouteError();

  if (isRouteErrorResponse(err)) {
    return (
      <div className='error-page'>
        <div className='error-page-container'>
          <h1 className='error-code'>{err.status}</h1>
          <p className='error-description'>{err.statusText}</p>
          <button className='error-button'>Go back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className='error-page'>
      <div className='error-page-container'>
        <h1 className='error-code'>Ooops!</h1>
        <p className='error-description'>{err.message}</p>
        <button className='error-button'>Go back to Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
