import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

const Marker = ({ text }: any) => <FontAwesomeIcon icon={faMapPin} title={text} size="2x" beat/>

const LocationMap = (props: any) => {


  const { venue } = props;
  console.log('venue in LocationMap', venue);
  const defaultProps = {

    zoom: 14
  }
  const [lattitude, setLat] = useState<number>();
  const [longitude, setLang] = useState<number>();
  geocodeByAddress(venue)
    .then(results => getLatLng(results[0]))
    .then(({ lat, lng }) => {
      console.log('Successfully got latitude and longitude', { lat, lng })
      setLat(lat);
      setLang(lng);
    }
    );
  return (<>
    {lattitude && longitude && <GoogleMapReact
      defaultCenter={{ lat: lattitude, lng: longitude }}
      defaultZoom={defaultProps.zoom}
    >
      <Marker
        lat={lattitude}
        lng={longitude}
        text="Location"
      />
    </GoogleMapReact>
    }
  </>
  )
}

export default LocationMap;