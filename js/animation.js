(function($) { 
	//2020-01-13 추가
	$(function(){
		$(".canvas-wr").each(function(){
			$(this).prepend('<canvas id="cirCanvas" class="cirCl" width="740" height="740"></canvas>')
		});
	})
	$(window).ready(function(){
		$("html").addClass("is-mounted");
		
	})
	$(window).ready(function(){
		img_event();
		img_event2();
		img_event3();
		img_event4();
		$(window).scroll(function(e){
			var s = $(window).scrollTop();	// 현재 window scrollTop
			if(s>50){
				img_event();
				img_event2();
				img_event3();
				img_event4();
			}
		})
		function img_event(){
			$(".img-ani").each(function(){
				var w_t = $(window).scrollTop() + $(window).height();
				var i_t = $(this).offset().top;
				if(w_t > i_t + 200){
					$(this).addClass("img-aniload");
				}
			})
		}
		function img_event2(){
			$(".txt-ani").each(function(){
				var w_t = $(window).scrollTop() + $(window).height();
				var i_t = $(this).offset().top;
				if(w_t > i_t + 200){
					$(this).addClass("txt-aniload");
				}
			})
		}
			
		var i = 0;
		function img_event3(){
			var classLen = document.getElementsByClassName("canvas-wr").length;
			$(".canvas-wr").each(function(){
				var w_t = $(window).scrollTop() + $(window).height();
				var i_t = $(this).offset().top;
				
				if(w_t > i_t + 500){
					if(i < classLen)
					{
						circle(i);
						i++;
					}
				}
				else
				{
					i = 0;
				}
			})
		}
		
		function img_event4(){
			$(".cap-tit02").each(function(){
				var w_t = $(window).scrollTop() + $(window).height();
				var i_t = $(this).offset().top;
				if(w_t > i_t + 500){
					$(this).addClass("act");
				}
			})
		}

 
		
		


		/******************************************
		* 이미지 effect remove event
		* img_event() 가 적용되었던 요소들을 초기화 시켜주겠습니다.
		******************************************/
		function img_event_remove(){
			$(".img-ani").removeClass("img-aniload");
		}
		function img_event_remove2(){
			$(".txt-ani").removeClass("txt-aniload");
		}
	})

	$(window).load(function(){

		$(window).scroll(function(e){
			var s = $(window).scrollTop();	// 현재 window scrollTop
			if(s>200){
				img_event();
			}
		})

		/******************************************
		* 이미지 make event
		* 스크립트 효과는 아니고 css적인 측면을 만족시키기위해 
		* Html 코드를 써야하는데 사용할수 없으니(워드프레스라서) Script로 Html 코드를 추가시켜주었습니다.
		******************************************/
		img_body_make();
		img_event_remove();
		img_event();
		$(".avia-image-container").not(".avia-image-container.avia_animated_image").css("opacity","1");

		function img_body_make(){
			$(".avia-image-container").not(".avia-image-container.avia_animated_image").each(function(){
				var w = $(this).find("img").width();
				var h = $(this).find("img").height(); 
				
				//$(this).find(".avia-image-container-inner").css({width:w,height:h});
				//$(this).find("img").css({width:w,height:h});
				$(this).find("img").wrap("<div class='img_body'>");
				var overlap_html = "<div class='img_overlap'></div>";
				$(this).find(".img_body").append(overlap_html);
				$(".avia_image").css("opacity","1");
				$(".next-btn").css("opacity","1");
			})
			$(".avia-image-container .img_body, .btn-box").attr("data-check","no");
		}

		/******************************************
		* 이미지 effect event
		* 이미지가 펼쳐지는 효과입니다. ( 시간차 / 예외처리 / css활용 ) 등등 사용하였습니다.
		******************************************/
		function img_event(){
			$(".avia-image-container-inner .img_body, .btn-box").each(function(){
				var check = $(this).data("check");
				if(check != "yes"){
					var $this  = $(this);
					var time = $this.parent(".avia-image-container-inner").data("time");
					var w_t = $(window).scrollTop() + $(window).height();
					var i_t = $this.offset().top;

					if(w_t > i_t+200){
						$(this).data("check","yes");
						if(time){
							setTimeout(function(){
								$this.addClass("active");
							},time)
						}
						else{
							$this.addClass("active");
						}
					}
				}
			})
		}


		/******************************************
		* 이미지 effect remove event
		* img_event() 가 적용되었던 요소들을 초기화 시켜주겠습니다.
		******************************************/
		function img_event_remove(){
			//$(".avia-image-container-inner .img_body").css({width:"0",height:"0px"}).removeClass("active").data("check","no");
		}

	});
	
	function circle(val){
	//console.log(document.getElementsByClassName('cirCl')[val]);
	// CANVAS
		var canvas = document.getElementsByClassName('cirCl')[val],
			width = canvas.width,
			height = canvas.height;

		// CANVAS PROPERTIES
		var ctx = canvas.getContext('2d');
		ctx.lineWidth = 34;
		ctx.strokeStyle = '#f5f5f5';

		// CANVAS MATHS
		var x = width / 2,
			y = height / 2,
			radius = 335,
			circum = Math.PI * 2,
			start = Math.PI / -2, // Start position (top)
			finish = 100, // Finish (in %)
			curr = 0; // Current position (in %)

		// CANVAS ANIMATION

		// Enables browser-decided smooth animation (60fps)
		var raf =
			window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame;
		window.requestAnimationFrame = raf;

		// Animate function
		function animate(draw_to) {
		  // Clear off the canvas
		  //ctx.clearRect(0, 0, width, height);
		  // Start over
		  ctx.beginPath();
		  // arc(x, y, radius, startAngle, endAngle, anticlockwise)
		  // Re-draw from the very beginning each time so there isn't tiny line spaces between each section (the browser paint rendering will probably be smoother too)
		  ctx.arc(x, y, radius, start, draw_to, false);
		  // Draw
		  ctx.stroke();
		  // Increment percent
		  curr++;
		  // Animate until end
		  if (curr < finish + 1) {
			// Recursive repeat this function until the end is reached
			requestAnimationFrame(function () {
			  animate(circum * curr / 60 + start);
			});
		  }
		}

		animate();

		// Animation adpated from: http://stackoverflow.com/questions/15692353/animate-a-canvas-circle-to-draw-on-load & http://jsfiddle.net/loktar/uhVj6/4/
	}
} ) ( jQuery);

