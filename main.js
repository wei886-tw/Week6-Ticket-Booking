import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/js/all.js";

console.log("Hello world!");


const swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    slidesPerView: "auto",
    speed: 20000,
    loop: true,
    autoplay: {
        delay: 0,
    },
});

