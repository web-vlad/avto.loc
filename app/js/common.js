
$(document).ready(function() {

// SHOW MAIN MENU
	/*$('.button-menu').click(function(e) {
			$(this).toggleClass('active');
			$('.box-main-menu').toggleClass('open');
			e.stopPropagation();
			e.preventDefault();
		});
		
	
		$('.close-menu').click(function() {
			$('.button-menu').removeClass('active');
			$('.box-main-menu').removeClass('open');
		});*/
	
		/*$('body').click(function(e){
			//e.stopPropagation();
			$('.button-menu').removeClass('active');
			$('.box-main-menu').removeClass('open');
		});*/
		
		//SHOW SPECIFICITY
    $('.hide-block').hide();
    $('.list-specificity .item-specificity:first-child .hide-block').show();
    $a = $('.qus');
    $a.on('click', function(event) {
        event.preventDefault();
        $a.not(this).next().slideUp();
        $(this).next().slideToggle();
        $(this).toggleClass('qus-open');
        $a.not(this).removeClass('qus-open');

    });

    // SLIDER PROGRAM
    /*$('.slider-program').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        //centerMode: true,
        variableWidth: true,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    arrows: false,
                }
            }
        ]
    });*/

	// BUTTON SCROLL TOP
	 $('.backtotop').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

});





