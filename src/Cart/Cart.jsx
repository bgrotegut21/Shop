import './cart.css';

import ssdImage from '../assets/ssd.png';

import ProductSquare from '../ProductSquare/ProductSquare';

const CheckOutButton = () => {
  return <button className='checkout-button'>Proceed to checkout</button>;
};

const CartItem = ({ src, alt, descrpition, price }) => {
  return (
    <div className='cart-item'>
      <div className='cart-item-square'>
        <ProductSquare src={src} alt={alt} size='medium' />
      </div>

      <div className='cart-item-box'>
        <div className='cart-item-info'>
          <p className='cart-item-description'>{descrpition}</p>
          <h2 className='cart-item-price'>{price}</h2>
        </div>

        <a className='cart-item-remove' href='#'>
          Remove
        </a>
      </div>
    </div>
  );
};

const LoadingCartItem = () => {
  return (
    <div className='cart-item cart-item-loading'>
      <div className='cart-item-square'>
        <div className='cart-square-loading loading-animation'></div>
      </div>

      <div className='cart-item-box'>
        <div className='cart-item-info'>
          <div className='cart-item-description-loading loading-animation'></div>
        </div>

        <div className='cart-item-remove-loading loading-animation'></div>
      </div>
    </div>
  );
};

const LoadingCheckoutButton = () => {
  return <div className='checkout-button-loading loading-animation'></div>;
};

const LoadingCart = () => {
  return (
    <div className='cart'>
      <div className='cart-title-loading loading-animation'></div>

      <div className='cart-container'>
        <div className='cart-stats-loading loading-animation'></div>
        <LoadingCheckoutButton />
      </div>
      <div className='cart-item-container'>
        <LoadingCartItem />
        <LoadingCartItem />
      </div>

      <div className='cart-checkout-container-loading'>
        <LoadingCheckoutButton />
      </div>
    </div>
  );
};

const Cart = () => {
  return (
    <div className='cart'>
      <h1 className='cart-title'>Cart</h1>

      <div className='cart-container'>
        <h2 className='cart-stats'>279.999 subtotal • 2 items</h2>
        <CheckOutButton />
      </div>
      <div className='cart-item-container'>
        <CartItem
          src={ssdImage}
          alt={'solid state drive'}
          descrpition='Sandisk SSD'
          price='$339.99'
        />

        <CartItem
          src={ssdImage}
          alt={'solid state drive'}
          descrpition='Sandisk SSD'
          price='$339.99'
        />

        <CartItem
          src={ssdImage}
          alt={'solid state drive'}
          descrpition='Sandisk SSD'
          price='$339.99'
        />
      </div>

      <div className='cart-checkout-container'>
        <CheckOutButton />
      </div>
    </div>
  );
};

export default Cart;
