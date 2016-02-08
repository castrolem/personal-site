//------------------------------------------------------------------------------
// #NAVIGATION-SCROLLING
//------------------------------------------------------------------------------
(function () {
  'use strict';

	// This adds an offset in case the header is fixed
	$("a[href*='#']:not([href='#']").click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var topOffset = 0;
				if ( $('.main-nav').css('position') === 'fixed' ) {
					topOffset = $('.main-nav').height() + 30;
				}
				$('html,body').animate({
					scrollTop: target.offset().top - topOffset
				}, 400);

				return false;
			}
		}
	});
}());
