import { asyncAssignForecast } from "./data"
import { getData } from "./data"
import { asyncAssignTodayWeather } from "./data"
import { inputSelection, loadingGif } from "./dom"
import {  isValidForecast, isValidforToday } from "./validation"
import {displayInformation} from "./dom"
isValidforToday()
