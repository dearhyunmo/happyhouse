$(function() {
	var path = location.pathname;
	//console.log(path)
	if(path == "/highlight/"){
		$(".page-id-692 #main").addClass("fullpage");
		$(".fullpage > p").remove();
		$(".fullpage > .av-layout-grid-container").addClass("section");
		if(path != '/cases/tft/') {
			$(".fullpage > .av-layout-grid-container").each(function(){
				var back = $(this).find(".high-img img").attr("src");
				$(this).css("background-image","url("+back+")")
			});
		}
		$(".high-txtul > li").each(function(){
			var href = $(this).find(".href-link").text();
			$(this).click(function(){

				if(href.indexOf('http') > -1) {
					window.open(href);
				}else {
					location.href=href;
				}
			})
		})
		setTimeout(function(){
			var hei = $(".high-txtul > li").height()/2;
		
			$('.fullpage').fullpage({
				css3: false,
				verticalCentered: false,
				afterLoad: function(anchorLink, index){
					//console.log(index);
					if(index == 1){
						$("#vid_play").trigger("play");
						$("html").removeClass("white");
					}else{
						$("html").addClass("white");
					}
					if(index == 2){
						$("#vid_play").trigger("play");
					}


					//$(".high-txtul > li").eq(index-2).addClass("active")
				},
				onLeave: function(index,nextIndex,direction){	

					$(".high-txtul").css("transform","translateY(-"+(nextIndex-1)*hei+"px)");
					if(nextIndex == "1"){
						$(".high-txtul > li").removeClass("active")
						$(".high-txtul > li").eq(0).addClass("active");
						$(".fullpage").removeClass("high-on")
						$("#header").show();
					}else{
						$(".high-txtul > li").removeClass("active")
						$(".high-txtul > li").eq(nextIndex-2).addClass("active");
						$(".fullpage").addClass("high-on");
						$("#header").hide();
					}
				
					
				}
			});
		},200)
	}
});