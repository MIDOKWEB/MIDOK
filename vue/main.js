const app = Vue.createApp({
    data() {
        return {
            sunrise: 0,
            sunset: 0,
            currentTime: Math.round(+new Date()/1000),
            windowWidth: window.innerWidth,
            dropDownFlag: false,
            temp: 0,
            cond: 0,
            weatherIcon: "",
            url: `https://api.openweathermap.org/data/2.5/weather?q=Miskolc&appid=b507570f3421bc3c5de317151523a9e0&units=metric`,
            rightPosSize: 60,
            activeColor: "#808080",
            scrollButtonActive: false,
            slideIndex: 1,
            slideshowIcon: "fa-solid fa-up-right-and-down-left-from-center",
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        window.addEventListener('DOMContentLoaded', this.onContentLoad)
        window.addEventListener('scroll', this.onScroll)
        setInterval(this.weather, 300000), //5 min
        this.showSlides(this.slideIndex)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize),
        window.removeEventListener('DOMContentLoaded', this.onContentLoad),
        window.removeEventListener('scroll', this.onScroll)
        localStorage.setItem('scrollPosition', window.scrollY)
    },
    methods: {
        getGalleryUrl() {
            if (this.slideIndex == 1) {
                window.location.href = '../galeria_alap/'
            }
            else if (this.slideIndex == 2) {
                window.location.href = '../galeria_alap/'
            }
            else if (this.slideIndex == 3) {
                window.location.href = '../galeria_alap/'
            }
        },
        onContentLoad() {
            if (this.windowWidth <= 600) {
                this.slideshowIcon = "fa-solid fa-up-right-and-down-left-from-center fa-2x"
            } else {
                this.slideshowIcon = "fa-solid fa-up-right-and-down-left-from-center fa-3x"
            }
            this.weather()
        },
        plusSlides(n) {
            this.showSlides(this.slideIndex += n);
        },
        currentSlide(n) {
            this.showSlides(this.slideIndex = n);
        },
        showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) { this.slideIndex = 1 }
            if (n < 1) { this.slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[this.slideIndex - 1].style.display = "block";
        },
        onScroll() {
            let distance = document.getElementById('section2').getBoundingClientRect()
            if (window.innerWidth > 990) {
                if (distance.top < 5) {
                    this.scrollButtonActive = true
                } else {
                    this.scrollButtonActive = false
                }
            } else {
                if (distance.top < 875) {
                    this.scrollButtonActive = true
                } else {
                    this.scrollButtonActive = false
                }
            }
        },
        async weather() {
            await this.getWeatherData()
            this.setWeatherData()
        },
        onResize() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth >= 650) {
                this.dropDownFlag = false
            }
            if (this.windowWidth <= 600) {
                this.slideshowIcon = "fa-solid fa-up-right-and-down-left-from-center fa-2x"
            } else {
                this.slideshowIcon = "fa-solid fa-up-right-and-down-left-from-center fa-3x"
            }
        },
        scrollToTop() {
            window.scrollTo(0, 0)
        },
        toggleDropdown() {
            this.dropDownFlag = !this.dropDownFlag
        },
        async getWeatherData() {
            await fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.temp = Math.round(data.main.temp, 0)
                    this.cond = data.weather[0].id
                    this.sunset = data.sys.sunset
                    this.sunrise = data.sys.sunrise
                })
                .catch(err => console.log(err))
        },
        setWeatherData() {
            let condition = this.cond.toString()


            if (this.temp.toString().length == 1) {
                this.rightPosSize = 40
            }

            if (condition == '800') {
                condition = '9'
            }

            let expr = condition[0]
            if (expr != '9' || expr != '6') {
                this.activeColor = "#808080"
            }
            switch (expr) {
                case '2':
                    this.weatherIcon = "fa-solid fa-cloud-bolt fa"
                    break
                case '3':
                    this.weatherIcon = "fa-solid fa-cloud-rain fa"
                    break
                case '5':
                    this.weatherIcon = "fa-solid fa-cloud-showers-heavy fa"
                    break
                case '6':
                    this.weatherIcon = "fa-solid fa-snowflake fa"
                    this.activeColor = "#cccccc"
                    break
                case '7':
                    this.weatherIcon = "fa-solid fa-smog fa"
                    break
                case '8':
                    this.weatherIcon = "fa-solid fa-cloud fa"
                    break
                case '9':
                    if (this.currentTime > this.sunset || this.currentTime < this.sunrise) {
                        this.weatherIcon = "fa-solid fa-moon"
                        break
                    }
                    else {
                        this.weatherIcon = "fa-solid fa-sun fa"
                        this.activeColor = "#FDB813"
                        break
                    }
            }
        }
    }
})

app.mount('#app')