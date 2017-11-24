$(function() {
	$('.p-aboutSlider').owlCarousel({
		loop:true,
		nav:true,
		items:1
	});
	$('.p-aboutSlider2').owlCarousel({
		loop:true,
		nav:false,
		autoplay:true,
		autoplayTimeout:5000,
		responsive:{
			0:{
				items:2
			},
			767:{
				items:3
			},
			992:{
				items:4
			}
		}
	});
	$('.p-achievements__slider').owlCarousel({
		loop:true,
		nav:false,
		items:1,
		autoplay:true,
		autoplayTimeout:5000
	});
	$('.p-article__slider').owlCarousel({
		loop:true,
		nav:false,
		items:3,
		margin:30,
		autoplay:true,
		autoplayTimeout:5000,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:3
			}
		}
	});
});