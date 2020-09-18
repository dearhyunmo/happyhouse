$(document).ready(function() {	
		
		var root = "/happyhouse";
		
		$("#loginBtn").click(function() {
			var userid = $("#userid").val();
			var userpass = $("#userpass").val();
			var username = '';
			
			$.ajax({
				url: root + "/data/users.xml",
				type: "GET",
				cache: false,
				dataType: "xml",
				success: function(data) {
					var login = false;
					$(data).find('user').each(function() {
						if(userid == $(this).attr("id") && userpass == $(this).find("passwd").text()) {
							username = $(this).find("username").text();
							login = true;
							return false; // break;  * return true; continue
						}
					});
					
					if(login) {
						alert("로그인 성공!!");
						$("#userid").val("");
						$("#userpass").val("");
						$("#username").text(username+"님 ");
						$(".top_confirmon").css("display", "none");
						$(".top_confirmoff").css("display", "block");
					} else {
						alert("아이디 또는 비밀번호 확인!!!");
					}
				}
			});
		});
				
		$("#logoutBtn").click(function() {
			$("#username").text();
			$("#top_confirmoff").css("display", "none");
			$("#top_confirmon").css("display", "block");
		});
		
		
		var isChecked = false;
		$("#checkID").click(function(){
			var uid = $("#uid").val();
			$.ajax({
				url: root + "/data/users.xml",
				type: "POST",
				cache: false,
				dataType: "xml",
				success: function(data) {
					var duplicate = false;
					$(data).find('user').each(function() {
						if(uid == $(this).attr("id") || uid.length==0) {
							duplicate = true;
							return false; // break;  * return true; continue
						}
					});
					
					if(duplicate) {
						alert("사용 중인 아이디 입니다.");
					} else {
						alert("사용 가능한 아이디 입니다.");
						isChecked = true;
					}
				}
			});
		});
		
		$("#signUp").click(function() {
			var isValid = true;
			var uid = $("#uid").val();
			if(uid.length == 0 || uid == null){
				alert("아이디를 입력해주세요!!");
				isValid = false;
				return;
			}
			
			if(!isChecked){
				alert("아이디 중복확인을 해주세요!!");
				return;
			}
			
			var pwd = $("#pwd").val();
			if(pwd.length == 0 || pwd == null){
				alert("비밀번호를 입력해주세요!!");
				isValid = false;
				return;
			}
			var pwdcon = $("#pwdcon").val();
			if(pwdcon.length == 0 || pwdcon == null ||pwdcon != pwd){
				alert("비밀번호를 확인해주세요!!");
				isValid = false;
				return;
			}
			var uname = $("#uname").val();
			if(uname.length == 0 || uname == null){
				alert("이름을 입력해주세요!!");
				isValid = false;
				return;
			}
			var cellphone = $("#cellphone").val();
			if(cellphone.length == 0 || cellphone == null){
				alert("전화번호를 입력해주세요!!");
				isValid = false;
				return;
			}
			var email = $("#email").val();
			if(email.length == 0 || email == null){
				alert("이메일을 입력해주세요!!");
				isValid = false;
				return;
			}
			var addr = $("#addr").val();
			if(addr.length == 0 || addr == null){
				alert("주소를 입력해주세요!!");
				isValid = false;
				return;
			}
			
			if(isValid){
				alert("회원가입 성공!!");
			}
		});
	});