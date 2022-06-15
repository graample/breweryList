import React from 'react';
import axios from 'axios';

export default function Search({ list, setList, query, setQuery }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (list) {
      setList([]);
    }
    !query
    ? alert('Please type in a city first!')
    : axios({
      method: 'get',
      url: 'https://api.openbrewerydb.org/breweries',
      params: {
        by_city: query
      }
    })
    .then(result => {
      setList(result.data)
    })
    .catch(error => { throw error })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <form>
      <div>
        <input
          onChange={handleChange}
          value={query}
          placeholder='search for a city'
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        ----------
      </div>
    </form>
  )
}