import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
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
      // url: 'http://localhost:3000/breweries',
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
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter a city"
          inputProps={{ 'aria-label': 'Enter a city' }}
          onChange={handleChange}
          value={query}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}