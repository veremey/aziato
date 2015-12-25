$(document).ready(function() {

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
		autoplaySpeed: 20000,
		prevArrow: $('.js-comment__back'),
		nextArrow: $('.js-comment__next')
	});

	//slider half
	$('.slider__half').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// speed: 600,
		// centerMode: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 20000,
		dots: true
	});



}); //document ready