import './error.css';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <div className='error-page-container'>
        <h1 className='error-code'>404</h1>
        <p className='error-description'>Page Not Found</p>
        <button className='error-button'>Go back to Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;
