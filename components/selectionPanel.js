import React, { useState, useEffect } from 'react';
import WeatherTable from './WeatherTable.js';

export default function SelectionPanel({ cityNames }) {
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
  const boxes = []
  cityNames.map((el,i) => {
    boxes.push(<label key={i}><input type="checkbox" onClick={handleClick} value={el}/>{el}</label>)
  })

  return (
    <div>
      {boxes}
      <WeatherTable selected={selected}/>
    </div>
  )
}