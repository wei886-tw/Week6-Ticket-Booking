const swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
	allowTouchMove: false,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
		reverseDirection: true, //反向
	},
	loop: true,
	speed: 50000,
});
