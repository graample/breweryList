import React from 'react';
import GoogleMap from './GoogleMap.jsx';

export default function BreweryListItem(props) {
  var center;
  {props.item.latitude
    ? center = [parseFloat(props.item.latitude), parseFloat(props.item.longitude)]
    : center = null}
  return (
    <>
      <div>
        {props.item.name}
      </div>
      <div>
        {props.item.street ? props.item.street : ''} {props.item.city}, {props.item.state}, {props.item.postal_code}
      </div>
      <div>
        {props.item.website_url
        ? <a href={props.item.website_url}>Website</a>
        : 'No website provided'}
      </div>
      <div>
        Type: {props.item.brewery_type}
      </div>
      {center ? <GoogleMap center={center}/> : ''}
      <div>
        ----------
      </div>
    </>
  )
}