$(function(){
	//首页弹框
	$('aside li:eq(1)').click(function(){
		$('.upper').fadeIn(200);
	})
	$('.close').click(function(){
		$('.upper').hide();
	});
	//二级菜单
	$('.con li:eq(2)').hover(
		function(){$(this).addClass('hover').find('.eu2').slideDown(260);},
		function(){$(this).removeClass('hover').find('.eu2').slideUp(260);});
	//右侧按钮
	$(window).scroll(function(){
		if ($(window).scrollTop()>400)
		{  
            $('aside').fadeIn(300);  
        }  
        else  
        {  
            $("aside").fadeOut(50);  
        }  
	});
	//返回顶部
	$('#btt').click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	})
	//简单轮播
	var pics = 0;
	var loop = setInterval(function(){
		pics = (pics == 2) ? 0 : pics + 1;
		$('.lbt nav a').fadeOut(500).eq(pics).fadeIn(500);
		$('.bnbtn li').eq(pics).addClass('on').siblings().removeClass('on');
	},3600);

});