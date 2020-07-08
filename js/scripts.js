$(document).ready(function(){
	
	$('[name="phone"]').inputmask("+7(999) 999-9999");

	$('.primery-slider').slick({
	  infinite: true,
	  autoplay: true,
	  arrows: true,
	  dots: false,
	  speed: 1500,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
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
		  }
		});
	});
	
	$('#quiz-btn').click(function(){
		$('.calculate').slideDown('fast');
	});
	
	$('#memory-quiz').on('slid.bs.carousel', function(){
	    $('#current').text(+$('.carousel-indicators li.active').attr('data-slide-to')+1);
	});
	$('#memory-quiz .btn-braun').not('[type="submit"]').click(function(){
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
			alert('Пожалуйста, ответьте на вопрос');
			parent.find('input').focus();
			return false;
		}
		$('#memory-quiz [type="hidden"]').each(function(){
			if($(this).attr('name') == title) {
				$(this).val(result);
			}
		});
	});
	
});