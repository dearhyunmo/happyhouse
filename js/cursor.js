(function($) { 

	$(function() {
		var $circle = $('#cursor');

		function moveCircle(e) {
			TweenLite.to($circle, 0.3, {
			css: {
			  left: e.pageX-10,
			  top: e.pageY-10
			}
		  });
		}
		
		$(window).on('mousemove', moveCircle);
		
		$("#header").on("mouseover",function(){
			$circle.hide();
		})

		$("#high-sec01, .high-txt, #det-sec06 a").on("mouseover",function(){
			$circle.css("opacity","1");
		})
		$("#high-sec01, .high-txt, #det-sec06 a").on("mouseleave",function(){
			$circle.css("opacity","0");
		})
	}); 
	
} ) ( jQuery);
