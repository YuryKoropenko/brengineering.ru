$(function() {
	$('.homeproj__nav img').on('click', function() {
		var tp = $(this).attr('src');
		$('homeproj__slider-item img').attr('src', tp);
	});
});