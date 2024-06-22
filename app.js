const API_key = "9878082b580822fd4cd6654a537baa6d";

async function dataFetch() {
    const city_name = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`;

    try {
        const data = await fetch(url);
        const mainData = await data.json();
        console.log(mainData);
        callingTimeStamp(mainData)
        displayData(mainData);


    } catch (error) {
        console.log(error);
    }
}


let sunMoment = document.getElementById("sun-moment")
let weather_details = document.getElementById("weather-details");

async function displayData(data) {


    const temprature = await data.main.temp;
    const mainTemp = Math.floor(temprature) - 273;
    weather_details.innerHTML = ` <p   >Temperature: ${mainTemp}°C   <span><i class="fa-solid fa-temperature-three-quarters"></i></span></p>
        <p >Weather: ${data.weather[0].main}</p>
        <p >Description: ${data.weather[0].description}</p>
        <p c>Humidity: ${data.main.humidity}%</p>
        <p >Wind Speed: ${data.wind.speed} m/s </p> `;


}


// function indianTime(sunrise, sunset) {
//     sunMoment.innerHTML = `<h2 class="sunrise">${sunrise}</h2>

//         <h2 class="sunset">${sunset}</h2>`

// }




function timeChange(timeStamps) {
    var date = new Date(timeStamps * 1000)


    return date.toLocaleTimeString(`en-IN`)

}

function callingTimeStamp(data) {
    let timeStampSunrise = data.sys.sunset
    let timeStampSunset = data.sys.sunset

    const sunrisetime = timeChange(timeStampSunrise)
    const sunsettime = timeChange(timeStampSunset)





    // indianTime(sunrisetime, sunsettime)

}