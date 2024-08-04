import Image from "next/image";


export function WeatherCard(props: any) {

  return (
    <div className="card-container flex flex-col justify-between items-center">
        <div className="flex">
          <p>{props.day}</p>
          <p>{props.currentTime}</p>
        </div>
        <div className="mt-3"><Image src={props.icon} width={60} height={60} className="weather-icon" alt="weather-icon" /></div>
        <div>
          <p className="mt-5">{props.temperature}</p>
        </div>
    </div>
  )
}
