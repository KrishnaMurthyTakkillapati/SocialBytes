import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const Marker = ({text}:any) => <FontAwesomeIcon icon={faMapPin} />

const LocationMap=(props:any)=>  {

  // static defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 14
  // }

    const { venue, venueLatLng } = props;
    console.log('venueLatLng in LocationMap', venueLatLng);
    console.log('venue in LocationMap', venue);
  return (<>
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyAzceP9ntf_qwHQq8LUEx10F5v-kIgm77o' }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <Marker 
            lat={-27.4661299}
            lng={153.03504650000002}
            text="Location"
          />
        </GoogleMapReact>
      </div>
    </>
  )
}

export default LocationMap;