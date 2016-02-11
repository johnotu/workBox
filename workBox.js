$(document).ready(function(){
	var num = "";
	var dispAr = [];
	var total = $(".display");
	$(total).text("0");

	$(".numbers").click(function(){
		num += $(this).text();
		dispAr.push($(this).text());
		$(total).text(dispAr.join(""));
	});
	
	$(".operators").click(function(){
		num += $(this).text;
		dispAr.push($(this).text());
		$(total).text(dispAr.join(""));
	});

	$("#deci").click(function(){
		var numdeci = 0;
		for(i=0; i<num.length; i++) {
			numdeci++;
		}
		if(numdeci>0) {
			num += $(this).text();
			dispAr.push($(this).text());
			$(total).text(dispAr.join(""));
		}
		else {
			num += "0.";
			dispAr.push("0.");
			$(total).text(dispAr.join(""));
		}
	});

	$("#clear").click(function(){
		$(total).text("0");
		dispAr = [];
		num = "";
	});

	$("#compute").click(function(){
		num = math.eval(dispAr.join(""));
		$(total).text(num);
		num = "";
		dispAr = [];
	});
});