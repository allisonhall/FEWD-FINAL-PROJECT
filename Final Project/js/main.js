$(document).ready(function() {
//begin doc ready

$(window).scroll(function(){

	// when section one scrolled change background color

	if (isScrolledIntoView('#section-one')===true){
		$('body').css('background-color','#FF8CA2');
		$('#nav li a').css('color','#222');
		$('#nav-1 a').css('color','black');
		$('#nav li a').css('font-weight','400');
		$('#nav-1 a').css('font-weight','600');

	} else {
		
	}

	// when section two scrolled change background color

	if (isScrolledIntoView('#section-two')===true){
		$('body').css('background-color','#fa607f');
		$('#nav li a').css('color','#222');
		$('#nav-2 a').css('color','#black');
		$('#nav li a').css('font-weight','400');
		$('#nav-2 a').css('font-weight','600');

	} else {
		
	}


	// when section three scrolled change background color

	if (isScrolledIntoView('#section-three')===true){
		$('body').css('background-color','#fb6d6d');
		$('#nav li a').css('color','#222');
		$('#nav-3 a').css('color','black');
		$('#nav li a').css('font-weight','400');
		$('#nav-3 a').css('font-weight','600');

	} else {
		
	}

	// when section four scrolled change background color

	if (isScrolledIntoView('#section-four')===true){
		$('body').css('background-color','#fc824e');
		$('#nav li a').css('color','#222');
		$('#nav-4 a').css('color','black');
		$('#nav li a').css('font-weight','400');
		$('#nav-4 a').css('font-weight','600');


	} else {
		
	}

	// when section five scrolled change background color

	if (isScrolledIntoView('#section-five')===true){
		$('body').css('background-color','#fd903a');
		$('#nav li a').css('color','#222');
		$('#nav-5 a').css('color','black');
		$('#nav li a').css('font-weight','400');
		$('#nav-5 a').css('font-weight','600');
	} else {
		
	}

	// when section six scrolled change background color

	if (isScrolledIntoView('#section-six')===true){
		$('body').css('background-color','#fa5e7f');
		$('#nav li a').css('color','#000');
		$('#nav-6 a').css('color','black');
		$('#nav li a').css('font-weight','400');
		$('#nav-6 a').css('font-weight','600');
	} else {
		
	}

	// when section seven scrolled change background color

	if (isScrolledIntoView('#section-seven')===true){
		// $('body').css('background-color','steelblue');
		$('#nav li a').css('color','#000');
		$('#nav-7 a').css('color','white');
		$('#nav li a').css('font-weight','400');
		$('#nav-7 a').css('font-weight','600');
	} else {
		
	}

});

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

});