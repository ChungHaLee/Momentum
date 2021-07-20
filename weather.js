const API_KEY = "406290220dd87a9021c3a03f81f881c8";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = `@ ${data.name}`;
        }); // fetch는 url 에 갈 필요 없이 api 가 가진 정보를 가져온다
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



//lat: 35.2290649
//lng: 126.84307749999999
//API Key: 406290220dd87a9021c3a03f81f881c8
