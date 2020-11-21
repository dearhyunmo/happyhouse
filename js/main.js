(function($) { 
	$(function(){
		var width = $(window).width();
		$(window).resize(function(){
		  if ($(window).width() != width && $(window).width()) {

			location.reload();
			width = $(window).width();
		  }
		});
		$("html, body").animate({ scrollTop: 0 }, "200"); 
	})

	//메인 슬라이드
	$(document).ready(function() {
	  $("#main-sec01 .flex_cell_inner").addClass("owl-carousel");
	  var owl = $('#main-sec01 .flex_cell_inner');
	  owl.owlCarousel({
		nav: false,
		loop: true,
		items:1,
		//autoplay:true,
		autoplayTimeout:8000,
		smartSpeed: 1500
	  })
	})
	
	$(function(){
		bg_event();
		$(window).scroll(function(e){
			var s = $(window).scrollTop();	
			if(s>50){
				bg_event();
			}
		})
		function bg_event(){
			$("#main-sec03").each(function(){
				var w_t = $(window).scrollTop() + $(window).height();
				var i_t = $(this).offset().top;
				var w_h = $(window).height()/2;
				var hei = $(this).height() + $("#main-sec04").height();
			
				if(w_t > i_t + w_h && w_t < i_t+hei){
					$("#main").addClass("bg-blue");
				}else{
					$("#main").removeClass("bg-blue");
				}
			})
		}
		
	})

$(function(){
	$("input[type=file]").each(function(){
		var file_wrap = $(this).parent(".wpcf7-form-control-wrap"); 
		var file_id = $(this).attr("name");
		var file_width = $(".form-wr").width();
		$(this).attr("id",file_id);
		var file_label = '<label for='+file_id+' class="contact_label"><img src="/img/contact-icon03.png"></label>'; 
		var file_input = '<input type="text" class="upload_name" disabled="disabled" value="FILE">';
		file_wrap.append(file_label);
		file_wrap.append(file_input);
	})
		
	$("input[type=file]").on("change",function(){
		if(window.FileReader){  
		  var filename = $(this)[0].files[0].name;
		} 
		else { 
		  var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		$(this).parent(".wpcf7-form-control-wrap").find(".upload_name").val(filename);
	})	
		

})
$(document).ready(function(){
	$(".wpcf7-form-control-wrap select > option").eq(0).text("BUDGET*");
	$(".wpcf7-form-control-wrap select").parent(".wpcf7-form-control-wrap").addClass("sele-wr");
	$('select').each(function () {

		var $this = $(this),
			numberOfOptions = $(this).children('option').length;

		$this.addClass('s-hidden');

		$this.wrap('<div class="select"></div>');

		$this.after('<div class="styledSelect"></div>');

		var $styledSelect = $this.next('div.styledSelect');

		$styledSelect.text($this.children('option').eq(0).text());

		var $list = $('<ul />', {
			'class': 'options'
		}).insertAfter($styledSelect);

		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		var $listItems = $list.children('li');

		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('div.styledSelect.active').each(function () {
				$(this).removeClass('active').next('ul.options').hide();
				
			});
			$(this).toggleClass('active').next('ul.options').toggle();
			$(".contact_main li.bud-over").css("overflow","visible");
		});

		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
			$(".contact_main li.bud-over").css("overflow","hidden");
		});

		$(document).click(function () {
			$styledSelect.removeClass('active');
			$list.hide();
			
		});

	});
})

$(window).ready(function(){

	$(document).on("click",".fix-mail",function(){
		$(".side_con, .black-bg").addClass("active");
	})
	

	$(document).on("click",".ml-btn",function(){
		var btn = $(".menu-full").css("display");
		if(btn == "none"){
			$(".menu-left").addClass("active");
			setTimeout(function(){
				$(".menu-full").addClass("on");
			},500)
		}else{
			$(".menu-full").removeClass("on");
			setTimeout(function(){
				$(".menu-left").removeClass("active");
			},500)
			
		}
		$(".menu-fulr").removeClass("on");
		setTimeout(function(){
			$(".menu-right").removeClass("active");
		},500)
	})
	$(document).on("click",".clo-btn",function(){
		$(".menu-full").removeClass("on");
		setTimeout(function(){
			$(".menu-left").removeClass("active");
		},500);
		$(".side_con, .black-bg").removeClass("active");
	})
})

$(window).ready(function(){
	$(document).on("click",".mr-btn",function(){
		var btn = $(".menu-fulr").css("display");
		if(btn == "none"){
			$(".menu-right").addClass("active");
			setTimeout(function(){
				$(".menu-fulr").addClass("on");
			},500)
		}else{
			$(".menu-fulr").removeClass("on");
			setTimeout(function(){
				$(".menu-right").removeClass("active");
			},500)
			
		}
		$(".menu-full").removeClass("on");
		setTimeout(function(){
			$(".menu-left").removeClass("active");
		},500)
	})
	$(document).on("click",".rig-close",function(){
		$(".menu-fulr").removeClass("on");
		setTimeout(function(){
			$(".menu-right").removeClass("active");
		},500)
	})
})

$(function(){
	$(".menu-ul > li.m-li").each(function(){
		var $this = $(this);
		$this.mouseenter(function(){
			var ind = $(this).index();
			$(".text-ulwr > p.gnb-stit").removeClass("active");
			$(".text-ulwr > p.gnb-stit").eq(ind).addClass("active");
		})
	})
})

$(function(){
	$(".alert_").each(function(){
		$(this).click(function(){
			alert("준비중 입니다.");
		});
	})
});

$(function(){
	$(".menu-ul > li.m-link").each(function(){
		var $this = $(this);
		var href = $this.find("a").attr("href");
		$this.find("a").removeAttr("href");
		$this.click(function(){
			$(".menu-full").addClass("locago");
			setTimeout(function(){
				location.href = href;
			},1000)
		})
	})
})

$(document).ready(function() {
	heiSize();
	
	$(window).resize(function(){
		heiSize();
	})
	function heiSize(){
		$(".menu-rigwr").each(function(){
			var hei = $(window).height()*0.8;
			$(".rig-dv").each(function(){
				$(this).css("height",hei/2);
				$(this).find(".rig-bgimg").css("height",hei/2);
			})
		})
	}
});

$(document).ready(function() {
	var owl = $('.menu-rigwr');
	owl.owlCarousel({
		items:1,
		nav:true,
		smartSpeed: 1500,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		mouseDrag:false
	})
	
})

$(window).ready(function(){
	$("#case-sec01 .av-magazine-entry").each(function(){
		var href = $(this).find(".av-magazine-content").text();
		$(this).find("a").attr("href",href);
		$(this).find("a").attr("target","_blank");
		
	})
})
$(window).ready(function(){


	$(".single-portfolio .avia-image-container.av-rotateIn").each(function(){
		var img = $(this).find("img").attr("src");
		$(this).css("background-image","url("+img+")");
	})
	
})

/* blog 글줄임 */
$(function(){
	$("#blog-sec03 .slide-meta").each(function(){
		var day = $(this).find(".slide-meta-time").text();
		$(this).find(".slide-meta-time").html(day.substr(0,4)+"."+day.substr(5,3)+"."+day.substr(9,3));
				
	});

	$("#blog-sec03 .slide-entry").each(function(){
		var txt = $(this).find(".slide-entry-excerpt").text();
		$(this).find(".slide-entry-excerpt").html(txt.substr(0,115)+"...");
				
	});

	$("#blog-sec04 .slide-meta").each(function(){
		var day = $(this).find(".slide-meta-time").text();
		$(this).find(".slide-meta-time").html(day.substr(0,4)+"."+day.substr(5,3)+"."+day.substr(9,3));
				
	});

	$("#blog-sec04 .slide-entry").each(function(){
		var txt = $(this).find(".slide-entry-excerpt").text();
		$(this).find(".slide-entry-excerpt").html(txt.substr(0,115)+"...");
				
	});
})

$(function(){
	var path = location.pathname;
	if(path == "/contact-us/"){
		$(".fix-mail, .side_con").remove();
	}
	if(path.indexOf("mugazine") != -1){
		$(".single-post .menu-right, .single-post .menu-left").addClass("hide");
	}
})

$(window).load(function(){
				
	var windowWidth = $(window).width();
	if(windowWidth < 680){
		$(".m-li").each(function(){
			$(this).click(function(){
				$(this).find(".mobile-ul").show();
			});
			$(".mobile-ul").mouseleave(function(){
				$(this).hide();
			});
		});
	}
	
})

} ) ( jQuery);