$('#main').append('<div class="imsiDiv" style="display:none;"></div>');

function getAjaxData(url, productNm)
{

	$.ajax({
		type : "GET", //전송방식을 지정한다 (POST,GET)
		url : url,//호출 URL을 설정한다. GET방식일경우 뒤에 파라티터를 붙여서 사용해도된다.
		dataType : "text",//호출한 페이지의 형식이다. xml,json,html,text등의 여러 방식을 사용할 수 있다.
		async : false,
		error : function() 
		{
			alert("통신 중 오류가 발생하였습니다.");
		},
		success : function(data) 
		{
			var refine = $(".imsiDiv").html(data).find('#main');
			$("#main").html(refine);
			$("#main").find('#main').unwrap();
			$("#main").css("opacity", "1");
			

/*
			$(".pde-mbtn").click(function(){
				$(".pde-munu").show();
				$(".pde-bg").show();
			})
			$(".pde-cl").click(function(){
				$(".pde-munu").hide();
				$(".pde-bg").hide();
			})
			$(".owl-item").show();
			$("#"+productNm).parents(".owl-item").hide();
*/
			history.pushState(null, null, url);
		}
	});
}