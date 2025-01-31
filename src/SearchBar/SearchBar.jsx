import './search.css';
import { Form, useLoaderData } from 'react-router-dom';

const SearchBar = () => {
  const loaderData = useLoaderData();
  console.log(loaderData, 'the loader data');

  return (
    <Form role='search' action='search'>
      <div className='search-bar'>
        <input
          type='search'
          id='q'
          name='q'
          className='search-box'
          placeholder='Search for anything'
        />
        <button className='search-button'></button>
      </div>
    </Form>
  );
};

export default SearchBar;
