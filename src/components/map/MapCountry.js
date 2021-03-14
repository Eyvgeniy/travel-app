import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import './style.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import { useSelector } from "react-redux";
import GER from './GER.geo.json'
import FRA from './FRA.geo.json'
import CHN from './CHN.geo.json'
import GBR from './GBR.geo.json'
import IND from './IND.geo.json'
import ESP from './ESP.geo.json'
import USA from './USA.geo.json'
import IT from './IT.geo.json'

const countriesMap = {GER, FRA, CHN, GBR, IND, ESP, USA, IT}
const locationCenter = [30, 20];

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: './public/assets/images/icons-map/marker-icon-2x-grey.png',
  iconUrl: './public/assets/images/icons-map/marker-icon-grey.png',
  shadowUrl: '/public/assets/images/icons-map/marker-shadow.png'
});

 function MapCountry() {
  const capitalLocation = useSelector((state) => state.countries.currentCountry.capitalLocation?.coordinates);
  const countryLocation = useSelector((state) => state.countries.currentCountry.ISOCode);
  const countryCoordinates = countriesMap[countryLocation];

  const mapRef = useRef();

  useEffect(() => {
    if(capitalLocation) {

      const { current = {} } = mapRef;
      const { leafletElement: map } = current;
      map.on('fullscreenchange', handleOnToggleFullscreen);
  
      if ( !map ) return;
  
      setTimeout(() => {
        map.flyTo(capitalLocation, 7, {
          duration: 3
        });
      }, 1000)

    }
  }, [capitalLocation])

  function handleOnToggleFullscreen() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
  }
  
  return (
    <div className="App">
      {(countryCoordinates) ? (
      <Map ref={mapRef} fullscreenControl={true} center={locationCenter} zoom={2}>
        <TileLayer url="https://api.mapbox.com/styles/v1/maxonvtec/ckm6qkb9e0yv017p8t540d525/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF4b252dGVjIiwiYSI6ImNrbTZxd3VpeDBicDgycGxhbWdxZTJ5cjQifQ.53LRYE3q1yORonbytdpiiA"
    attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"/>
       <GeoJSON className="capital-style" color='red' data={countryCoordinates} />
        <Marker position={capitalLocation}>
          <Popup>Hello, it's Travell App</Popup>
        </Marker>
      </Map>
      ) : ('')}
    </div>
  );
}
export default MapCountry