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