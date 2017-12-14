//业务层伸缩
$(document).ready(function(){
	var a =$(".ywbox ul li:gt(0):not(:last)");
	    a.hide();
	$(".boxdown").click(function(){
		if(a.is(':visible')){
			 a.slideUp('fast');
			 $(this).removeClass('ywboxup');
		}else{
			a.slideDown('fast').show();	
			$(this).addClass('ywboxup');
	}			
	});
});

$(document).ready(function(){
	var a =$(".ywbox2 ul li:gt(0):not(:last)");
	    a.hide();
	$(".boxdown2").click(function(){
		if(a.is(':visible')){
			 a.slideUp('fast');
			 $(this).removeClass('ywboxup');
		}else{
			a.slideDown('fast').show();	
			$(this).addClass('ywboxup');
	}			
	});
});

$(document).ready(function(){
	var a =$(".ywbox3 ul li:gt(0):not(:last)");
	    a.hide();
	$(".boxdown3").click(function(){
		if(a.is(':visible')){
			 a.slideUp('fast');
			 $(this).removeClass('ywboxup');
		}else{
			a.slideDown('fast').show();	
			$(this).addClass('ywboxup');
	}			
	});
});

$(document).ready(function(){
	var a =$(".ywbox4 ul li:gt(0):not(:last)");
	    a.hide();
	$(".boxdown4").click(function(){
		if(a.is(':visible')){
			 a.slideUp('fast');
			 $(this).removeClass('ywboxup');
		}else{
			a.slideDown('fast').show();	
			$(this).addClass('ywboxup');
	}			
	});
});
$(document).ready(function(){
	var a =$(".ywbox5 ul li:gt(0):not(:last)");
	    a.hide();
	$(".boxdown5").click(function(){
		if(a.is(':visible')){
			 a.slideUp('fast');
			 $(this).removeClass('ywboxup');
		}else{
			a.slideDown('fast').show();	
			$(this).addClass('ywboxup');
	}			
	});
});

$(document).ready(function(){
	var a =$(".ywbox6 ul li:gt(0):not(:last)");
	    a.hide();
	$(".boxdown6").click(function(){
		if(a.is(':visible')){
			 a.slideUp('fast');
			 $(this).removeClass('ywboxup');
		}else{
			a.slideDown('fast').show();	
			$(this).addClass('ywboxup');
	}			
	});
});