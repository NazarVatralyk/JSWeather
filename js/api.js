export const getWeatherData=async(city)=>{
    //
    try {
const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ec18037dc142801099a5312121599ff&lang=ua&units=metric`);
return await response.json()
    } catch (error) { console.error(error);

    }
}