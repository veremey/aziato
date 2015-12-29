$(document).ready(function() {

	//
	$('.my__buy').on('click', function() {
		$(this).toggleClass('is_active');
		return false;
	});


	// check select
	function select() {
		$(".js-select").each(function(){
			var select_list = $(this).parent().find(".js-select-list");
			var text = select_list.find("li").first().text();
			$(this).find(".js-select-text").text(text);
			$(this).click(function(event){
				if ($(this).hasClass("is-active")) {
				    $(this).removeClass("is-active");
				    select_list.slideUp("fast");
				}
				else {
				    $(".js-select").removeClass("is-active");
				    $(".js-select-list").hide();
				    select_list.slideDown("fast");
				    $(this).addClass("is-active");
				}
				event.stopPropagation();
			});
			select_list.find("li").click(function(event) {
				var id = $(this).attr("data-id");
				var text = $(this).text();
				$(this).parent().parent().find(".js-select-text").text(text);
				$(this).parent().parent().find(".js-select-input").val(id);
				$(this).parent().hide();
				$(this).parents(".js-select").removeClass("is-active");
				event.stopPropagation();
			});
		});
	}
	select();

	$('.js-select').click(function(event){
	    event.stopPropagation();
	});

	//увеличиваю z-index когда мышь над main.small__container
	$('main.small__container').hover(function() {
		$(this).css({'z-index' : '600'});
	}, function() {
		$(this).css({'z-index' : '6'});
	});

	//увеличиваю z-index когда мышь над main.small__container
	$('.categories .box__ms').hover(function() {
		$(this).css({'z-index' : '600'});
		$(this).siblings().css({'z-index' : '-2'});

	}, function() {
		$(this).css({'z-index' : '6'});
		$(this).siblings().css({'z-index' : '6'});
	});

	// подмена картинки

	$('.js-take-img').click( function() {
		var src = $('.is_active').attr('src');
		var carousel = $(this).parents('.product__img');

		$(this).siblings().removeClass('is_active');
		$(this).addClass('is_active');
		carousel.find('.js-swing__img img').attr('src', carousel.find('.is_active img').attr('src'));
	});

	//option choose
	$('.js-option a:not(.is_disable)').on('click', function() {
		$(this).addClass('is_active').siblings().removeClass('is_active');

		return false;
	});

	$('.js-option .is_disable').on('click', function() {
		return false;
	});

	/* Скрипт для рейтинга */

	$('.stars').each(function(){

		var rating = $(this);
		var rating_input = rating.parents('form').find('input[name="rating"]');
		var stars = $('.star > span', rating);

		rating.find('.descr').hover(function(){
			stars.removeClass('active');
			rating_input.val(0);
		});

		stars.each(function(index){
			var current = index + 1;

			$(this).hover (
				function(){
					stars.removeClass('active').slice(0, current).addClass('active');
				},
				function(){
					rating_input.val(parseFloat($('.active', rating).length/2));
				}
			);

		});

	});

	//slider delivery
	$('.slider__delivery').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		// speed: 600,
		// centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 20000,
		prevArrow: $('.js-slider__back'),
		nextArrow: $('.js-slider__next')
	});

	//slider comment
	$('.slider__comment').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		// speed: 600,
		// centerMode: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 18000,
		prevArrow: $('.js-comment__back'),
		nextArrow: $('.js-comment__next')
	});

	//slider comment
	$('.slider__report').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// speed: 600,
		// centerMode: true,
		// adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 21000,
		prevArrow: $('.js-report__back'),
		nextArrow: $('.js-report__next')
	});

	//slider half
	$('.slider__half').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 15000,
		dots: true
	});



}); //document ready