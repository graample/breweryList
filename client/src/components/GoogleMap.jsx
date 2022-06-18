import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap(props) {
  return (
    <div style={{ height: '30vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAPS }}
        defaultCenter={props.center}
        defaultZoom={17}
      >
        <MapComponent
          lat={props.center[0]}
          lng={props.center[1]}
        />
      </GoogleMapReact>
    </div>
  );
}