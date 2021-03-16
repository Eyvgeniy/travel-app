import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
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
import { RootState } from '../../models/RootState';

const countriesMap = new Map([ 
  ['GER', GER as GeoJSON.GeoJsonObject],
  ['FRA', FRA as GeoJSON.GeoJsonObject],
  ['CHN', CHN as GeoJSON.GeoJsonObject],
  ['GBR', GBR as GeoJSON.GeoJsonObject],
  ['IND', IND as GeoJSON.GeoJsonObject],
  ['ESP', ESP as GeoJSON.GeoJsonObject],
  ['USA', USA as GeoJSON.GeoJsonObject],
  ['IT', IT as GeoJSON.GeoJsonObject],
])

const locationCenter: [number, number] = [30, 20];

//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/public/assets/images/icons-map/marker-icon-2x-grey.png',
  iconUrl: '/public/assets/images/icons-map/marker-icon-grey.png',
  shadowUrl: '/public/assets/images/icons-map/marker-shadow.png'
});

 function MapCountry() {
  const capitalLocation = useSelector((state: RootState) => state.countries.currentCountry.capitalLocation?.coordinates);
  const countryLocation = useSelector((state: RootState) => state.countries.currentCountry.ISOCode);
  const countryCoordinates = countriesMap.get(countryLocation);

  const mapRef = useRef(null);

  useEffect(() => {
    if(capitalLocation) {

      const { current } = mapRef;
      if(current){
        const { leafletElement: map } = current;
        map.on('fullscreenchange', handleOnToggleFullscreen);
    
        if ( !map ) return;
    
        setTimeout(() => {
          map.flyTo(capitalLocation, 7, {
            duration: 3
          });
        }, 1000)
      }
    }
  }, [capitalLocation, mapRef])

  function handleOnToggleFullscreen() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
  }
  
  return (
    <div className="map-container">
      {(countryCoordinates) ? (
      <LeafletMap ref={mapRef} fullscreenControl={true} center={locationCenter} zoom={2}>
        <TileLayer url="https://api.mapbox.com/styles/v1/maxonvtec/ckm6qkb9e0yv017p8t540d525/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF4b252dGVjIiwiYSI6ImNrbTZxd3VpeDBicDgycGxhbWdxZTJ5cjQifQ.53LRYE3q1yORonbytdpiiA"
    attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"/>
       <GeoJSON className="capital-style" color='red' data={countryCoordinates} />
        <Marker position={capitalLocation}>
          <Popup>Hello, it's Travell App</Popup>
        </Marker>
      </LeafletMap>
      ) : ('')}
    </div>
  );
}
export default MapCountry