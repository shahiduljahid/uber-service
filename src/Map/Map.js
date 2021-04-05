import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
  lat:23.726032,
  lng: 90.523502
};
const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBwSPZ3dS2iBSu_3F8QQkP7sSP2SySlKOU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
      onLoad={onLoad}
      position={center}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)