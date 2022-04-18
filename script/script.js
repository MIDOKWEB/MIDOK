let dropdown_flag = true;

window.addEventListener("resize", resizeEvent)

function resizeEvent() {
    let width = window.innerWidth;

    if (width >= 650) {
        dropdown_flag = true;
        document.getElementById('dropdown').style.display = 'none';
    }
}

function dropdown() {
    if (dropdown_flag) {
        document.getElementById('dropdown').style.display = 'flex';
        dropdown_flag = !dropdown_flag;
    } else {
        document.getElementById('dropdown').style.display = 'none';
        dropdown_flag = !dropdown_flag;
    }
}


const api_key = `b507570f3421bc3c5de317151523a9e0`
const url = `https://api.openweathermap.org/data/2.5/weather?q=Miskolc&appid=${api_key}$units=metric`


function getWeatherData() {
    fetch(url)
        .then(response => response.JSON())
        .then(data => {
            console.log(data)
        })
        .catch(() => {
            console.log("valami nem jo gec");
        })
}

getWeatherData()