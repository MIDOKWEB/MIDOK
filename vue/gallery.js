const app = Vue.createApp({
    data() {
        return {
            widthFlag: 0,
            slideIndex: 1,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }
    },
    mounted() {
        window.addEventListener('click', this.autoScroll)
        window.addEventListener('DOMContentLoaded', this.onLoad)
        window.addEventListener('resize', this.onResize)
    },
    beforeDestroy() {
        window.removeEventListener('click', this.autoScroll)
        window.removeEventListener('DOMContentLoaded', this.onLoad)
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        setImageSize() {
            if (this.windowHeight <= 900) {
                this.widthFlag = 1
            }
            else {
                this.widthFlag = 0
            }
        },
        onResize() {
            this.setImageSize()
        },
        onLoad() {
            this.setImageSize()
        },
        autoScroll() {
            let activeThumb = document.getElementById("active")
            activeThumb.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            })
        },
        getImageUrl(imgid) {
            return `../../img/load/pos_${imgid}.JPG`
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
            let dots = document.getElementsByClassName("demo");
            if (n > slides.length) { this.slideIndex = 1 }
            if (n < 1) { this.slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].id = dots[i].removeAttribute("id");
            }
            slides[this.slideIndex - 1].style.display = "block";
            dots[this.slideIndex - 1].id = "active";
        }
    }
})

app.mount("#app")