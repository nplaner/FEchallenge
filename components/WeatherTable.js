import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { API_KEY } from '../apiKey.js'
import Reload from './reload'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(cityName, temp, minTemp, updated) {
  return { cityName, temp, minTemp, updated };
}

export default function WeatherTable({ ids }) {
  const [fetchedData, setFetchedData] = useState([]);
  const classes = useStyles();
  console.log('ids', ids)
  const initFetch = () => {
      
    Promise.all(ids.map((id) => fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=imperial`
     )
     .then((res) => res.json())
     .then((data) => {
      //  console.log(data)
       const time = new Date(data.dt*1000).toLocaleTimeString()
       setFetchedData(arr => [...arr, [`${data.name}`, data.main.temp, data.main.temp_min, time]]);
      })))
    }
    
    // console.log('fetcheddata:',fetchedData)
  useEffect(() => {
    initFetch();
  },[ids]);
  const rows = fetchedData.map(arr => JSON.stringify(arr))
    .filter((item,index,array) => array.indexOf(item) === index)
    .map(str => JSON.parse(str))
    .map((e) => createData(...e))
  // console.log('rows:', rows)
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">City Name</TableCell>
            <TableCell align="center">Temperature</TableCell>
            <TableCell align="center">Min Temperature</TableCell>
            <TableCell align="center">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row" align="center">
                {row.cityName}
              </TableCell>
              <TableCell align="center">{row.temp}</TableCell>
              <TableCell align="center">{row.minTemp}</TableCell>
              <TableCell align="center">{row.updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Reload initFetch={initFetch}/>
    </TableContainer>
  );
}
