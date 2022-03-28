import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const Marker = ({text}:any) => <FontAwesomeIcon icon={faMapPin} />

const LocationMap=(props:any)=>  {

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 14
  }

    const { venue, venueLatLng } = props;
    console.log('venueLatLng in LocationMap', venueLatLng);
    console.log('venue in LocationMap', venue);
  return (<>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyCg_54eDB3dlfeqkOY4H15I7uFeYJUgiGw' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker 
            lat={59.95}
            lng={30.33}
            text="Location"
          />
        </GoogleMapReact>
    </>
  )
}

export default LocationMap;