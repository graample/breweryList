import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';

export default function Search({ list, setList, query, setQuery }) {
  const [checked, setChecked] = React.useState(false);
  const [chosenUrl, setChosenUrl] = React.useState('https://api.openbrewerydb.org/breweries');

  const toggleSwitch = (e) => {
    setChecked(e.target.checked);
    if (!checked) {
      setChosenUrl(process.env.SERVER + process.env.PORT + '/breweries');
    } else {
      setChosenUrl('https://api.openbrewerydb.org/breweries');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (list) {
      setList([]);
    }
    !query
    ? alert('Please type in a city first!')
    : axios({
      method: 'get',
      url: chosenUrl,
      params: {
        by_city: query
      }
    })
    .then(result => {
      if (result.data) {
        setList(result.data)
      }
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
      <FormGroup>
        <FormControlLabel control={<Switch
          checked={checked}
          onChange={toggleSwitch}
        />} label="Enable custom DB" />
      </FormGroup>
    </div>
  )
}