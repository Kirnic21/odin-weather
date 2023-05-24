import {getData} from "./data.js"
import { asyncAssignTodayWeather } from "./data.js"
import { asyncAssignForecast } from "./data";

function isValidforToday()
{
    const location = document.querySelector("#locationForm")
    location.addEventListener("submit",async (e)=>{
        e.preventDefault()
    
        const locationInput = document.querySelector("#inputLocation")
        
        if(await asyncAssignTodayWeather(locationInput.value) === false)
        {
        
             await locationInput.setCustomValidity("Insert a valid country!!!!")
             await locationInput.reportValidity()
    
        }
        else{
            console.log(await asyncAssignTodayWeather(locationInput.value))
            await asyncAssignTodayWeather(locationInput.value)
            await locationInput.setCustomValidity("")
        }
    }
    )
}
function isValidForecast()
{
    const location = document.querySelector("#locationForm")
    location.addEventListener("submit",async (e)=>{
        e.preventDefault()
    
        const locationInput = document.querySelector("#inputLocation")
        
        if(await asyncAssignForecast(locationInput.value) === false)
        {
        
             await locationInput.setCustomValidity("Insert a valid country!!!!")
             await locationInput.reportValidity()
    
        }
        else{
            console.log(await asyncAssignTodayWeather(locationInput.value))
            await asyncAssignForecast(locationInput.value)
            await locationInput.setCustomValidity("")
        }
    }
    )
}

export {isValidforToday,isValidForecast}