import React, { useState } from 'react';
import WeatherTable from './WeatherTable.js';

export default function SelectionPanel({ cityNames, cities }) {
  const [selected, setSelected] = useState([])
  const handleClick = (e) => {
    if(e.target.checked) {
      setSelected(arr => [...arr, e.target.value])
      console.log(e.target.value)
    }
    else {
      setSelected(selected.filter(city => city !== e.target.value))
    }
  }
  const ids = []
  for(let i = 0; i < cities.length; i++) {
    for(let j = 0; j < selected.length; j++) {
      if(cities[i].name === selected[j]) {
        ids.push(cities[i].id)
      }
    }
  }
  
  const boxes = []
  cityNames.map((el,i) => {
    boxes.push(<label key={i}><input type="checkbox" onClick={handleClick} value={el}/>{el}</label>)
  })

  return (
    <div>
      {boxes}
      <WeatherTable ids={ids}/>
    </div>
  )
}