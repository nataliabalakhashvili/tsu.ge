$(document).ready(function(){

	// animation on scroll
	var animateHTML = function() {
		var elems;
		var windowHeight;
		function init() {
			elems = document.querySelectorAll('.hidden');
			windowHeight = window.innerHeight;
			addEventHandlers();
			checkPosition();
		}
		function addEventHandlers() {
			window.addEventListener('scroll', checkPosition);
			window.addEventListener('resize', init);
		}
		function checkPosition() {
			for (var i = 0; i < elems.length; i++) {
				var positionFromTop = elems[i].getBoundingClientRect().top;
				if (positionFromTop - windowHeight <= 0) {
					elems[i].className = elems[i].className.replace(
					'hidden',
					'fade-in-element'
					);
				}
			}
		}
		return {
			init: init
		};
	};
	animateHTML().init();

    // Magic Line in menu
    $(".nav-menu ul").append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");    
    $magicLine
        .width($(".current_page_item").width() - 20)
        .css("left", $(".current_page_item a").position().left + 20)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $(".nav-menu li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos + 20,
            width: newWidth - 20
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft") ,
            width: $magicLine.data("origWidth") 
        });    
    });

    // main page carousel
    $('.main-slider .owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots:true,
	    items:1
	});


    // main page carousel
    $('.container-width-slider .owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots:true,
	    items:1
	});

	// materialize parallax
	$('.parallax').parallax();

	// materialize default select, datepicker, timepicker styles
	$('select').material_select();
	$('.datepicker').pickadate();
	$('.timepicker').pickatime();

	// news slider
	$('.news-slider .owl-carousel').owlCarousel({
	    loop:false,
	    margin:40,
	    nav:true,
	    navText:['<img src="assets/img/right-chevron.svg" style="transform: rotate(180deg)">','<img src="assets/img/right-chevron.svg">'],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1300:{
	            items:4
	        }
	    }
	});

	// news block widths
	$('.news').css('margin-left', ($(window).width() - $('.container').width()) / 2 )

	function pagerLine(){
		var docHeight = $(document).height();
		var result = (100 * $(window).scrollTop()) / (docHeight - $(window).height());
		$('.pager-line').css('width', result + '%');
	}
	pagerLine();
	$(window).on('scroll',function(){
		pagerLine();
	})

});
