const api = {
    key: 'fe7a46df8b1c281bc02df9bf4658dbc4',
    base: 'https://api.openweathermap.org/data/2.5/'
}

var input = document.getElementById('input');
input.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        getResults(input.value);
    }
});

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
        return weather.json();
    }).then(displayResults);
}




function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "March", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day},${date}/${month}/${year}`;
}

function displayResults(weather) {
    var place = document.getElementById('place');
    place.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.getElementById("date");
    date.innerText = dateBuilder(now);

    var temp = document.getElementById('temperature');
    temp.innerText = `${Math.round(weather.main.temp)} *C`;

    var dis = document.getElementById("distanceTemp");
    dis.innerText = `${Math.round(weather.main.temp_min)} *C - ${Math.round(weather.main.temp_max)} *C`
}