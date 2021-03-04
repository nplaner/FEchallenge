import React, { useEffect, useState } from 'react';
import { API_KEY } from '../apiKey'


const City = ({ ids }) => {
  const [cityName, setCityName] = useState([])
  const [temp, setTemp] = useState([])
  const [minTemp, setMinTemp] = useState([])
  const [updated, setUpdated] = useState([])


  const initFetch = () => {
  Promise.all(ids.map((id) => fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=imperial`
    )
    .then((res) => res.json())
    .then((data) => {
      setTemp(arr => [...arr, data.main.temp])
      setCityName(arr => [...arr, data.name])
      setMinTemp(arr => [...arr, data.main.temp_min])
      let time = new Date(data.dt).toLocaleTimeString("en-US")
      console.log(time)
      setUpdated(arr => [...arr, time])
      console.log(cityName)
      console.log(updated)
    })))
  }

  useEffect(() => {
    initFetch();
  }, []);
  

  // const initFetch = () => {
    
  //   Promise.all(cityIds.map((id) => fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`
  //   )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //   })))
  // }

  // useEffect(() => {
  //   initFetch();
  // }, []);

  return (
    <div>
      City: {cityName}
      <br/>
      Tempature: {temp} F
      <br/>
      Minimum Tempature: {minTemp}
      <br/>
      Last Updated: {updated}
    </div>
  )
}

export default City;