$(document).ready(function(){
    $('#srch-dropdown').hierarchySelect({
		hierarchy: false,
		search: false,
		width: 150,
		initialValueSet: true,
		onChange: function (value) {
			console.log('[Category] value: "' + value + '"');
		}
	});

	$('.auto-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		autoplay: true,
		draggable: false,
		autoplaySpeed: 4000,
		arrows: false,	
		pauseOnHover: true,
		focusOnSelect: false,
		accessibility: true,
		responsive: [
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
		]
	});

	$(".read-rating").starRating({
		starSize: 18,
		starShape: 'rounded',
		readOnly: true
	});

	$('#srchResTab a').click(function() {
		var href = $(this).attr('href');
		var num = href.split("-")[1];
		$('.tab-pane').css('display', 'none');
		$("[class^='tab-'][class^='tab-1-']").removeClass('show');
		$(".tab-"+num).css('display', 'block');
		$(".etabi-img"+num).css('display', 'block');
		$(".tab-"+num).addClass('show');
		$(".etabi-img"+num).addClass('show');
	});
	
	$( "span.wishlist" ).click(function() {
		$( "span.wishlist" ).toggleClass( "press", 1000 );
	});
	$( "span.cart" ).click(function() {
		$( "span.cart" ).toggleClass( "press", 1000 );
	});
		
});