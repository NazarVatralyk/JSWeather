import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";

export const handleWeatherByGeolocation = () => { 
     const options = {
        enableHighAccuracy: true, 
        timeout: 5000, 
        maximumAge: 0,
    }

    const success = async (pos) => {
        const crd = pos.coords;

        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=f561ef831b0340c3bd24a338dd0f63e7`
        );
        
        const result = await response.json(); 
       

        const weather =await getWeatherData(result.features[0].properties.state);
        resetWeatherContent(result.features[0].properties.state, weather);
    }
        
    const error = (err) => {
        console.log(err.code + ' ' + err.message);
    }
        
    navigator.geolocation.getCurrentPosition(success, error, options);
}