const app = Vue.createApp({
    data() {
        return {
            windowWidth: window.innerWidth,
            dropDownFlag: false,
            temp: 0,
            cond: 0,
            weatherIcon: "",
            url: `https://api.openweathermap.org/data/2.5/weather?q=Miskolc&appid=b507570f3421bc3c5de317151523a9e0&units=metric`,
            rightPosSize: 55,
            activeColor: "#808080",
            scrollButtonActive: false,
            slideIndex: 1,
        }
    },
    mounted() {
        this.$nextTick(() => {
                window.addEventListener('resize', this.onResize)
                window.addEventListener('DOMContentLoaded', this.weather)
                window.addEventListener('scroll', this.onScroll)
            }),
            setInterval(this.weather, 300000) //5 min,
        showSlides(slideIndex);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize),
            window.removeEventListener('DOMContentLoaded', this.weather),
            window.removeEventListener('scroll', this.onScroll)
        localStorage.setItem('scrollPosition', window.scrollY)
    },
    methods: {
        plusSlides(n) {
            showSlides(slideIndex += n);
        },
        currentSlide(n) {
            showSlides(slideIndex = n);
        },
        showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        },
        onScroll() {
            let distance = document.getElementById('section2').getBoundingClientRect()
            if (window.innerWidth > 650) {
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
                    this.weatherIcon = "fa-solid fa-sun fa"
                    this.activeColor = "#FDB813"
                    break
            }
        }
    }
})

app.mount('#app')