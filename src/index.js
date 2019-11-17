import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const key = 'b0b8cd08bd4c1824cd4df64ab44f6975fc71e6ba25914603fe048c61';
    const res = await axios.get(`https://api.ipdata.co?api-key=${key}`);
    setUserData(
      { 
        city: res.data.city,
        country_name: res.data.country_name,
        latitude: res.data.latitude,
        longitude: res.data.longitude,
      });
  }

  function getMap() {
    const key = 'AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk';
    return (
      <iframe
        title="location"
        className="map"
        src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${userData.latitude},${userData.longitude}`}
        allowFullScreen>
      </iframe>
    )
  }

  return (
    <div className="App">
      <h1>Hello there in {userData.city}, {userData.country_name}</h1>
      <h2>This is where you are on the map:</h2>
      {getMap()}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
