$(function(){
	//tab
	$(".navlist").on("click",function(){
		if(!$(this).hasClass("navactive")){
			$(".navScroll").each(function(){
				$(this).hide();
			})
			$(".navScroll").eq($(this).attr("attrs")-1).show();
			$(".navlist").each(function(){
				$(this).removeClass("navactive")
			})
			$(this).addClass("navactive");
		};

	})
})