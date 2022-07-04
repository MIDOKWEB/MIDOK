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
            this.autoScroll_instant()
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
        autoScroll_instant() {
            let activeThumb = document.getElementById("active")
            activeThumb.scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            })
            console.log('instant scrolled')
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