import { asyncAssignTodayWeather } from "./data";
import { asyncAssignForecast } from "./data";
import { isValidforToday } from "./validation";
function displayCards(location,name){
    const information = document.querySelector(".today_information")

   const card = document.createElement("div")
   information.appendChild(card)
   card.classList.add("weather")
   const cardName = document.createElement("div")
   
   cardName.textContent = name
   card.appendChild(cardName)
   const cardHumidity = document.createElement("div")
   cardHumidity.textContent ="Humidity: "+location.humidity
   card.appendChild(cardHumidity)
   const cardTempC = document.createElement("div")
   cardTempC.textContent ="Temperature in Celsius: " + location.tempC
   card.appendChild(cardTempC)
   const cardTempF = document.createElement("div")
   cardTempF.textContent ="Temperature in Fahrenheit:" + location.tempF
   card.appendChild(cardTempF)
   const cardCloud = document.createElement("div")
   cardCloud.textContent ="Clouds: "+location.cloud
   card.appendChild(cardCloud)
   const cardCondition = document.createElement("div")
   cardCondition.textContent = "Local Condition: "+location.condition
   card.appendChild(cardCondition)
   
}
function removeCard()
{
    const information = document.querySelector(".today_information")
    const cardToBeRemoved = document.querySelector(".weather")
    if(cardToBeRemoved)
    {
        while(information.childNodes.length>0)
        {
            information.hasChildNodes()
            {
                information.removeChild(information.firstChild)
            }
        }
    }
    else{
        return false;
    }
}
async function displayInformation(location){
    let  todayWeather = await asyncAssignTodayWeather(location)
    displayCards(todayWeather,location)
}
function loadingGif()
{
    const container = document.querySelector(".loading_area")
    const gif = "a.gif"
    const gifContainer = document.createElement("img")
    gifContainer.classList.add("loading")
    gifContainer.src = gif
    container.appendChild(gifContainer)
}
function unloadGif()
{

    const gifContainer = document.querySelector(".loading")
    if(gifContainer)
    {
    gifContainer.remove()
    }
    else{
        return false
    }
}

export{ displayInformation,removeCard,loadingGif,unloadGif}