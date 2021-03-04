import React, { useState, useEffect } from 'react';
import { API_KEY } from '../apiKey.js';
import ReactDOM from 'react-dom';
import City from '../components/City'
// import Select from 'react-select'
import MultiSelect from 'react-multi-select-component';

export default function App() {
  const Cities = [
    { label: 'Cairns', value: '2172797' },
    { label: 'Los Angeles', value: '1705545' },
    { label: 'Linjiang', value: '1796228' },
    { label: 'East London', value: '1006984' },
    { label: 'Shanggu', value: '1796247' }
  ]
  // const [selected, setSelected] = useState([])
  const [cityIds, setCityIds] = useState(['2172797','1705545', '1796228'])

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
  const handleChange = () => {
      setCityIds(arr => [...arr, label])
      console.log(cityIds)
  }

  return (
    <div className="App">
      <MultiSelect
        options={Cities}
        value={cityIds}
        onChange={setCityIds}
        // onChange={(opt)=> opt.forEach((x)=> {
        //   setCityIds(cityIds =>[...cityIds, x.value])
        //   console.log([...new Set(cityIds)])
        // })}
        />
      <City ids = {cityIds}/>
    </div>
  )
}




ReactDOM.render(<App />, document.getElementById('app'))