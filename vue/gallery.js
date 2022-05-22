const app = Vue.createApp({
    data() {
        return {
            slideIndex: 1,
        }
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
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
            let captionText = document.getElementById("caption");
            if (n > slides.length) { this.slideIndex = 1 }
            if (n < 1) { this.slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex - 1].style.display = "block";
            dots[this.slideIndex - 1].className += " active";
            captionText.innerHTML = dots[this.slideIndex - 1].alt;
        }
    }
})

app.mount("#app")