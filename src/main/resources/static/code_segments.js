//  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//        _
//       (_)____
//      / / ___/
//     / (__  )
//  __/ /____/
// /___/
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// + global
var yyyy;
var dd;
var MM;
var HH;
var mm;
var ss;
var yyyy_MM_dd_HH_mm_ss;

// + senario
$(document).ready(function () {// window.onload = function(){
	setInterval("get_yyyy_MM_dd_HH_mm_ss()", 1000);
	// intro_slow();
	intro_fast();
	rainbow_color(120);
	// if (get_HH() == 17) {
	// 	red_speaker_2022_08_30_23_09_48('이차장에게 보고하셔야 합니다.', 350);
	// }

	$('.mkr_singleline1').attr("type", "text");
	$('.mkr_multilines4').attr("type", "button");



	$('.xmp').click(function () {
		$('.xmp').toggle('fast');
	});
});
// + senario + 4초 뒤에 naver로 이동
// $(document).ready(function() {
// setInterval("calc_time()", 1000);
// });
// var sec = 0;
// function calc_time(){
// sec += 1;
// if( sec >= 4 ) {
// window.location.href = "http://www.naver.com";
// return;
// }
// }

// + intro
function intro_slow() {
	setTimeout(function () { $('body').css({ "background-color": "black" }); }, 0);
	setTimeout(function () { $('.section_old').children().hide() }, 0);
	setTimeout(function () { $(".intro_left_bar").hide(); }, 0);
	setTimeout(function () { $(".intro_right_bar").hide(); }, 0);
	setTimeout(function () { $(".intro_text").hide(); }, 0);
	setTimeout(function () { $(".intro_img").fadeIn(900); }, 1000);
	setTimeout(function () { $(".intro_left_bar").fadeIn(1200); }, 2000);
	setTimeout(function () { $(".intro_right_bar").fadeIn(1200); }, 3000);
	setTimeout(function () { $(".intro_text").fadeIn(1200); }, 4000);
	setTimeout(function () { $(".intro_text, .intro_right_bar, .intro_left_bar, .intro_img").fadeOut(1500, 'linear'); }, 6000);
	setTimeout(function () { $('.section_old').children().fadeIn(1200) }, 7000);
}
function intro_fast() {
	setTimeout(function () { $('body').css({ "background-color": "black" }); }, 0);
	setTimeout(function () { $('.section_old').children().hide() }, 0);
	setTimeout(function () { $(".intro_left_bar").hide(); }, 0);
	setTimeout(function () { $(".intro_right_bar").hide(); }, 0);
	setTimeout(function () { $(".intro_text").hide(); }, 0);
	setTimeout(function () { $(".intro_text, .intro_right_bar, .intro_left_bar, .intro_img").fadeOut(0); }, 0);
	setTimeout(function () { $('.section_old').children().fadeIn(800) }, 0);
}


// + _yyyy_MM_dd_HH_mm_ss
function get_yyyy_MM_dd_HH_mm_ss() {
	function modifyNumber(time) {
		if (parseInt(time) < 10) {
			return "0" + time;
		}
		else
			return time;
	}
	var date_info = new Date();
	yyyy = date_info.getFullYear();
	MM = modifyNumber(date_info.getMonth() + 1);
	dd = modifyNumber(date_info.getDate());
	HH = modifyNumber(date_info.getHours());
	mm = modifyNumber(date_info.getMinutes());
	ss = modifyNumber(date_info.getSeconds());
	yyyy_MM_dd_HH_mm_ss = `_${yyyy}_${MM}_${dd}_${HH}_${mm}_${ss}`;
}






//+ btns_copy
//분명히 부모를 클릭했는데  자식이 선택이 되는 것을 감지할 수 있는것 같습디다
//이것은 아마 event 가 자식에게 progation 되기 때문인것 같습니다.
//이것은 아마 자식 버튼들에게 class 부여를 하지 않아도 되도록 하는 데 사용될 수 있을 것 같습니다.
//이를 유용하게 사용할 수 있을 것 같습니다.
// $(".btns_copy").on("click", function () {
// 	// var target=$(event.currentTarget);
// 	var target = $(event.target);
// 	window.navigator.clipboard.writeText(target.val()).then(() => {
// 		$(".msg_copied").fadeIn(300).delay(20);
// 		$(".msg_copied").fadeOut(300);
// 		$(".btn_value_empty").val(target.val());
// 	});
// });






// + click trigger paste + 클립보드 API
// .btn_value_empty를 클릭하면 clipboard에 저장된 text를 .btn_value_empty에 붙여넣기 해주는 기능입니다.
// var target = ".btn_value_empty";
// $(target).on("click", function () {
// 	navigator.clipboard.readText().then((clipText) => {
// 		document.querySelector(target).value = clipText;
// 	});
// 	// schedule1 = setInterval("update_mirror()",0);
// 	update_mirror();
// });






//+ text_to_clipboard
// pre tag의 value을  event.target.value 받아온다. 그리고 clipboard API를 이용해서 값을 클립보드에 저장한다.
$(".text_to_clipboard").on("click", function () {
	// alert(event.target.value);
	// alert(event.target.innerHTML);
	window.navigator.clipboard.writeText(event.target.value).then(() => {
		$(".msg_copied").fadeIn(300).delay(20);
		$(".msg_copied").fadeOut(300);
	});
});




function rainbow_color(speed) {
	setInterval(function () {
		$(".style_color_2022_08_27_09_31_26").css({
			"color": "rgb(42,42,42)",
			"background-color": "transparent",
			'text-indent': '0px',
			"width": "500px",
		});
	}, speed);
	setInterval(function () {
		$(".style_color_2022_08_27_09_31_26").css({
			"color": "orange",
			"background-color": "transparent",
			'text-indent': '0px',
			"width": "500px",

		});

	}, speed * 2);
	setInterval(function () {
		$(".style_color_2022_08_27_09_31_26").css({
			"color": "yellow",
			"background-color": "transparent",
			'text-indent': '0px',
			"width": "500px",

		});

	}, speed * 3);
	setInterval(function () {
		$(".style_color_2022_08_27_09_31_26").css({
			"color": "green",
			"background-color": "transparent",
			'text-indent': '0px',
			"width": "500px",

		});

	}, speed * 4);
	setInterval(function () {
		$(".style_color_2022_08_27_09_31_26").css({
			"color": "blue",
			"background-color": "transparent",
			'text-indent': '0px',
			"width": "500px",

		});

	}, speed * 5);
	setInterval(function () {
		$(".style_color_2022_08_27_09_31_26").css({
			"color": "purple",
			"background-color": "transparent",
			'text-indent': '0px',
			"width": "500px",

		});

	}, speed * 6);

}


/* write_text_as_text_file */function write_text_as_text_file(fileName, content) {
/* write_text_as_text_file */	var blob = new Blob([content], { type: 'text/plain' });
/* write_text_as_text_file */	objURL = window.URL.createObjectURL(blob);
/* write_text_as_text_file */	// 이전에 생성된 메모리 해제
/* write_text_as_text_file */	if (window.__Xr_objURL_forCreatingFile__) {
/* write_text_as_text_file */		window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
		/* write_text_as_text_file */
	}
/* write_text_as_text_file */	window.__Xr_objURL_forCreatingFile__ = objURL;
/* write_text_as_text_file */	var a = document.createElement('a');
/* write_text_as_text_file */	a.download = fileName;
/* write_text_as_text_file */	a.href = objURL;
/* write_text_as_text_file */	a.click();
	/* write_text_as_text_file */
}




//  onlyMirror
$(".container").on("click", function () {
	// alert(event.target.value);
	$(".onlyMirrorSegment2").val(event.target.value.trim())
});
$(document).ready(function () {
	setInterval(function () {
		$(".onlyJs1").attr("value", $(".onlyMirrorSegment2").val() + yyyy_MM_dd_HH_mm_ss);
	}, 1000);
});






/* 뒤로가기 */
$(".btn_to_go_back").on("click", function () {
	var x = window.open("sky.html", "HTML 개요", "menubar = yes,location = yes,resizable = yes,scrollbars = yes,status = yes");
});

/* 닫기 */
$(".btn_to_close").on("click", function () {
	var x = window.close();
});




/* red green purple msg box */$(".red_msg").hover(function () {
/* red green purple msg box */		$(".red_msg").fadeOut(900);
	/* red green purple msg box */
});
/* red green purple msg box */$(".green_msg").hover(function () {
/* red green purple msg box */		$(".green_msg").fadeOut(900);
	/* red green purple msg box */
});
/* red green purple msg box */$(".purple_msg").hover(function () {
/* red green purple msg box */		$(".purple_msg").fadeOut(900);
	/* red green purple msg box */
});



function red_speaker_2022_08_30_23_09_48(msg, fadeIn_time) {
	var target1 = '.red_msg'
	var target2 = '.red_msg_line_first'
	$(target1).css({
		'opacity': '0.9',
		"background-color": "red",
		"position": "fixed",
		"color": "black",
		"top": "35%",
		"left": "30%",
		"width": "50%",
		"height": "20%",
		"font-weight": "100",
	});
	$(target2).css({
		"color": "white",
		// "top": "35%",
		// "left": "30%",
		// "width": "50%",
		// "height": "20%",
		// "font-weight": "100",
	});
	$(target2).text(msg);
	$(target1).hide().delay(2000).show(fadeIn_time);
	$(target2).hide().delay(2000).show(fadeIn_time);
}



function green_speaker_2022_08_30_23_09_48(msg, fadeIn_time) {
	var target = $(".green_msg");
	target.css({
		'opacity': '0.7',
		"background-color": "green",
		"position": "fixed",
		"color": "white",
		"top": "35%",
		"left": "30%",
		"width": "50%",
		"height": "20%",
		"font-weight": "100",
	});
	target.text(msg);
	target.hide().delay(2000).fadeIn(fadeIn_time);
}


function purple_speaker_2022_08_30_23_09_48(msg, fadeIn_time) {
	var target = $(".purple_msg");
	target.css({
		'opacity': '0.6',
		"background-color": "purple",
		"position": "fixed",
		"color": "white",
		"top": "35%",
		"left": "30%",
		"width": "50%",
		"height": "20%",
		"font-weight": "100",
	});
	target.text(msg);
	// target.show(1000);
	// target.show(1000);
	target.hide().delay(2000).fadeIn(fadeIn_time);
}




// function dark_mode_or_light_mode_controller(){
// 	if(document.querySelector('body').style.backgroundColor == 'black'){
// 		setLightMode();
// 	} else {
// 		setDarkMode();
// 	}
// }
// function setDarkMode() {
// 	document.querySelector('body').style.backgroundColor = "black";
// 	document.querySelector('body').style.color = 'white';
// }
// function setLightMode() {
// 	document.querySelector('body').style.backgroundColor = "white";
// 	document.querySelector('body').style.color = 'black';
// }
// function page_data_display_controller() {
// 	document.querySelector('.page_data_display').innerHTML = "";
// 	document.querySelector('.page_data_display').innerHTML += "page_url";
// }
// // time_real_time
// function setClock1(){
// 	var date_info = new Date();
// 	var HH = modifyNumber(date_info.getHours());
// 	var mm = modifyNumber(date_info.getMinutes());
// 	var ss = modifyNumber(date_info.getSeconds());
// 	var yyyy = date_info.getFullYear();
// 	var MM = modifyNumber(date_info.getMonth()+1);
// 	var dd = date_info.getDate();
// 	document.querySelector(".time_real_time").innerHTML = yyyy + " " + MM + " " + dd + " " + HH + " " + mm + " " + ss;;
// }
//variable_generater
// //class_generater
// function function_generated_at_2022_08_22_18_56_56(){
// 	var date_info = new Date();
// 	var HH = modifyNumber(date_info.getHours());
// 	var mm = modifyNumber(date_info.getMinutes());
// 	var ss = modifyNumber(date_info.getSeconds());
// 	var yyyy = date_info.getFullYear();
// 	var MM = modifyNumber(date_info.getMonth()+1); ////for month_index
// 	var dd = date_info.getDate();
// 	document.querySelector(".class_generated_at_2022_08_22_18_56_51").value = "variable_generated_at_"+ yyyy + "_" + MM + "_" + dd + "_" + HH + "_" + mm + "_" + ss;
// 	document.querySelector(".class_generated_at_2022_08_22_19_00_02").value = "class_generated_at_"+ yyyy + "_" + MM + "_" + dd + "_" + HH + "_" + mm + "_" + ss;
// 	document.querySelector(".class_generated_at_2022_08_22_19_00_08").value = "function_generated_at_"+ yyyy + "_" + MM + "_" + dd + "_" + HH + "_" + mm + "_" + ss;
// 	document.querySelector(".class_generated_at_2022_08_23_14_33_21").value = "function function_generated_at_"+ yyyy + "_" + MM + "_" + dd + "_" + HH + "_" + mm + "_" + ss;
// 	document.querySelector(".class_generated_at_2022_08_23_14_33_21").value += "()";
// 	document.querySelector(".class_generated_at_2022_08_23_14_33_21").value += "{";
// 	document.querySelector(".class_generated_at_2022_08_23_14_33_21").value += "___________";
// 	// document.querySelector(".class_generated_at_2022_08_23_14_33_21").value += "\n";
// 	document.querySelector(".class_generated_at_2022_08_23_14_33_21").value += "}";
// }
// function ___________(){
// 	var textArea = document.createElement('textarea');
// 	document.body.appendChild(textArea);
// 	textArea.value = document.querySelector(".class_generated_at_2022_08_22_18_56_51").value;
// 	textArea.select();
// 	document.execCommand('copy');
// 	document.body.removeChild(textArea);
// }
// function ___________(){
// 	var textArea = document.createElement('textarea');
// 	document.body.appendChild(textArea);
// 	textArea.value = document.querySelector(".class_generated_at_2022_08_22_19_00_02").value;
// 	textArea.select();
// 	document.execCommand('copy');
// 	document.body.removeChild(textArea);
// }
// function ___________(){
// 	var textArea = document.createElement('textarea');
// 	document.body.appendChild(textArea);
// 	textArea.value = document.querySelector(".class_generated_at_2022_08_22_19_00_08").value;
// 	textArea.select();
// 	document.execCommand('copy');
// 	document.body.removeChild(textArea);
// }
// // function setInputedValue(){
// // 	var date_info = new Date();
// // 	var HH = modifyNumber(date_info.getHours());
// // 	var mm = modifyNumber(date_info.getMinutes());
// // 	var ss = modifyNumber(date_info.getSeconds());
// // 	var yyyy = date_info.getFullYear();
// // 	var MM = modifyNumber(date_info.getMonth()+1); ////for month_index
// // 	var dd = date_info.getDate();
// // 	document.querySelector(".class_generated_at_2022_08_22_02_02_00").innerHTML=document.querySelector(".class_generated_at_2022_08_22_01_59_50").value+"_"+yyyy + "_" + MM + "_" + dd + "_" + HH + "_" + mm + "_" + ss;
// // }
// function ___________(){
// 	// div 내부 텍스트 취득
// 	// <!-- var val_of_div = document.getElementById("class_generated_at_2022_08_22_17_42_17").value; -->
// 	// <!-- var val_of_div = this.value; -->
// 	var val_of_div = document.querySelector(".class_generated_at_2022_08_22_18_47_05").value;
// 	// <!-- var val_of_div = document.getElementById("___________").innerText; -->
// 	// <!-- var val_of_div = document.getElementById("___________").value; -->
// 	// textarea 생성
// 	var textArea = document.createElement('textarea');
// 	// textarea 추가
// 	document.body.appendChild(textArea);
// 	// textara의 value값으로 div내부 텍스트값 설정
// 	textArea.value = val_of_div;
// 	// textarea 선택 및 복사
// 	textArea.select();
// 	document.execCommand('copy');
// 	// textarea 제거
// 	document.body.removeChild(textArea);
// }
// function ___________(){
// 	// div 내부 텍스트 취득
// 	// <!-- var val_of_div = document.getElementById("class_generated_at_2022_08_22_17_42_17").value; -->
// 	// <!-- var val_of_div = this.value; -->
// 	var val_of_div = document.querySelector(".class_generated_at_2022_08_22_18_50_03").value;
// 	// <!-- var val_of_div = document.getElementById("___________").innerText; -->
// 	// <!-- var val_of_div = document.getElementById("___________").value; -->
// 	// textarea 생성
// 	var textArea = document.createElement('textarea');
// 	// textarea 추가
// 	document.body.appendChild(textArea);
// 	// textara의 value값으로 div내부 텍스트값 설정
// 	textArea.value = val_of_div;
// 	// textarea 선택 및 복사
// 	textArea.select();
// 	document.execCommand('copy');
// 	// textarea 제거
// 	document.body.removeChild(textArea);
// }
// function function_generated_at_2022_08_22_20_30_05(){
// 	// div 내부 텍스트 취득
// 	// <!-- var val_of_div = document.getElementById("class_generated_at_2022_08_22_17_42_17").value; -->
// 	// <!-- var val_of_div = this.value; -->
// 	var val_of_div = document.querySelector(".class_generated_at_2022_08_22_18_50_03").value;
// 	// <!-- var val_of_div = document.getElementById("___________").innerText; -->
// 	// <!-- var val_of_div = document.getElementById("___________").value; -->
// 	// textarea 생성
// 	var textArea = document.createElement('textarea');
// 	// textarea 추가
// 	document.body.appendChild(textArea);
// 	// textara의 value값으로 div내부 텍스트값 설정
// 	textArea.value = val_of_div;
// 	// textarea 선택 및 복사
// 	textArea.select();
// 	document.execCommand('copy');
// 	// textarea 제거
// 	document.body.removeChild(textArea);
// }
// function ___________(){
// 	// div 내부 텍스트 취득
// 	// <!-- var val_of_div = document.getElementById("class_generated_at_2022_08_22_17_42_17").value; -->
// 	// <!-- var val_of_div = this.value; -->
// 	var val_of_div = document.querySelector(".class_generated_at_2022_08_22_20_28_47").value;
// 	// <!-- var val_of_div = document.getElementById("___________").innerText; -->
// 	// <!-- var val_of_div = document.getElementById("___________").value; -->
// 	// textarea 생성
// 	var textArea = document.createElement('textarea');
// 	// textarea 추가
// 	document.body.appendChild(textArea);
// 	// textara의 value값으로 div내부 텍스트값 설정
// 	textArea.value = val_of_div;
// 	// textarea 선택 및 복사
// 	textArea.select();
// 	document.execCommand('copy');
// 	// textarea 제거
// 	document.body.removeChild(textArea);
// }
// function ___________(){
// 	// div 내부 텍스트 취득
// 	// <!-- var val_of_div = document.getElementById("class_generated_at_2022_08_22_17_42_17").value; -->
// 	// <!-- var val_of_div = this.value; -->
// 	var val_of_div = document.querySelector(".class_generated_at_2022_08_22_20_28_56").value;
// 	// <!-- var val_of_div = document.getElementById("___________").innerText; -->
// 	// <!-- var val_of_div = document.getElementById("___________").value; -->
// 	// textarea 생성
// 	var textArea = document.createElement('textarea');
// 	// textarea 추가
// 	document.body.appendChild(textArea);
// 	// textara의 value값으로 div내부 텍스트값 설정
// 	textArea.value = val_of_div;
// 	// textarea 선택 및 복사
// 	textArea.select();
// 	document.execCommand('copy');
// 	// textarea 제거
// 	document.body.removeChild(textArea);
// }
// function ___________(){
// 	// div 내부 텍스트 취득
// 	// <!-- var val_of_div = document.getElementById("class_generated_at_2022_08_22_17_42_17").value; -->
// 	// <!-- var val_of_div = this.value; -->
// 	var val_of_div = document.querySelector(".class_generated_at_2022_08_22_20_29_02").value;
// 	// <!-- var val_of_div = document.getElementById("___________").innerText; -->
// 	// <!-- var val_of_div = document.getElementById("___________").value; -->
// 	// textarea 생성
// 	var textArea = document.createElement('textarea');
// 	// textarea 추가
// 	document.body.appendChild(textArea);
// 	// textara의 value값으로 div내부 텍스트값 설정
// 	textArea.value = val_of_div;
// 	// textarea 선택 및 복사
// 	textArea.select();
// 	document.execCommand('copy');
// 	// textarea 제거
// 	document.body.removeChild(textArea);
// }
// function if_sniffet_2022_08_26_10_40_15(){
// 	var val_of_div = document.querySelector(".if_sniffet_2022_08_26_10_40_11").value;
// 	var textArea = document.createElement('textarea');
// 	document.body.appendChild(textArea);
// 	textArea.value = val_of_div;
// 	textArea.select();
// 	document.execCommand('copy');
// 	document.body.removeChild(textArea);
// }
// function massage_controller(){

// 	// document.querySelector(".class_generated_at_2022_08_22_21_12_38").attr("value","");

// }
// function function_generated_at_2022_08_23_14_36_14(){
// 	document.execCommand('copy');
// }
// function ___________(){
// 	var textArea = document.createElement('textarea');
// 	document.body.appendChild(textArea);
// 	textArea.value = document.querySelector(".class_generated_at_2022_08_26_11_06_35").value;
// 	document.body.removeChild(textArea);
// }

// //null
// var target_2022_08_25_17_44_08=$(".output_2022_08_25_17_50_10");
// function null_2022_08_25_17_54_44(){
// 	var value_getted=$(".input_2022_08_25_17_50_03").val();
// 	target_2022_08_25_17_44_08.attr("value",value_getted);
// 	// window.alert("1");
// }
// target_2022_08_25_17_44_08.on("click",function(){
// 	var textArea = document.createElement('textarea');
// 	document.body.appendChild(textArea);
// 	textArea.value = target_2022_08_25_17_44_08.value;
// 	textArea.select();
// 	document.execCommand('copy');
// 	document.body.removeChild(textArea);
// });














// "use strict";
// window.AllowBackFromHistory = false;
// function CheckLocation() {
//     var start = "#go_to_message";
//     var hash = location.hash;
//     if (hash.substr(0, start.length) == start) {
//         var messageId = parseInt(hash.substr(start.length));
//         if (messageId) {
//             GoToMessage(messageId);
//         }
//     } else if (hash == "#allow_back") {
//         window.AllowBackFromHistory = true;
//     }
// }
// function ShowToast(text) {
//     var container = document.createElement("div");
//     container.className = "toast_container";
//     var inner = container.appendChild(document.createElement("div"));
//     inner.className = "toast_body";
//     inner.appendChild(document.createTextNode(text));
//     var appended = document.body.appendChild(container);
//     setTimeout(function () {
//         AddClass(appended, "toast_shown");
//         setTimeout(function () {
//             RemoveClass(appended, "toast_shown");
//             setTimeout(function () {
//                 document.body.removeChild(appended);
//             }, 3000);
//         }, 3000);
//     }, 0);
// }
// function ShowHashtag(tag) {
//     ShowToast("This is a hashtag '#" + tag + "' link.");
//     return false;
// }
// function ShowCashtag(tag) {
//     ShowToast("This is a cashtag '$" + tag + "' link.");
//     return false;
// }
// function ShowBotCommand(command) {
//     ShowToast("This is a bot command '/" + command + "' link.");
//     return false;
// }
// function ShowMentionName() {
//     ShowToast("This is a link to a user mentioned by name.");
//     return false;
// }
// function ShowSpoiler(target) {
//     if (target.classList.contains("hidden")) {
//         target.classList.toggle("hidden");
//     }
// }
// function AddClass(element, name) {
//     var current = element.className;
//     var expression = new RegExp('(^|\\s)' + name + '(\\s|$)', 'g');
//     if (expression.test(current)) {
//         return;
//     }
//     element.className = current + ' ' + name;
// }
// function RemoveClass(element, name) {
//     var current = element.className;
//     var expression = new RegExp('(^|\\s)' + name + '(\\s|$)', '');
//     var match = expression.exec(current);
//     while ((match = expression.exec(current)) != null) {
//         if (match[1].length > 0 && match[2].length > 0) {
//             current = current.substr(0, match.index + match[1].length)
//                 + current.substr(match.index + match[0].length);
//         } else {
//             current = current.substr(0, match.index)
//                 + current.substr(match.index + match[0].length);
//         }
//     }
//     element.className = current;
// }
// function EaseOutQuad(t) {
//     return t * t;
// }
// function EaseInOutQuad(t) {
//     return (t < 0.5) ? (2 * t * t) : ((4 - 2 * t) * t - 1);
// }
// function ScrollHeight() {
//     if ("innerHeight" in window) {
//         return window.innerHeight;
//     } else if (document.documentElement) {
//         return document.documentElement.clientHeight;
//     }
//     return document.body.clientHeight;
// }
// function ScrollTo(top, callback) {
//     var html = document.documentElement;
//     var current = html.scrollTop;
//     var delta = top - current;
//     var finish = function () {
//         html.scrollTop = top;
//         if (callback) {
//             callback();
//         }
//     };
//     if (!window.performance.now || delta == 0) {
//         finish();
//         return;
//     }
//     var transition = EaseOutQuad;
//     var max = 300;
//     if (delta < -max) {
//         current = top + max;
//         delta = -max;
//     } else if (delta > max) {
//         current = top - max;
//         delta = max;
//     } else {
//         transition = EaseInOutQuad;
//     }
//     var duration = 150;
//     var interval = 7;
//     var time = window.performance.now();
//     var animate = function () {
//         var now = window.performance.now();
//         if (now >= time + duration) {
//             finish();
//             return;
//         }
//         var dt = (now - time) / duration;
//         html.scrollTop = Math.round(current + delta * transition(dt));
//         setTimeout(animate, interval);
//     };
//     setTimeout(animate, interval);
// }
// function ScrollToElement(element, callback) {
//     var header = document.getElementsByClassName("page_header")[0];
//     var headerHeight = header.offsetHeight;
//     var html = document.documentElement;
//     var scrollHeight = ScrollHeight();
//     var available = scrollHeight - headerHeight;
//     var padding = 10;
//     var top = element.offsetTop;
//     var height = element.offsetHeight;
//     var desired = top
//         - Math.max((available - height) / 2, padding)
//         - headerHeight;
//     var scrollTopMax = html.offsetHeight - scrollHeight;
//     ScrollTo(Math.min(desired, scrollTopMax), callback);
// }
// function GoToMessage(messageId) {
//     var element = document.getElementById("message" + messageId);
//     if (element) {
//         var hash = "#go_to_message" + messageId;
//         if (location.hash != hash) {
//             location.hash = hash;
//         }
//         ScrollToElement(element, function () {
//             AddClass(element, "selected");
//             setTimeout(function () {
//                 RemoveClass(element, "selected");
//             }, 1000);
//         });
//     } else {
//         ShowToast("This message was not exported. Maybe it was deleted.");
//     }
//     return false;
// }
// function GoBack(anchor) {
//     if (!window.AllowBackFromHistory) {
//         return true;
//     }
//     history.back();
//     if (!anchor || !anchor.getAttribute) {
//         return true;
//     }
//     var destination = anchor.getAttribute("href");
//     if (!destination) {
//         return true;
//     }
//     setTimeout(function () {
//         location.href = destination;
//     }, 100);
//     return false;
// }







//scheduler
// var date_info = new Date();
// var HH = modifyNumber(date_info.getHours());
// var mm = modifyNumber(date_info.getMinutes());
// var ss = modifyNumber(date_info.getSeconds());
// var yyyy = date_info.getFullYear();
// var MM = modifyNumber(date_info.getMonth()+1); ////for month_index
// var dd = date_info.getDate();
// if(MM==9){
// 	document.querySelector(".___________").innerHTML="9월 입니다 학점은행제 학위를 출력하세요"
// }




/*stt_code_segment1/x*/ //stt via
// stt via p5.js
// stt via jquery.js
// $(".voice_memo_two_slash_two").css({
// 	"height": "760px",
// 	"position": "fixed",
// 	"background-color": "black",
// 	"color": "white",
// 	'opacity': '0.5',
// 	"width": "750px",
// });





$(".layer_center_2022_08_25_20_38_54").css({
	"height": "760px",
	"position": "fixed",
	"background-color": "black",

	"display": "flex",
	"justify-content": "end",
	"width": "750px",
});
$(".layer_center_text_2022_08_25_20_53_14").css({
	"color": "white",
	"position": "fixed",
	"top": "30px",
	"left": "30px",
	"display": "flex",
	"justify-content": "end",
	"width": "750px",
});
$(".layer_center_closing_button_2022_08_25_21_01_14").css({
	"color": "white",
	"position": "fixed",
	"top": "30px",
	"right": "430px",
	"background-color": "black",
	// 'opacity': '0.5',
	"width": "18px",
});
$(".intro_left_bar").css({
	"position": "fixed",
	"top": "40%",
	"left": "0%",
	"height": "1px",
	"width": "40%",
	"background": "linear-gradient(-45deg, #eeaa52, #e73c6f, #2394d5, #2af3b7)",
});
$(".intro_right_bar").css({
	"position": "fixed",
	"right": "0%",
	"top": "50%",
	"height": "1px",
	"width": "40%",
	"background": "linear-gradient(-45deg, #eeaa52, #e73c6f, #2394d5, #2af3b7)",
});
$(".space_transparent").css({
	"height": "70px",
	// "background": "transparent",
});
$(".space_transparent_2022_08_25_19_48_45").css({
	"position": "fixed",
	"height": "100px",
	// "background": "transparent",
});
$(".intro_text").css({
	"position": "fixed",
	"color": "white",
	"top": "43%",
	"left": "47%",
	"height": "20",
	"background": "transparent",
	"border-radius": "30",
	"border-width": "1px",
	"border-style": "solid",
	"width": "80px",
	"font-weight": "10",
	"font-size": "100%",
	"border-color": "transparent transparent transparent transparent",
});



// "background": "transparent",
// "border-color": "transparent transparent transparent transparent",
// "margin-left": "386.719px",
// "margin-right": "386.719px",
// "padding-top": "70px",
// 'width': '0 !important',
// 'scrollbar-width': 'none',
// 'scrollbar-width': 'none',
// 'overflow-y': 'scroll',
// 'overflow-y': 'scroll',
// 'overflow-y': 'scroll',
// 'display': 'none',
// 'display': 'none',
// 'display': 'none !important',
// 'background-blend-mode': 'multiply',
// '-ms-overflow-style': 'none',
// '-ms-overflow-style': 'none',
// "overflow": "scroll",
// "overflow": "scroll",
// "overflow": "hidden",
// "overflow": "hidden",
// "width": "800px",
// 'width': '0 !important',
// 'scrollbar-width': 'none',
// 'scrollbar-width': 'none',
// 'overflow-y': 'scroll',
// 'overflow-y': 'scroll',
// 'overflow-y': 'scroll',
// 'display': 'none',
// 'display': 'none',
// 'display': 'none !important',
// 'background-blend-mode': 'multiply',
// '-ms-overflow-style': 'none',
// '-ms-overflow-style': 'none',
// "overflow": "scroll",
// "overflow": "scroll",
// "overflow": "hidden",
// "overflow": "hidden",

// "width": "1100x",
//form_text
// text-transform: uppercase;
// size_text
// code_for_animate_start
// code_for_animate_end,
// code for position
// code for mouse as pointer_finger
// code for color_border
// // "margin-left":"100px",
// 'opacity': '0.5',
// 'border':'3px dashed red'
// "z-index":"2",
// "z-index":"1",
// "z-index": 10,
// "z-index": "10",
// "z-index": "10",
// "word-wrap":"break-word",
// "word-break":"break-all",
// "width":"97%",
// "width":"750px",
// "width":"60px",
// "width":"100%",
// "width": "100%",
// "white-space":"nowrap",
// "visibility":"hidden",
// "user-select":"none",
// "unicode-bidi":"plaintext",
// "transition":"opacity3.0sease",
// "transition":"opacity0.4sease",
// "transition":"opacity 3.0sease",
// "transition":"background-color2.0sease",
// "transition":"background-color0.5sease",
// "transition":"background-color0.5sease",
// "top":"30px",
// "top": "100%",
// "text-transform":"uppercase",
// "text-overflow":"ellipsis",
// "text-decoration":"underline",
// "text-decoration":"none",
// "text-decoration":"none!important",
// "text-align":"start",
// "text-align":"center",
// "right":"3px",
// "postion": 'relative',
// "position":"relative",
// "position":"fixed",
// "position": "fixed",
// "position": "fixed",
// "pointer-events":"none",
// "padding-top":"70px",
// "padding-top":"30px",
// "padding-top":"25px",
// "padding-right":"24px ",
// "padding-left":"24px ",
// "padding-bottom":"5px",
// "padding-bottom":"25px",
// "padding":"0.875rem0",
// "overflow":"hidden",
// "overflow":"auto",
// "outline":"none",
// "opacity":"1",
// "opacity":"0",
// "max-height":"none",
// "margin-top":"0px",
// "margin-top":"0",
// "margin-top":"-9px",
// "margin-top":"-10px",
// "margin-right":"auto",
// "margin-right":"0",
// "margin-left":"auto",
// "margin-left":"60px",
// "margin-left":"0",
// "margin-left":"-5px",
// "margin-bottom":"0px",
// "margin-bottom":"0",
// "margin":"0-50%",
// "margin":"0-10px",
// "margin":"0",
// "margin":"-20px auto 0 -20px",
// "line-height":"40px",
// "line-height":"150%",
// "line-height":"1.42857143",
// "line-height":"0",
// "line-height": "2.1";
// "left":"50%",
// "left":"30px",
// "left": "100%",
// "justify-content":"start",
// "justify-content":"space-evenly",
// "justify-content":"space-between",
// "justify-content":"space-around",
// "justify-content":"end",
// "justify-content":"center",
// "height":"760px",
// "height":"15px",
// "font-weight":"normal",
// "font-weight":"5em",
// "font-size":"inherit",
// "font-size":"80%",
// "font-size":"2rem",
// "font-size":"11px ",
// "font-size":"0.3em",
// "font-size": "20pt",
// "font-family":"Menlo,Monaco,Consolas,CourierNew,monospace",
// "font-family":"Arial, Helvetica, sans-serif",
// "font-family": "Helvetica,Helvetica Neue,Arial,sans-serif",
// "font-family": "Helvetica",
// "font":"12px /18px'OpenSans',LucidaGrande,LucidaSansUnicode,Arial,Helvetica,Verdana,sans-serif",
// "float":"right",
// "float":"left",
// "display":"inline-block",
// "display":"flex",
// "display":"flex",
// "display":"block",
// "cursor":"pointer",
// "content":"",
// "color":"white",
// "color":"#ffffff",
// "color":"#fff",
// "color":"#c7254e",
// "color":"#FFF",
// "color":"#70777b",
// "color":"#3892db",
// "color":"#333",
// "color":"#212121",
// "color":"#168acd",
// "color":"#000000",
// "color": "white",
// "clear":"both",
// "box-sizing":"border-box",
// "bottom":"3px",
// "border-width":"9px 0 9px 14px ",
// "border-width":"0px",
// "border-top":"1px solid #e3e6e8",
// "border-style":"solid",
// "border-right": "1px solid #e3e6e8",
// "border-radius":"3px",
// "border-radius":"0!important",
// "border-radius":"0!important",
// "border-left":"1px solid #e3e6e8",
// "border-image":"linear-gradient(to top, red, rgba(0, 0, 0, 0)) 1 100%",
// "border-image":"linear-gradient(to right, red, orange) 1 50%" ,
// "border-color":"transparent transparent red transparent",
// "border-color":"0",
// "border-bottom":"1px solid #e3e6e8",
// "border-bottom": "1px solid #e3e6e8",
// "border":"none",
// "background-size":"24px 50px ",
// "background-size":"24px 24px ",
// "background-size":" 200% 200%",
// "background-repeat":"repeat",
// "background-repeat":"no-repeat",
// "background-position":"24px 21px ",
// "background-position":"24px 12px ",
// "background-position":"12px 12px ",
// "background-image":"url(../images/media_voice.png)",
// "background-color":"white",
// "background-color":"rgba(242,246,250,255)",
// "background-color":"rgba(0,0,0,0.7)",
// "background-color":"rgb(0, 115, 255)",
// "background-color":"#ffffff",
// "background-color": "transparent",
// "background-color": "black",
// "background-clip": 'padding-box';
// "background":"black",
// "background":"#000",
// "background": "purple",
// "background": "linear-gradient(to right, white, blue)",
// "align-items":"center",
// "-webkit-text-fill-color": "transparent",
// "-webkit-background-clip": "text",
//  'width':'220px',
//  'border':'3px dashed red',
//  "top": "92px",
//  "top": "30%",
//  "postion": 'relative',
//  "position": "absolute",
//  "left": "43.5%",
//  "left": "36%",
//  "justify-content":"center",
//  "height":'170px',
//  "font-size": "20pt",






	// + debugging window
	// + console alternative
	// var target = $("body > div > form:nth-child(2) > div > div:nth-child(4) > div:nth-child(2) > img");
	// target.css({
	// "height": '170px',
	// 'width': '220px',
	// });
	// var target1 = $(".class_generated_at_2022_08_24_23_06_46");
	// target1.css({
	// });
	// var target2 = $(".class_generated_at_2022_08_24_23_21_15");
	// target2.css({
	// });
	// var target2 = $(".page_header");
	// target2.css({
	// });
	// var target3 = $(".MicrosoftBenchmarking5");
	// target3.css({
	// });
	// var target = $("div.target");// <div class="target">
	// var target = $(".target_group");
	// var target_new = target.find(".target");
	// target.text('text_changed');// not my style
	// $("#divText").text("text_new"); //text to text_new
	// $("#divText").text(); //text to text_new
	// $("#divText").text([target1.val(),target2.val(),target3.val(),target4.val()]); //text to text_new
	// $("#divText").text(target1.val()+target2.val()+target3.val()+target4.val()); // need to test
	// $('#divText').html('<img src="images/grim.jpg">');
	// $("#divText").hide();
	// $("#divText").empty();
	// $("#divText").remove();
	// $('#divText > img').addClass('class_created_at_2022_08_12_24');
	// $(this).addClass("active");
	// $("this").toggleClass("active");
	// $(class_created_at_2022_08_12_24).removeClass("active");
	// control target as visual effect 2
	// target.css();
	// "background": "purple",
	// "color": "white",
	// "font-size": "20pt",
	// code_for_animate_start
	// "top": "0",
	// "position": "absolute",
	// "left": "0",
	// code_for_animate_end,
	// 'border':'3px dashed red'
	// "postion": 'relative',
	// $("ul > li:contains(튀김)").css({
	// 	"background": "purple",
	// 	"color": "black",
	// });
	// $("body").css({
	// 	"background": "lightblue",
	// 	"color" : "rgb(42,42,42)",
	// });
	// 	$(".man").css({
	// 		"background": "lightpink",
	// 		"color": "black",
	// });
	// 	target.css('border','3px solid green');
	// }, function(){
	// 	target.css('border','3px dashed red');
	// });
	//code for test
	// $('li:first').css("background","puple"); // my style
	// $('li:last').css("background","puple");
	// $('li:even').css("background","puple");
	// $('ul:nth-child(even)').css("background","puple");
	// $('li:eq(3)').css("background","puple");//0~4
	// $('li:lt(2)').css("background","puple"); //1~2
	// $('ul:has(li:contains(어묵))').css("background","puple");
	// $('has(li:contains(어묵)):parent').css("background","puple");
	// $('li:has(li:contains(튀김))').css("background","puple");
	// $('li:not(li:first)').css("background","puple");
	// $('li:contains(튀김)').css("background","puple");
	// $('body > div > li > ul > li:nth-child(3)').css("background-color","puple");
	// $('*:contains(튀김)').css("background","white"); // code_not_able
	// $('*').css("background","puple"); // code_not_able
	// $('li:contains("튀김")').css("background-color","puple");
	// $('body > div > li > ul > li:nth-child(3)').css('background-color', 'purple');
	// $('body > div > li > ul > li:nth-child(3)').css("background","puple");
	// $('li:contains(튀김)').parent().css("background","puple"); // not my style
	// $('li:contains(튀김)').first().css("background","puple"); // not my style
	// $('li:contains(튀김)').last().css("background","puple"); // not my style
	// target.css('border', '3px solid green').css('inline-block', "");
	// $(".target").fadeOut(1000).fadeIn(1000);
	// $(".target").slideUp("slow").slideDown(1000);
	// $(".target").animate({
	// 	top: 200,
	// 	left: 400
	// });
	// $('.class_created_at_2022_08_12_24').attr('src', 'images/cat.jpg');
	// $('.class_created_at_2022_08_12_24').attr('checked', 'true');


	// target.mouseenter(function () {
	// 	window.alert('mouse hovered.');
	// });
	// target.mouseleave(function () {
	// 	window.alert('mouse leaved.');
	// });
	// target.focus(function () {
	// 	window.alert('target is focused on');
	// });
	// target.hover(function () {
	// 	window.alert('mouse is hovered');
	// });
	// $(document).ready(function () {//it works like as window.onload.
	// 	window.alert('document is been ready to use function');
	// });



	//find()...vs     filter(






