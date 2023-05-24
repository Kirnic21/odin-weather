import './style.css';

import { Weather } from './class';
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
        console.log("????????")
    
    }
    
}

async function asyncAssignTodayWeather(location){
    try{
        const data = await getData(location)
        
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
        console.log("Sorry")
        return false
    }
    }

    async function asyncAssignForecast(i,location){
        try{
        const data = await getData(location)
       const theWeather = new Weather;
       theWeather.humidity = data.forecast.forecastday[i].day.avghumidity;
       theWeather.tempC =  data.forecast.forecastday[i].day.avgtemp_c;
       theWeather.tempF = data.forecast.forecastday[i].day.avgtemp_f;
       theWeather.cloud = "no info"
       theWeather.condition = data.forecast.forecastday[i].day.condition.text
       console.log(theWeather)
        }
        catch{
            console.log("no")
        }
    }
export {asyncAssignTodayWeather};
export {asyncAssignForecast}
export {getData}