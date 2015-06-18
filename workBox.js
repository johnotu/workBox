/* Next Steps
*** place a limit on the number of digits
*** round up last allowed digit
*** html/js navigation bar. */

$(document).ready(function(){
	var num = "";
	var firstnum = "";
	var op = "";
	var dispAr = [];
	var total = $("#total");

	$("#total").text("0");

	$("#numbers a").not("#clear").click(function(){
		num += $(this).text();
		dispAr.push($(this).text());
		$("#inline").text(dispAr.join(""));
		numlimit();
	});

	$("#operators a").not("#compute").click(function(){
		dispAr.push($(this).text());
		$("#inline").text(dispAr.join(""));
		op = $(this).text();
		firstnum = num;
		num = "";
	})

	$("#compute").click(function(){
		$("#debug-display1").text(firstnum);
		$("#debug-display2").text(op);
		$("#debug-display3").text(num);

		if (op === "+") {
			num = (parseInt(firstnum,10) + parseInt(num,10)).toString(10);
		}
		else if (op === "-") {
			num = (parseInt(firstnum,10) - parseInt(num,10)).toString(10);
		}
		else if (op === "*") {
			num = (parseInt(firstnum,10) * parseInt(num,10)).toString(10);
		}
		else if (op === "/") {
			num = (parseInt(firstnum,10) / parseInt(num,10)).toString(10);
		}

		$("#total").text(num);
		num = "";
		dispAr = [];
		numlimit ();



	})

	$("#clear").click(function(){
		$("#inline").text("");
		dispAr = [];
		num = "";
		$("#total").text("0");
	})

	var numlimit = function(){
		if (num.length>9) {
			$("#total").text("err");
			dispAr = [];
			num = "";
		}
	};

});