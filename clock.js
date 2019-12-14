const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-title");

init();

function init()
{
    setInterval(handleTimer, 1000);
}

function handleTimer()
{
   const date = new Date();
   clockTitle.textContent = 
   `
    ${date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`}
    : ${date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`}
    : ${date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`}

   `;  
}