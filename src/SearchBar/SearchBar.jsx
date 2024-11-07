import './search.css';
import { Form } from 'react-router-dom';

const SearchBar = () => {
  return (
    <Form role='search'>
      <div className='search-bar'>
        <input
          type='text'
          className='search-box'
          placeholder='Search for anything'
        />
        <button className='search-button'></button>
      </div>
    </Form>
  );
};

export default SearchBar;
