import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SelectionPanel from '../components/selectionPanel'

export default function App() {
  const Cities = [
    { name: 'Cairns', id: '2172797' },
    { name: 'Los Angeles', id: '1705545' },
    { name: 'Linjiang', id: '1796228' },
    { name: 'East London', id: '1006984' },
    { name: 'Shanggu', id: '1796247' }
  ]
  let cityNames = Cities.map(e => e.name)
  return (
    <div className="App">
      <SelectionPanel cityNames={cityNames} cities={Cities}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))