const weatherContainer = document.querySelector(".js-weather");
const weatherContent = weatherContainer.querySelector(".js-content");
const LOCATION_LS = "location";

function showLocation(lat, lng)
{
    const loc = `lat : ${lat}, lng : ${lng}`;
    weatherContent.innerHTML = loc;
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