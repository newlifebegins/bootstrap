$(function(){
	// 轮播自动播放
	$("#myCarousel").carousel({
		// 自动4秒播放
		interval:4100,
	})
	// jquery设置按钮垂直居中
	// $(".carousel-control").css("line-height",$(".carousel-inner img").height() + "px");
	// $(window).resize(function(){
	// 	var $height = $(".carousel-inner img").eq(0).height() || $(".carousel-inner img").eq(1).height() || $(".carousel-inner img").eq(2).height();
	// 	$(".carousel-control").css("line-height",$height + "px");
	// })
    // 设置文字垂直居中
	$(".texts").eq(0).css("margin-top",($(".auto").eq(0).height() - $(".texts").eq(0).height()) / 2 + "px");
    

    $(".texts").eq(1).css("margin-top",($(".auto").eq(1).height() - $(".texts").eq(1).height()) / 2 + "px");
    $(window).resize(function(){
    	$(".texts").eq(0).css("margin-top",($(".auto").eq(0).height() - $(".texts").eq(0).height()) / 2 + "px");
    	$(".texts").eq(1).css("margin-top",($(".auto").eq(1).height() - $(".texts").eq(1).height()) / 2 + "px");
    })

   
})