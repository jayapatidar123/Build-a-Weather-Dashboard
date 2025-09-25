import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./searchbox.css";
export default function Searchbox({updateInfo}){
    let[city,setCity]=useState("");
    const API_URL ="http://api.openweathermap.org/geo/1.0/direct"
    const API_KEY="fa39389b9f1a7617f71ddd628cdd0b0a";
    let getweatherinfo=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&limit=1&appid=${API_KEY}`);
        let geoData=await response.json();
        if (!geoData[0]) {
    alert("City not found. Try another name.");
    return null;
  }

  const { lat, lon } = geoData[0];

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );

        let jsonResponse= await weatherResponse.json();
        let result={
            city:city,
            temp:jsonResponse.main.temp,
             tempMin:jsonResponse.main.temp_min,
           tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
            
        };
        return result;
    };
    let handlechange=(event)=>{
        setCity(event.target.value);
    };
    let handlesubmit= async(event)=>{
        event.preventDefault();
        console.log(city);
      const newInfo = await getweatherinfo();
  if (newInfo) {
    updateInfo(newInfo);
  }

  setCity("");
    };
    return(<div className="searchbox">
    
<form onSubmit={handlesubmit} >
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>
            <br />
            <br />
             <Button variant="contained" type="submit">search</Button>
</form>
    </div>);
}