import React from 'react'
import SearchBox from './SearchBox';
import Card from './Card';
import { useState } from 'react';
import Axios from "axios"

const WeatherApp = () => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const Api_Url =`https://api.openweathermap.org/data/2.5/weather`;
  const Api_Key = `f4f036a84be218d84334820177132175`
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`,
    );

    console.log(response.data)
    updateWeather(response.data);
  };
  return (
    <div className='text-center'>
      <h1 className='font-bold text-3xl text-red-600'> Weather App</h1>
      {city && weather ? (
        <Card weather={weather} city={city} />
      ) : (
        <SearchBox updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  )
}

export default WeatherApp
