import Searchbox from './searchbox';
import Infobox from './infobox';
import React,{useState} from 'react';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"delhi",
        feelsLike:30,
        temp:25,
        tempMax:25.05,
        tempMin:24.5,
        humidity:47,
        weather:"haze",
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(<div style={{textAlign:"center"}}>
        <h2>Weather App by Delta </h2>
        <Searchbox updateInfo={updateInfo}/>
        <Infobox {...weatherInfo}/>


    </div>);
}