import React, { useEffect } from 'react';
import BreweryListItem from './BreweryListItem.jsx';

export default function BreweryList(props) {

  console.log(props.list)

  return (
    <>
      <h3>Here's the List: </h3>
      {props.list.length > 0 ? props.list.map(eachItem => {
        return <BreweryListItem item={eachItem}/>
      }) : 'loading...'}
    </>
    )
}