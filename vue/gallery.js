const app = Vue.createApp({
    data() {
        return {
            slideIndex: 1,
            windowWidth: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('click', this.autoScroll)
        window.addEventListener('resize', this.onResize)
        window.addEventListener('load', this.onLoad)
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('click', this.autoScroll)
        window.removeEventListener('load', this.onLoad)
        window.removeEventListener('resize', this.onResize)
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll() {
            this.autoScroll()
        },
        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },
        onResize() {
            this.autoScroll()
        },
        onLoad() {
            this.autoScroll()
        },  
        autoScroll() {
            let activeThumb = document.getElementById("active")
            activeThumb.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            })
            console.log('scrolled')
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