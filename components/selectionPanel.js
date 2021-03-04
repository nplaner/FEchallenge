import React, { useState } from 'react';
import WeatherTable from './WeatherTable.js';
import { Multiselect } from 'multiselect-react-dropdown';

export default function SelectionPanel({ cityNames, cities }) {
  const [selected, setSelected] = useState([])
  const handleClick = (e) => {
    (e.length ? setSelected(arr => [...arr, e]) : null)
  }
  
  const ids = []
  for(let i = 0; i < cities.length; i++) {
    for(let j = 0; j < selected.length; j++) {
      if(cities[i].name === selected[0][j]) {
        ids.push(cities[i].id)
      }
    }
  }

  const options = []
  cityNames.map((el,i) => {
    options.push({value: `${el}`, id: `${i}`})
  })

  return (
    <div>
      <Multiselect options={cityNames} isObject={false} onSelect={handleClick}/>
      <WeatherTable ids={ids}/>
    </div>
  )
}