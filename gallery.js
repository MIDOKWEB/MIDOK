const app = Vue.createApp({
    data() {
        return {
            slideIndex: 1,
            windowWidth: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('click', this.autoScroll)
        window.addEventListener('load', this.onLoad)
    },
    beforeDestroy() {
        window.removeEventListener('click', this.autoScroll)
        window.removeEventListener('load', this.onLoad)
    },
    methods: {
        onLoad() {
            try {
                window.scrollTo(0, 1)
            }
            catch (error) {
                console.log("Valami nem jo gec")
                console.log(error)
            }
        },
        autoScroll() {
            let activeThumb = document.getElementById("active")
            activeThumb.scrollIntoView({
                behavior: 'auto',
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