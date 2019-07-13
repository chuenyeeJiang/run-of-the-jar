function cycle(){
$(function() {
	// 初始化轮播
	$("#div_log2Back").carousel('cycle');
});
}
function resize() {
	// 初始化轮播
	if (window.innerHeight > 800) {
		// 800+window.innerHeight/800
		$("#div_log2Back img").css('width', 1920 * window.innerHeight / 800);
		$("#div_log2Back img").css('margin-top',
				-100 * window.innerHeight / 800);
	}
	/* $("#carousel-inner img").css('hight','130%'); */
};

function readUsername(){
	// 初始化用户名
	$.ajax({
		url : "readUsername.do",
		success : function(result) {
			if (result != null && result != "" && result != "null") {
			$(".input-remenberUsername").val(result);
			$(".checkbox-remenberUsername").attr("checked", true);
				// 自动登陆
		/*		$.ajax({
					url : "readPassword.do",
					success : function(result) {
						$(".input-autoLogin").val(result);
						if (result != null && result != "") {
							$(".checkbox-autoLog").attr("checked", true);
							if ("${noLog}" != 1) {
								$(".form-login").submit();
							}
						}
					}
				});*/
			}
		}
	});
	// 已登陆
//	$.ajax({
//		url : "hasLogin.do",
//		success : function(result) {
//			if (result != 1) {
//				alert("账号已经成功登录!");
//				document.write(result);
//			}
//		}
//	});

}

// 复选框处理（自动登陆等于拥有记住用户名功能 ）
/*function checkbox_checked(){
$(document).ready(
		function() {
			$(".checkbox-remenberUsername").click(function() {
				if (!$(this).is(":checked") && $("#autoLog").is(":checked")) {
					$(".checkbox-autoLog").removeProp("checked");
				} else if ($(".checkbox-autoLog").is(":checked")) {
					$(".checkbox-autoLog").removeProp("checked");
					$(this).removeProp("checked")
				}
			});

			$(".checkbox-autoLog").click(
					function() {
						if ($(this).is(":checked")
								&& !$(".checkbox-remenberUsername").is(
										":checked")) {
							$(".checkbox-remenberUsername").prop("checked",
									true);
						}
					});
		});
}*/

// 登陆聚焦
function autoFocus(){
var focusIndex = null;
$(document).ready(function() {
	var autoComonent = $(".form-autoFocus .input-autoFocus");

	/*
	 * $(autoComonent).each(function(index){ alert($(this).attr("name")); });
	 */
	function PointerHeaderAddressByOneListener(){
		console.log("监听");
		document.addEventListener("keyup",firstFocus
			,true);
	}
	PointerHeaderAddressByOneListener();
	autoComonent.blur(function(){
		PointerHeaderAddressByOneListener();
	});
	
	

	
	function firstFocus(event){
		if (event.which == 13) {
			console.log("跳行");
		$(autoComonent)[0].focus();
		console.log("移除");
		document.removeEventListener("keyup",firstFocus,true);
		}
	}
	
	
	$(autoComonent).keyup(function(event) {
		var key = event.which;
		if (key == 13) {
			focusIndex = $(this).attr("focus-index");
			if (focusIndex == null) {
				return;
			}
			if ($(this).hasClass("input-submit")) {
				$(this).onclick();
			}
			// 下一位置
			focusIndex = eval(focusIndex) + 1;
			$(autoComonent)[focusIndex].focus();
		}
	});
});
}

//  提交
function submitformautoFocus() {
	$(".form-autoFocus").submit();
}


function ChangeValidatecode() {
	var image = new Image();
	image.src = "aJax_validatecode.do?date=" + new Date();
	image.className = "img-validatecode";
	$(".img-validatecode").replaceWith(image);
}

// 数目增减
function numIncreaseOrReduce(){
var NumBtnId = null;
var NumId = null;
$(document).ready(function() {
	$(".btn-numReduce").click(function() {
		// 获取组件标志
		if ($(this).attr("id") == null)
			NumBtnId = "btn-num";

		NumId = "#" + NumBtnId.substr(4, NumBtnId.length);

		if (eval($(NumId).text()) > 1)
			$(NumId).text(eval($(NumId).text()) - 1);
	});
});

$(document).ready(function() {

	$(".btn-numIncrease").click(function() {
		// 获取组件标志
		NumBtnId = $(this).attr("id");
		if (NumBtnId == null)
			NumBtnId = "btn-num";

		NumId = "#" + NumBtnId.substr(4, NumBtnId.length);
		$(NumId).text(eval($(NumId).text()) + 1);
	});
});
}

//外部验证
function  loginCl()
{
       var usernameCl=/^[\u4E00-\u9FA5a-zA-Z]*$/;
       //用户名不合法
       if(!usernameCl.test($("#username").val())){
       $("#log_font_msg").text("用户名不合法,只支持由中文或字母组成!");
       return false;
       }
       var passwordCl=/^[a-zA-Z0-9\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*||||\-|\_|\+|\=|\||\\||\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]{6,14}$/;
       if(!passwordCl.test($("#password").val())){
       $("#log_font_msg").text("密码不合法!");
       return false;
       }
}
function  regisCl()
{
	alert("regisCl");
       var usernameCl=/^[\u4E00-\u9FA5a-zA-Z]*$/;
       //用户名不合法
       if(!usernameCl.test($("#regisUsername").val())){
       $("#regis_font_msg").text("用户名不合法,只支持由中文或字母组成!");
       return false;
       }
       var passwordCl=/^[a-zA-Z0-9\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*||||\-|\_|\+|\=|\||\\||\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]{6,14}$/;
       if(!passwordCl.test($("#regisPassword").val())){
       $("#regis_font_msg").text("密码不合法!");
       return false;
       }
       if($("#regisPassword").val()!=$("#confirmPassword").val()){
       $("#regis_font_msg").text("密码不一致!");
       return false;
       }
}

