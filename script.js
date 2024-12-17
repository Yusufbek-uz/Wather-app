const apiKey = "ac6cdba17d462387debddfc0db0d5b88";
const btn = document.getElementById("btn");
const input = document.getElementById("inp");
const temp = document.getElementById("temp");
const min = document.getElementById("min");
const max = document.getElementById("max");
const img = document.getElementById("img");
const city = document.getElementById("city");
const date1 = document.getElementById("date");
const units = "metric";
const input0 = document.getElementById("inp1");
const temp0 = document.getElementById("temp1");
const min0 = document.getElementById("min1");
const max0 = document.getElementById("max1");
const img0 = document.getElementById("img1");
const city0 = document.getElementById("city1");
const date10 = document.getElementById("date1");

btn.addEventListener("click", () => {
    const cityName = input.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`;

    if (cityName.length < 1) {
        alert("Biror narsa yozing !!");
    } else {
        fetch(url)
            .then(res => res.json())
            .then(json => weatherView(json))
    }
});

input0.addEventListener("input", () => {
    const cityName = input0.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`;

    if (cityName.length > 0) {
        fetch(url)
            .then(res => res.json())
            .then(json => {weatherView0(json);})
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=${units}&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(json => weatherView0(json))
});

function weatherView(data) {
    console.log(data);
    city.textContent = data.name;
    max.textContent = "Max: " + data.main.temp_max.toFixed(0) + "°";
    min.textContent = "Min: " + data.main.temp_min.toFixed(0) + "°";
    temp.textContent = data.main.temp.toFixed(0) + "°";
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const currentDate = new Date();
    date1.textContent = currentDate.toLocaleDateString(); 
}



function weatherView0(data) {
    console.log(data);
    city0.textContent = data.name;
    max0.textContent = "Max: " + data.main.temp_max.toFixed(0) + "°";
    min0.textContent = "Min: " + data.main.temp_min.toFixed(0) + "°";
    temp0.textContent = data.main.temp.toFixed(0) + "°";
    img0.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const currentDate = new Date();
    date10.textContent = currentDate.toLocaleDateString();
    const faviconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    updateFavicon(faviconUrl);
}
function updateFavicon(iconUrl) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
    }
    link.href = iconUrl;
}