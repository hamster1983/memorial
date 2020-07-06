$(document).ready(function(){
	
	$('[name="phone"]').inputmask("+7(999) 999-9999");

	$('.top-slider').slick({
	  infinite: true,
	  autoplay: true,
	  fade: true,
	  autoplaySpeed: 1500,
	  arrows: false,
	  dots: false,
	  speed: 1500,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});

	$('.video-wrap').click(function() {
		if($(this).hasClass('prostota-video')) {
			$(this).html('<iframe src="https://www.youtube.com/embed/2uU6LigXKMI?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			$('.video-wrap').not(this).html('<img src="img/play.png" alt="" class="play">');
		}
		else if($(this).hasClass('remont-video')) {
			$(this).html('<iframe src="https://www.youtube.com/embed/ZT-0CF9IXko?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			$('.video-wrap').not(this).html('<img src="img/play.png" alt="" class="play">');
		}
	});

	$('.works-slider').slick({
	  infinite: true,
	  autoplay: true,
	  arrows: true,
	  dots: false,
	  speed: 1500,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});

	$('.movie-wrap').click(function() {
		if($(this).hasClass('left-movie')) {
			$(this).html('<iframe src="https://www.youtube.com/embed/33Xo5KheqJ4?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			$('.movie-wrap').not(this).html('<img src="img/big-play.png" alt="" class="big-play">');
		}
		else if($(this).hasClass('right-movie')) {
			$(this).html('<iframe src="https://www.youtube.com/embed/Ro5sADYiHH8?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			$('.movie-wrap').not(this).html('<img src="img/big-play.png" alt="" class="big-play">');
		}
	});

	$('[type="submit"]').click(function(e) {
		let form = $(this).parents('form');
		if(form.find('[name="phone"]').val() == '' || form.find('[name="name"]').val() == '') {
			alert('Поля ИМЯ и ТЕЛЕФОН не могут быть пустыми! Заявка НЕ отправлена! Попробуйте еще раз');
			form.find('[type="text"]')[0].focus();
			return false;
		}
		e.preventDefault();
		$.ajax({
		  cashe: false,
		  type: form.attr('method'),
		  url: form.attr('action'),
		  data: form.serialize(),
		  success: function(data) {
			$('#result .modal-body').html(data);
			$('#result').modal('show');
			//$('form [type="text"]').val('');
		  }
		});
	});

	/*$('.faq-question').click(function(){
	    $(this).find('.faq-thumb').toggleClass('active');
	});

	$('.comments-slider').slick({
	  infinite: true,
	  autoplay: false,
	  autoplaySpeed: 1500,
	  arrows: false,
	  dots: false,
	  speed: 1500,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});

	$('.comments-prev').click(function() {
		$('.comments-slider').slick('slickPrev');
	});
	$('.comments-next').click(function() {
		$('.comments-slider').slick('slickNext');
	});
	$('.comments-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
		$('.comments-num-slide .current').text(currentSlide+1);
	});

	$('[type="submit"]').click(function(e) {
		let form = $(this).parents('form');
		if(form.find('[name="phone"]').val() == '' || form.find('[name="name"]').val() == '') {
			alert('Поля ИМЯ и ТЕЛЕФОН не могут быть пустыми! Заявка НЕ отправлена! Попробуйте еще раз');
			form.find('[type="text"]')[0].focus();
			return false;
		}
		e.preventDefault();
		$.ajax({
		  cashe: false,
		  type: form.attr('method'),
		  url: form.attr('action'),
		  data: form.serialize(),
		  success: function(data) {
			$('#result .modal-body').html(data);
			$('#result').modal('show');
			//$('form [type="text"]').val('');
		  }
		});
	});*/
	
	/*$('#plitka-quiz').on('slid.bs.carousel', function(){
	    $('#current').text(+$('.carousel-indicators li.active').attr('data-slide-to')+1);
	});
	$('#plitka-quiz .btn-yellow').not('[type="submit"], .back').click(function(){
		let parent = $(this).closest('.question');
		let title = parent.attr('data-title');
		let result = '';
		parent.find('input').each(function(){
			if($(this).attr('type') == 'text') {
				result += $(this).val();
			}
			else if($(this).attr('type') == 'radio' && $(this).is(':checked')) {
				result += $(this).val();
			}
			else if($(this).attr('type') == 'checkbox' && $(this).is(':checked')) {
				result += $(this).val()+',  ';
			}
		});
		if(result == '') {
			alert('Ответьте на вопрос');
			parent.find('input').focus();
			return false;
		}
		$('#plitka-quiz [type="hidden"]').each(function(){
			if($(this).attr('name') == title) {
				$(this).val(result);
			}
		});
	});
	
	$('.top-slider').slick({
	  infinite: true,
	  autoplay: true,
	  fade: true,
	  autoplaySpeed: 2000,
	  arrows: false,
	  dots: false,
	  speed: 2000,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	
	$('.part-slider').slick({
	  infinite: true,
	  autoplay: true,
	  arrows: true,
	  dots: false,
	  speed: 1500,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});
	
	 $('.comments-slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.comments-slider-nav'
	});
	$('.comments-slider-nav').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.comments-slider-for',
	  arrows: false
	});*/
	
});