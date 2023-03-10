import { capitalizeFirstLetter, directionOfwWind } from "./helper.js";

export const createContent = (data) => {
    const main = document.createElement('main');
    const section = document.createElement('section');
    const container = document.createElement('div');
    const inner = document.createElement('div');
    const iconBloc = document.createElement('img');
    const temperature = document.createElement('h2');
    const units = document.createElement('span');
    const description = document.createElement('p');
    const weatherInfo = document.createElement('div');
    const weatherInfoList = document.createElement('ul');
    const weatherInfoWind = document.createElement('li');
    const weatherInfoPressure = document.createElement('li');
    const weatherInfoHumidity = document.createElement('li');
    const weatherInfoChanceOfRain = document.createElement('li');

    section.classList.add('weather');
    container.classList.add('container', 'weather_container');
    inner.classList.add('weather_inner');
    iconBloc.classList.add('weather_icon');
    temperature.classList.add('weather_temperature');
    units.classList.add('weather_units');
    description.classList.add('weather_description');
    weatherInfo.classList.add('weather-info');
    weatherInfoList.classList.add('weather-info_list');
    weatherInfoWind.classList.add('weather-info_item');
    weatherInfoHumidity.classList.add('weather-info_item');
    weatherInfoPressure.classList.add('weather-info_item');
    weatherInfoChanceOfRain.classList.add('weather-info_item');

    temperature.textContent = Math.floor(data.main.temp); 
    description.textContent = capitalizeFirstLetter(data.weather[0].description);
    iconBloc.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    units.textContent = 'o';

    const createWeatherItemTitle = (text) => {
        const span = document.createElement('span'); 
        span.textContent = text;
    
        return span;
    }

    const createWeatherItemContent = (text) => { 
        const p = document.createElement('p'); 
        p.textContent = text;
        
        return p;
    }

    weatherInfoWind.append(
        createWeatherItemTitle('??????????'), 
        createWeatherItemContent(data.wind.speed + ' ??/??, ' + directionOfwWind(data.wind.deg))
    );
    
    weatherInfoPressure.append(
        createWeatherItemTitle('????????'), 
        createWeatherItemContent(data.main.pressure + ' ????.????.????.')
    );

    weatherInfoHumidity.append(
        createWeatherItemTitle('?????????????????? ??????????????'), 
        createWeatherItemContent(data.main.humidity + ' %')
    );

    weatherInfoChanceOfRain.append(
        createWeatherItemTitle('??????????????????'), 
        createWeatherItemContent(data.clouds.all + ' %')
    );

    main.append(section); 
    section.append(container);
    container.append(inner, description, weatherInfo); 
    inner.append(iconBloc, temperature, units); 
    weatherInfo.append(weatherInfoList); 
    weatherInfoList.append(
        weatherInfoWind, 
        weatherInfoPressure, 
        weatherInfoHumidity, 
        weatherInfoChanceOfRain
        );

        return main;
}