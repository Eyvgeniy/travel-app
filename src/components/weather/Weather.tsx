import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { RootState } from '../../models/RootState';

const api = {
  key: 'c7616da4b68205c2f3ae73df2c31d177',
  base: 'http://api.openweathermap.org/data/2.5/'
}

type Weath = {
  main?: {
    temp?: number
  }
  weather?: Array<{
    main?: string
    icon?: string
  }>
  name?: string
  sys?: {
    country?: string
  }
}

export function Weather() {
  const capital = useSelector((state: RootState) => state.countries.currentCountry.capital);
  
  const [weather, setWeather] = useState<Weath>({});

  useEffect(() => {
    if (capital) {
      fetch(`${api.base}weather?q=${capital}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
        });
    }
  }, [setWeather, capital])

  return (
    <div className='app-weather'>
      <main>
        {(typeof weather.main !== 'undefined') ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <img className='icon-weather' src={`/public/assets/images/icons-weather/${weather.weather[0].icon}.png`} />
            </div>
            <div className='weather-box'>
              <div className='temp'>
                {Math.round(weather.main.temp)}°c
                  </div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}