const weatherContainer = document.querySelector(".js-weather");
const weatherContent = weatherContainer.querySelector(".js-content");
const LOCATION_LS = "location";

const APIKEY = "06810087a186c8d85b29026e5b978911";
const API = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}"

function showLocation(lat, lng)
{
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`
    ).then((response) => {
        return response.json();
    }).then((json)=>{
        weatherContent.innerHTML = `${json.main.temp} @${json.name}`;
    });

}

function saveLocation(location)
{
    localStorage.setItem(LOCATION_LS, JSON.stringify(location));
}

function handleSuccess(event)
{
    const coords = event.coords;
    const location = {
        lat : coords.latitude,
        lng : coords.longitude
    }
    saveLocation(location);
    showLocation(location.lat, location.lng);
}

function getCurrentLocation()
{
    navigator.geolocation.getCurrentPosition(handleSuccess, ()=>{
        weatherContent.innerHTML = "location access error";
    });
}

function init()
{
    const loc_LS = localStorage.getItem(LOCATION_LS);

    if(loc_LS !== null)
    {
        const loc = JSON.parse(loc_LS);
        showLocation(loc.lat, loc.lng);
    }
    else
    {
        getCurrentLocation();
    }

}

init();