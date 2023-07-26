var city=document.getElementById("city");
var get=document.getElementById("get");
var locationn=document.getElementById("locationn");
var temp=document.getElementById("temp");
var wstatus=document.getElementById("wstatus");

var apikey="eeb875d3668b0fdcc862cb35405b5636";

get.addEventListener("click", ()=>{
    if (city.value == "")
    {
        alert("Please enter a city: ");
    }

    else 
    {
        var userinp=city.value;

    var url=`https://api.openweathermap.org/data/2.5/weather?q=${userinp}&appid=${apikey}`;

    fetch(url).then(result=>result.json()).then(fresult=>{
        console.log(fresult);
        var{name}=fresult;
        locationn.innerHTML="City: " + name;
        var {description}=fresult.weather[0];
        wstatus.innerHTML="Weather Status: " + description;
        var {feels_like}=fresult.main;
        temp.innerHTML="Temperature: " + Math.floor(feels_like - 273) + "&#176; C";
    });
}
});








