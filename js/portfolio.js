// 기본 초기화
var init=false;
var myCanvas;
var Context;


var ball_max = 6; // 공의 갯수
var balls = Array();
var ball_color = ["#fff9f0", "#f7efe8", "#fceff4", "#eaf8ee", "#f4eff6", "#f3f3f3"]; // 공 컬러




$(function() {
	$(window).ready(function() {
		$(".avia-post-nav").addClass("hide");

		
		var wid = $(window).width();
		var ht = $(window).height();

		$("#tft-sec01").height(ht);

		$('#tft-sec09 .mo_slide ul, #tft-sec11 .icon_slide ul').addClass("owl-carousel");
		$('#tft-sec09 .mo_slide ul.owl-carousel').owlCarousel({
			center: true,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			animateOut: 'slideOutDown',
			animateIn: 'flipInX',
			items:6,
			loop:true,
			margin:20,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:2
				},
				1023: {
					items:3
				},
				1440:{
					items:4
				},
				1680: {
					items:6
				}
			}

		});

		$('#tft-sec11 .icon_slide ul.owl-carousel').owlCarousel({
			center: true,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			animateOut: 'slideOutDown',
			animateIn: 'flipInX',
			items:5,
			loop:true,
			margin:20,
			responsive:{
				0:{
					items:2,
					margin:0
				},
				600:{
					items:3
				},
				1440:{
					items:5
				}
			}

		});

		Init();
		setInterval(Run, 50);



		/* circle 인터랙션 */
		var circles = $("div[class*='small_cir']");
		var circle_cnt = circles.length;

		for(i=1; i<=circle_cnt; i++) {
			var wid = Math.random()*wid/5 + 300;
			var $this = $(".small_cir0" + i);
			$this.css({"width":wid, "height":wid});

		}
		window.onscroll = function(e) {
			var scale = (this.scrollY - $("#tft-sec10").offset().top)/1000 + 0.3;

			if((this.oldScroll > this.scrollY) === true) {
				$("div[class*='small_cir']").css("transform", "scale(" + scale + ")");

			}else {
				$("div[class*='small_cir']").css("transform", "scale(" + scale + ")");
			}
			this.oldScroll = this.scrollY;
		}
		
	})	

	$(window).scroll(function() {
		var scroll_p = $(window).scrollTop();

		var p0 = $("#tft-sec02").offset().top - 100;
		var p1 = $("#tft-sec08").offset().top - 100;
		var p2 = $("#tft-sec09").offset().top - 100;

		if(scroll_p > p0) {
			$(".avia-post-nav").removeClass("hide");
			$(".menu-right, .menu-left").addClass("hide");
		}else {
			$(".avia-post-nav").addClass("hide");
			$(".menu-right, .menu-left").removeClass("hide");
		}

		if(scroll_p > p1) {
			$("#tft-sec08").addClass("on");
		}
		if(scroll_p > p2) {
			$("#tft-sec09").addClass("on");
		}
	})
})

// 초기화
function Init()
{
	if(init==false)
	{
		myCanvas=document.getElementById("MyCanvas");
		Context=myCanvas.getContext("2d");

		for(i=0; i<ball_max; i++)
		{
			var ball = new Object();
			ball.x=Math.random()*myCanvas.width;
			ball.y=Math.random()*myCanvas.height;
			ball.size= Math.random()*200+50;
			ball.xdir=Math.random()*16+3;
			ball.ydir=Math.random()*16+3;
			balls.push(ball);
		}
		init=true;
	}
}

function Run()
{
	for(i=0; i<ball_max; i++)
	{
		balls[i].x += balls[i].xdir;
		if(balls[i].x <= balls[i].size/2)
		{
			balls[i].x = balls[i].size/2;
			balls[i].xdir = -balls[i].xdir;
		}
		if(balls[i].x >= myCanvas.width-balls[i].size/2)
		{
			balls[i].x = myCanvas.width-balls[i].size/2;
			balls[i].xdir = -balls[i].xdir;
		}
		balls[i].y += balls[i].ydir;
		if(balls[i].y <= balls[i].size/2)
		{
			balls[i].y = balls[i].size/2;
			balls[i].ydir =- balls[i].ydir;
		}
		if(balls[i].y >= myCanvas.height-balls[i].size/2)
		{
			balls[i].y = myCanvas.height-balls[i].size/2;
			balls[i].ydir = -balls[i].ydir;
		}
	}
	onDraw();
}

// 공그리기
function onDraw()
{
	if(init==false)return;
	Context.strokeStyle="transparent";
	Context.lineWidth=1;
	Context.clearRect(0, 0, myCanvas.width, myCanvas.height);
	Context.strokeRect(0, 0, myCanvas.width-1, myCanvas.height-1);
	Context.fillStyle="transparent";

	for(i=0;i<ball_max;++i)
	{
		Context.fillStyle = ball_color[i]; // 공 컬러
		Context.beginPath();
		Context.arc(balls[i].x-balls[i].size/15, balls[i].y-balls[i].size/15, balls[i].size/2, 0, Math.PI * 2, true); // 공 그리기
		Context.fill();	// 공 색칠
		Context.closePath();
	}
	Context.filter = "opacity(70%)";
}
