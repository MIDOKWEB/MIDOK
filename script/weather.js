const api_key = `b507570f3421bc3c5de317151523a9e0`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=Miskolc&appid=${api_key}&units=metric`;

document.addEventListener("DOMContentLoaded", function(event) {
    refreshPage()
})

async function getWeatherData() {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            let temp = Math.round(data.main.temp, 0)
            let cond = data.weather[0].id
            localStorage.setItem('temperature', temp)
            localStorage.setItem('condition', cond)
        })
        .catch(err => console.log(err))
}

function setWeatherData() {
    let temp = localStorage.getItem('temperature')
    let condition = localStorage.getItem('condition').toString()
    let condition_indicator = ""
    let right_pos_size = 40

    if (temp.length == 1) {
        right_pos_size = 40
    } else {
        right_pos_size = 55
    }

    if (condition == '800') {
        condition = '9'
    }

    document.getElementById('right').style.right = `${right_pos_size}px`

    const expr = condition[0]
    switch (expr) {
        case '2':
            condition_indicator = `<i class="fa-solid fa-cloud-bolt fa"></i>`
            break
        case '3':
            condition_indicator = `<i class="fa-solid fa-cloud-rain fa"></i>`
            break
        case '5':
            condition_indicator = `<i class="fa-solid fa-cloud-showers-heavy fa"></i>`
            break
        case '6':
            condition_indicator = `<i class="fa-solid fa-snowflake fa" style = "color: #cccccc"></i>`
            break
        case '7':
            condition_indicator = `<i class="fa-solid fa-smog fa"></i>`
            break
        case '8':
            condition_indicator = `<i class="fa-solid fa-cloud fa"></i>`
            break
        case '9':
            condition_indicator = `<i class="fa-solid fa-sun fa" style="color: #FDB813"></i>`
            break
    }

    let weatherWidgetContents =
        `
        ${condition_indicator}
        <span id="weather-widget" style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold; color: rgb(90, 132, 247); margin-left: -1px ;">${temp}°C</span>
        `

    const weatherWidget = document.getElementById("weather-variable")
    const weatherWidget_2 = document.getElementById("weather-variable-2")

    weatherWidget.innerHTML = weatherWidgetContents
    weatherWidget_2.innerHTML = weatherWidgetContents
}

async function refreshPage() {
    await getWeatherData()
    setWeatherData()
}

getWeatherData()
setWeatherData()

setInterval(async function() {
        await refreshPage()
    },
    60 * 1000
)