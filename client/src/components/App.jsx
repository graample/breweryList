import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import BreweryList from './BreweryList.jsx';
import Search from './Search.jsx';

export default function App() {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState('');

  return (
    <div>
      <Typography variant="h4" component="div">
        Gulp!
      </Typography>
      <Typography variant="h5" component="div">
        Search for a brewery in a US city
      </Typography>
      <Search
        list={list}
        setList={setList}
        query={query}
        setQuery={setQuery}
      />
      <BreweryList list={list}/>
    </div>
  );
};