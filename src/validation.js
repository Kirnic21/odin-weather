import {getData} from "./data.js"
import { asyncAssignTodayWeather } from "./data.js"
import { displayInformation, removeCard } from "./dom.js";
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
        removeCard()
        displayInformation(locationInput.value)
            
        }
    }
    )
}

export {isValidforToday}