import * as React from 'react';
import BreweryListItem from './BreweryListItem.jsx';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';

export default function BreweryList(props) {
  var currentList;
  props.list.length > 0
  ? currentList = props.list.map((eachItem, i) => {
    return <BreweryListItem item={eachItem} key={i}/>
  })
  : currentList = ''

  return (
    <div>
      {currentList
      ? <div>
          <Typography>{props.list.length} breweries found:</Typography>
          {currentList}
        </div>
      : ''}
    </div>
    )
}