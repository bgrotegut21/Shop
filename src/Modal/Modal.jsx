import './modal.css';

const Modal = () => {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h1 className='modal-title'>✅ Thanks for Shopping with Us!</h1>
        <p className='modal-description'>
          Your items should arrive in 1-3 business days
        </p>
        <button className='modal-button'>Go back to Home</button>
      </div>
    </div>
  );
};

export default Modal;
