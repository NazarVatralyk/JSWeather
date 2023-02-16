import { createContent } from "./appContent.js";
import { createHeader } from "./appHeader.js";

export const directionOfwWind = (degree) => {
    if (degree>337.5) { return 'північний'};
    if (degree>292.5) { return 'північно-західний'};
    if (degree>247.5) { return 'західний'};
    if (degree>202.5) { return 'південно-західний'};
    if (degree>157.5) { return  'південний'};
    if (degree>122.5) { return 'південно-східний'};
    if (degree>67.5) { return 'східний'};
    if (degree>22.5) { return 'північно-східний'};
    return 'північний';
}

export const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const CtoF = (celsius)=>{
    return celsius*9/5 + 32;
}

export const FtoC = (fahrenheit)=>{
    return (fahrenheit-32)*5/9;
}

export const resetWeatherContent = (city, weather) => {
    document.body.innerHTML='';
    const header = createHeader(city);
    const content = createContent(weather);
    document.body.append(header, content);
}