$(document).ready(function(){
	var num = "";
	var firstnum = "";
	var op = "";
	var dispAr = [];
	var total = $("#total");

	$("#total").text("0");

	$("#numbers a").not("#clear,#deci").click(function(){
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
	});

	$("#deci").click(function(){
		var numdeci = 0;
		for(i=0; i<num.length; i++) {
			numdeci++
		}
		if(numdeci>0) {
			num += $(this).text();
			dispAr.push($(this).text());
			$("#inline").text(dispAr.join(""));
			numlimit();
		}
		else {
			num += "0.";
			dispAr.push("0.");
			$("#inline").text(dispAr.join(""));
		};
    });

	$("#compute").click(function(){
		$("#debug-display1").text(firstnum);
		$("#debug-display2").text(op);
		$("#debug-display3").text(num);

		if (op === "+") {
			num = (parseFloat(firstnum,10) + parseFloat(num,10)).toString(10);
		}
		else if (op === "-") {
			num = (parseFloat(firstnum,10) - parseFloat(num,10)).toString(10);
		}
		else if (op === "*") {
			num = (parseFloat(firstnum,10) * parseFloat(num,10)).toString(10);
		}
		else if (op === "/") {
			num = (parseFloat(firstnum,10) / parseFloat(num,10)).toString(10);
		}
		
		$("#debug-display4").text(num);
		
		$("#total").text((numround(num)).toString(10));
		num = "";
		dispAr = [];
		numlimit();



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

	var numround = function(num){
		if (num.length>9) {
			return num.substr(0,9);
		}
		else {
			return num;
		}
	};

});