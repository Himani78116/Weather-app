const apiKey="c497c08a0ca2559e1158c60d39a7dda7";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);

    if(response.status==404){
        
        document.querySelector(".weather").style.display="none";
        document.querySelector(".error").style.display="block";
    }else{
        var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

