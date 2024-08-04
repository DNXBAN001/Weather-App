import Image from "next/image"

export function CurrentWeatherCard(props: any) {
  return (
     <div className="card-container w-56 min-w-40 flex flex-col justify-between">
          <div className="flex justify-between">
            <p>Mon</p>
            <p>20:01PM</p>
          </div>
          <div className="flex justify-between center mt-3 tempc-icon">
            <p className="font-bold">{Math.floor(props.currentTemp)}'</p>
            <Image src="/sunny.png" width={60} height={60} alt="weather-icon" className="weather-icon"/>
          </div>
          <div className="extra-weather-info">
            <p className="">Feels like: {Math.floor(props.feelslikeTemp)}</p>
            <p>Wind speed: {props.windSpeed}km/h {props.windDirection}</p>
            <p>Pressure: {props.pressure}mb</p>
            <p>Humidity: {props.humidity}</p>
          </div>
        </div>
  )
}
