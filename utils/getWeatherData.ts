
export async function getWeatherData() {
    //get weather data for next 7 days using coordinates of the place, example EL
    //https://api.weatherapi.com/v1/forecast.json?key=4643fde98e9d41d794b173915241307&q=-33.03,27.92&days=7         cpt=-33.92,18.42
    const res = await fetch("https://api.weatherapi.com/v1/forecast.json?key=4643fde98e9d41d794b173915241307&q=-33.92,18.42&days=7")

    if(!res.ok) throw new Error("Error fetching weather data...")

    return res.json();
}
