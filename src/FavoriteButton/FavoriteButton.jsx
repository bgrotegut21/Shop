import './favorite.css';

const FavoriteButton = ({ productId, favState, favDispatch }) => {
  console.log(favState, 'the fav state');
  console.log(favDispatch, 'the fav dispatch');

  // const highlighted = favState.includes(productId);
  // const favoriteClassName = highlighted
  //   ? 'favorite-button favorite-button-highlighted'
  //   : 'favorite-button';

  return (
    <div className='favorite-container'>
      <button className='favorite-button'></button>
    </div>
  );
};

export default FavoriteButton;
