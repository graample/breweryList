import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap(props) {
  return (
    <div style={{ height: '30vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAa6pC2ERWS3d7o7oNprmY22MbpHHTunK4' }}
        defaultCenter={props.center}
        defaultZoom={17}
      >
        <MapComponent
          lat={props.center[0]}
          lng={props.center[1]}
          text="Here!"
        />
      </GoogleMapReact>
    </div>
  );
}