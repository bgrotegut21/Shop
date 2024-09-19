import favoriteIcon from '../assets/favorite.svg';

const Favorites = ({ isShop }) => {
  return (
    <div className='favorite-container'>
      <button className='favorite-button'>
        <img className='favorite-icon' src={favoriteIcon} />
      </button>
    </div>
  );
};

export default Favorites;
