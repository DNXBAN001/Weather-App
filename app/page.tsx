import Image from "next/image";
import { Navbar } from "@/app/components/Navbar";
import { CurrentWeatherCard } from "./components/current-weather-card";
import { WeatherCard } from "@/app/components/weather-card";
import { WorldMap } from "@/app/components/WorldMap";
import { getWeatherData } from "@/utils/getWeatherData";


export default async function Home() {

  const weatherData = await getWeatherData()
  console.log(weatherData.location.name)

  const { name, region, country, localtime } = weatherData.location
  const { text } = weatherData.current.condition
  const location = `${name}, ${region}` 
  const { temp_c: currentTemp, feelslike_c: feelslikeTemp, wind_kph: windSpeed,
         wind_dir: windDirection, pressure_mb: pressure, humidity } = weatherData.current

  // day, currentTime, temp_c, weatherIcon, feels_like, wind_speed, pressure, humidity
  //day, weatherIcon, temp_c
  
  return (
    <div className="page-container">
      <Navbar region={location}/>
      <div className="flex justify-between pl-7 options-container">
        <div className="flex">
          <p className="p-2">Today</p>
          <p className="p-2">Tomorrow</p>
          <p className="p-2">Next 7 days</p> 
        </div>
        <div className="flex forecast-and-air-selector">
          <p className="p-2 forecast-option">Forecast</p>
          <p className="p-2 air-quality-option">Air Quality</p>
        </div>
      </div>
      <div className="flex justify-between mt-3 weather-cards-container">
        <CurrentWeatherCard currentTemp={currentTemp} feelslikeTemp={feelslikeTemp} windSpeed={windSpeed}
           windDirection={windDirection} pressure={pressure} humidity={humidity}/>
        <WeatherCard widthSize={50} day="Tue" icon="/partly-cloudy.png" temperature="14'"/>
        <WeatherCard widthSize={50} day="Wed" icon="/rain.png" temperature="14'"/>
        <WeatherCard widthSize={50} day="Thur" icon="/partly-cloudy.png" temperature="14'"/>
        <WeatherCard widthSize={50} day="Fri" icon="/partly-cloudy.png" temperature="14'"/>
        <WeatherCard widthSize={50} day="Sat" icon="/partly-cloudy.png" temperature="14'"/>
        <WeatherCard widthSize={50} day="Sun" icon="/rain.png" temperature="14'"/>
      </div>
      <>
        <WorldMap />
      </>
    </div>
    
  )
}