import React from 'react';

export default function BreweryListItem(props) {
  return (
    <>
      <div>
        name: {props.item.name}
      </div>
      <div>
        address: {props.item.street ? props.item.street : 'No address provided'}</div>
      <div>
        ----------
      </div>
    </>
    )
}