jQuery(function() {

	let my_switch = false;

	$('#my_button').click(function () {

		if ( my_switch == false ) {
			my_switch = true;

		var imageUrl = '../images/bats/png'
		$(this).html('Click for traditional baby').removeClass('btn-primary').addClass('btn-gothic');
		$('body').css({'background-color': 'rgb(45, 5, 0)', 'background-image': 'url("+  imageUrl + ")'});
		$('#my_image').attr('src', 'images/storkgoth.png');
	} else {
			my_switch = false;

		$(this).html('Click for goth baby').removeClass('btn-gothic').addClass('btn-primary');
		$('body').css({'background-color': 'rgb(187, 251, 211)', 'background-image': 'url("../images/clouds.png")'});
		$('#my_image').attr('src', 'images/stork2.png');
	}

	//
	// 	if ( $('.square.alt').hasClass('red') ) {
	// 	$('.square.alt').removeClass('red');
	// } else {
	// 	$('.square.alt').addClass('red');
	// }

	});
});
