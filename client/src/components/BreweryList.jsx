import React, { useEffect } from 'react';
import BreweryListItem from './BreweryListItem.jsx';
import Typography from '@mui/material/Typography';

export default function BreweryList(props) {
  var list;
  props.list.length > 0
  ? list = props.list.map((eachItem, i) => {
    return <BreweryListItem item={eachItem} key={i}/>
  })
  : list = ''

  return (
    <div>
      {list
      ? <div>
          <Typography>{props.list.length} breweries found:</Typography>
          {list}
        </div>
      : ''}
    </div>
    )
}