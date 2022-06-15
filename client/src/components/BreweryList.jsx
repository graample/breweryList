import React, { useEffect } from 'react';
import BreweryListItem from './BreweryListItem.jsx';

export default function BreweryList(props) {
  return (
    <div>
      {props.list.length > 0 ? props.list.map((eachItem, i) => {
        return <BreweryListItem item={eachItem} key={i}/>
      }) : ''}
    </div>
    )
}