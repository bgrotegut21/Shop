import './search.css';
import { Form, useLoaderData } from 'react-router-dom';

const SearchBar = () => {
  return (
    <Form role='search' action='search' method='get'>
      <div className='search-bar'>
        <input
          type='search'
          id='q'
          name='q'
          className='search-box'
          placeholder='Search for anything'
        />
        <button type='submit' className='search-button'></button>
      </div>
    </Form>
  );
};

export default SearchBar;
