import React, { useState, useEffect } from 'react';

import BreweryList from './BreweryList.jsx';
import Search from './Search.jsx';

export default function App() {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState('');

  return (
    <div>
      <h1>Brewery Locator</h1>
      <Search
        list={list}
        setList={setList}
        query={query}
        setQuery={setQuery}
      />
      <BreweryList list={list}/>
    </div>
    )
};