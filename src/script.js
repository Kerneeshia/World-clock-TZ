setInterval(function(){
let johannesburgElement=document.querySelector("#johannesburg");
let dateJohannesburgElement=johannesburgElement.querySelector("#date");
let timeJohannesburgElement=johannesburgElement.querySelector("#time");
let johannesburgTime=moment().tz("Africa/Johannesburg");

let tokyoElement=document.querySelector("#tokyo");
let dateTokyoElement=tokyoElement.querySelector("#date");
let timeTokyoElement=tokyoElement.querySelector("#time");
let tokyoTime=moment().tz("Asia/Tokyo");

dateJohannesburgElement.innerHTML=johannesburgTime.format("MMMM Do YYYY");
timeJohannesburgElement.innerHTML=johannesburgTime.format("h:mm:ss [<small>]A[</small>]");

dateTokyoElement.innerHTML=tokyoTime.format("MMMM Do YYYY");
timeTokyoElement.innerHTML=tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

function updateCity(event){
let cityTimezone = event.target.value;
if (cityTimezone==="current") {
    cityTimezone=moment.tz.guess();
    
}
let cityName=cityTimezone.replace("_"," ").split("/")[1];
let cityTime = moment().tz(cityTimezone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML=`
  <div class="city">
  <div>
      <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div> 
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    `;
}

let citiesSelectElement=document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);