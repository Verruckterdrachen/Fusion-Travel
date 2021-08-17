//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

if (document.querySelector('.slider-welcome__body')) {
	let welcomeSlider = new Swiper('.slider-welcome__body', {
		observer: true,
		observeParents: true,
		autoHeight: false,
		parallax: true,
		loop: true,
		pagination: {
			el: '.slider-welcome__dotts',
			clickable: true,
		},
		autoplay: {
			delay: 2500,
			stopOnLastSlide: false,
			disableOnInteraction: false
		},
		speed: 1500,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 120,
			}
		}
	});
}

if (document.querySelector('.slider-destination__body')) {
	let destinationSlider = new Swiper('.slider-destination__body', {
		observer: true,
		observeParents: true,
		autoHeight: false,
		parallax: true,
		loop: true,
		spaceBetween: 120,
		navigation: {
			nextEl: '.slider-destination .slider-arrow_next',
			prevEl: '.slider-destination .slider-arrow_prev',
		},
		autoplay: {
			delay: 2500,
			stopOnLastSlide: false,
			disableOnInteraction: false
		},
		speed: 1500,
	});
}

if (document.querySelector('.slider-testimonials__body')) {
	let testimonialsSlider = new Swiper('.slider-testimonials__body', {
		observer: true,
		observeParents: true,
		autoHeight: false,
		parallax: true,
		slidesPerView: 1,
		spaceBetween: 480,
		loop: true,
		pagination: {
			el: '.slider-testimonials__dotts',
			clickable: true,
		},/*
		autoplay: {
			delay: 2500,
			stopOnLastSlide: false,
			disableOnInteraction: false
		},*/
		speed: 1500,
	});
}
