/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector(".main-block__slider")) {
		new Swiper(".main-block__slider", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 800,
			autoHeight: true,
			pagination: {
				el: ".main-block__slider .swiper-pagination",
				clickable: true,
			},
		});
	}
	if (document.querySelector(".games__slider")) {
		const sliders = document.querySelectorAll(".games__slider");
		sliders.forEach((slider) => {
			new Swiper(slider, {
				modules: [Navigation],
				observer: true,
				observeParents: true,
				slidesPerView: 8,
				spaceBetween: 14,
				speed: 400,
				navigation: {
					prevEl: slider.querySelector(".swiper-button-prev"),
					nextEl: slider.querySelector(".swiper-button-next"),
				},
				breakpoints: {
					0: {
						slidesPerView: 3,
						spaceBetween: 8,
					},
					550: {
						slidesPerView: 4,
					},
					660: {
						slidesPerView: 5,
					},
					768: {
						spaceBetween: 14,
						slidesPerView: 3,
					},
					850: {
						slidesPerView: 4,
					},
					1100: {
						slidesPerView: 5,
					},
					1300: {
						slidesPerView: 6,
					},
					1500: {
						slidesPerView: 7,
					},
					1650: {
						slidesPerView: 8,
					},
				},
			});
		});
	}
	if (document.querySelector(".levels-block__slider")) {
		new Swiper(".levels-block__slider", {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			speed: 800,
			pagination: {
				el: ".levels-block .swiper-pagination",
				clickable: true,
			},
			navigation: {
				prevEl: ".levels-block__buttons .swiper-button-prev",
				nextEl: ".levels-block__buttons .swiper-button-next",
			},
			breakpoints: {
				0: {
					slidesPerView: 1.5,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1100: {
					slidesPerView: 3,
				},
				1350: {
					slidesPerView: 4,
				},
			},
		});
	}
	if (document.querySelector(".casino-categories__slider")) {
		const sliders = document.querySelectorAll(".casino-categories__slider");
		sliders.forEach((slider) => {
			const sliderWrapper = slider.closest(".casino-categories");
			const buttonPrev = sliderWrapper.querySelector(".casino-categories-button-prev");
			const buttonNext = sliderWrapper.querySelector(".casino-categories-button-next");

			function checkIsSliderInline() {
				if (buttonNext.classList.contains("swiper-button-lock")) {
					slider.classList.add("_inline");
				}
			}

			new Swiper(slider, {
				modules: [Navigation],
				observer: true,
				observeParents: true,
				slidesPerView: "auto",
				spaceBetween: 10,
				speed: 800,
				navigation: {
					prevEl: buttonPrev,
					nextEl: buttonNext,
				},
			});

			checkIsSliderInline();
		});
	}
	if (document.querySelector(".slider-block-kind__slider")) {
		new Swiper(".slider-block-kind__slider", {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 15,
			speed: 800,
			pagination: {
				el: ".slider-block-kind__slider .swiper-pagination",
				clickable: true,
			},
			navigation: {
				prevEl: ".slider-block-kind__slider .swiper-button-prev",
				nextEl: ".slider-block-kind__slider .swiper-button-next",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				},
				1350: {
					slidesPerView: 3,
				},
			},
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar");
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});
