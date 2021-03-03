import React, { useState, useEffect } from 'react';
import { API_KEY } from '../apiKey.js';
import ReactDOM from 'react-dom';

export default function App() {
  const [selected, setSelected] = useState()
  const [cityIds, setCityIds] = useState([2172797, 1705545, 1796228, 1006984, 1796247])

  const initFetch = () => {
    
    Promise.all(cityIds.map((id) => fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })))
  }

  useEffect(() => {
    initFetch();
  }, []);

  return (
    <div>Hello Woeqweqweqwerld</div>
  )
}




ReactDOM.render(<App />, document.getElementById('app'))

// import React from 'react';

// export default function App() {
//   const alertName = () => {
//     alert('John Doe');
//   };

//   return (
//     <div>
//       <h3>This is a Functional Component</h3>
//       <button onClick={alertName}>
//         Alert
//       </button>
//     </div>
//   );
// };
