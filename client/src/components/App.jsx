import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BreweryList from './BreweryList.jsx';

export default function App() {
  const [list, setList] = useState({ list: [] });
  const [query, setQuery] = useState('portland');

  useEffect(() => {
    let ignore = false;

    async function fetchBreweries() {
      const result = await axios('https://api.openbrewerydb.org/breweries?by_city=' + query);
      if (!ignore) setList(result.data);
    }

    fetchBreweries();
    return () => { ignore = true; }
  }, [query]);

  console.log(list)

  return (
    <>
      <h1>Brewery List in Portland</h1>
      <BreweryList list={list}/>
    </>
    )
};