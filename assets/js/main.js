(function ($) {
	"use strict";


	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	$('#mobile-menu-lg').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "2500"
	});

	$('.open-mobile-menu').on('click', function () {
		$('.side-info').addClass('info-open');
		$('.offcanvas-overlay').addClass('overlay-open');
	})

	$('.side-info-close,.offcanvas-overlay,.mobile_one_page li.menu-item a.nav-link').on('click', function () {
		$('.side-info').removeClass('info-open');
		$('.offcanvas-overlay').removeClass('overlay-open');
	})

	//Data-Background Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	// WOW active
	new WOW().init();

	//testimonial active
	var swiper1 = new Swiper('.testimonial', {
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 1,
				spaceBetween: 40
			},
			800: {
				slidesPerView: 1,
				spaceBetween: 40
			},
			992: {
				slidesPerView: 1,
				spaceBetween: 40
			},
			1200: {
				slidesPerView: 1,
				spaceBetween: 40
			},
			1600: {
				slidesPerView: 1,
				spaceBetween: 40
			},
		}
	});

	//swiper active
	var swiper2 = new Swiper('.slider-active', {
		direction: 'vertical',
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,

		},

	});
	var swiper = new Swiper('.slider-active2', {
		direction: 'vertical',
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,

		},

	});


	if ($("#slider-range-2").length) {
		$("#slider-range-2").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount-2").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount-2").val("$" + $("#slider-range-2").slider("values", 0) +
			" - $" + $("#slider-range-2").slider("values", 1));
		$('#filter-btn-2').on('click', function () {
			$('.filter-widget').slideToggle(1000);
		});

	}


	if (jQuery(".team-active").length > 0) {
		let swiper2 = new Swiper('.team-active', {
			slidesPerView: 3,
			spaceBetween: 20,
			observer: true,
			observeParents: true,
			loop: false,


			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 1,
					spaceBetween: 30
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 2,
					spaceBetween: 40
				},
				800: {
					slidesPerView: 2,
					spaceBetween: 40
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 40
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 40
				},
				1600: {
					slidesPerView: 3,
					spaceBetween: 30
				},
			}
		})

	}
	if (jQuery(".brand-active").length > 0) {
		let swiper2 = new Swiper('.brand-active', {
			slidesPerView: 5,
			spaceBetween: 30,
			observer: true,
			observeParents: true,
			loop: false,


			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				// when window width is >= 320px
				0: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 1,
					spaceBetween: 30
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 3,
					spaceBetween: 40
				},
				800: {
					slidesPerView: 3,
					spaceBetween: 40
				},
				992: {
					slidesPerView: 5,
					spaceBetween: 40
				},
				1200: {
					slidesPerView: 5,
					spaceBetween: 40
				},
				1600: {
					slidesPerView: 5,
					spaceBetween: 40
				},
			}
		})

	}
	if (jQuery(".testimonial-active").length > 0) {
		let swiper2 = new Swiper('.testimonial-active', {
			slidesPerView: 1,
			spaceBetween: 30,
			observer: true,
			observeParents: true,
			loop: false,


			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 1,
					spaceBetween: 30
				},
				576: {
					slidesPerView: 1,
					spaceBetween: 30
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 30
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 1,
					spaceBetween: 40
				},
				800: {
					slidesPerView: 1,
					spaceBetween: 40
				},
				992: {
					slidesPerView: 1,
					spaceBetween: 40
				},
				1200: {
					slidesPerView: 1,
					spaceBetween: 40
				},
				1600: {
					slidesPerView: 1,
					spaceBetween: 40
				},
			}
		})

	}
	var swiper = new Swiper(".hero-active", {
		direction: "vertical",
		slidesPerView: 1,
		spaceBetween: 30,
		mousewheel: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
	});

	/* magnificPopup img view */
	$(".popup-image").magnificPopup({
		type: "image",
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	// isotop
	$(".grid").imagesLoaded(function () {
		// init Isotope
		var $grid = $(".grid").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: ".grid-item"
			}
		});

		// filter items on button click
		$(".portfolio-menu").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$(".portfolio-menu button").on("click", function (event) {
			$(this)
				.siblings(".active")
				.removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});



	if (jQuery("#pagepiling").length > 0) {
		$('#pagepiling').pagepiling({
			menu: '#menu',
			anchors: ['page1', 'page2', 'page3'],
			sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
			loopTop: true,
			loopBottom: true
		});
	}


})(jQuery);