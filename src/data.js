import './style.css';

import { Weather } from './class';
import { loadingGif, unloadGif } from './dom';
async function getData(location)
{
    try{
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=c84aa34759fb487d8b2125851231905&q='+location+'&days=2&aqi=no&alerts=no', {mode: 'cors'});
    const theData  = await response.json();
    console.log(theData)
    return theData
    }
    catch(error)
    {
        return false
    
    }
    
}

async function asyncAssignTodayWeather(location){
    loadingGif()
    try{
        const data = await getData(location)
        unloadGif()
        const todayWeather = new Weather;
        todayWeather.humidity = data.current.humidity;
        todayWeather.tempC =  data.current.temp_c;
        todayWeather.tempF = data.current.temp_f;
        todayWeather.cloud = data.current.cloud;
        todayWeather.condition = data.current.condition.text
        console.log(todayWeather)
        return todayWeather
    }
    catch(error)
    {
        unloadGif()
        return false
    }
    }

export {asyncAssignTodayWeather};
export {getData}