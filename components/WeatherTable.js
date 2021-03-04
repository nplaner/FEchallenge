import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(cityName, temp, minTemp, updated) {
  return { cityName, temp, minTemp, updated };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

export default function WeatherTable({ selected }) {
  const classes = useStyles();
  console.log(selected)
  // const initFetch = () => {
      
  //   Promise.all(cityIds.map((id) => fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`
  //    )
  //    .then((res) => res.json())
  //    .then((data) => {
  //      console.log(data)
  //   })))
  // }
  
  // useEffect(() => {
  //   initFetch();
  // }, []);
  
  
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
          {rows.map((row) => (
            <TableRow key={row.name}>
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
    </TableContainer>
  );
}
