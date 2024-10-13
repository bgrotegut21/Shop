import './search.css';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input className='search-box' placeholder='Search for anything' />

      <button className='search-button'></button>
    </div>
  );
};

export default SearchBar;
