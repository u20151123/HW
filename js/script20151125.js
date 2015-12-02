$(document).ready(function(){
	// Loading 
	/*$(".body").css("display","none");
	$("#loading").fadeIn(800);
	
	$("#branch4 img").animate({top: "0%",right: "0%",width: "100%"},2000);
	$("#branch1 img").animate({width: "100%"},2000);
	$("#branch2").delay(1000).animate({opacity: 1},2000);
	$("#branch2 img").delay(1000).animate({width: "100%"},2000);
	$("#branch3").delay(2000).animate({width: "100%"},2000);
	setTimeout(function(){
		$("#branch3 img").css({width: "619px"});
	},2000)
	$("#loading").delay(3500).fadeOut(500);
	setTimeout(function(){
		$(".body").css("display","initial");
	},4500);*/

	// Top pictures change
	$('.carousel').carousel({
		interval: 3000 //changes the speed
	});
	
	// Scroll Down
	$("#ScrollDown").click(function(){
		$("html,body").animate({scrollTop: window.innerHeight +80},700);
		
	});
	
	// Scroll to top
	$("#toTop").click(function(){
		$("html,body").animate({scrollTop: 0},700);
	});
	
	// Display scroll to top // header fixed
	var lastScrollTop = 0;
	
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			if( $(this).scrollTop() > window.innerHeight*0.5 ){
				$("#toTop").css("display","block");
				$("#toTop").stop().animate({opacity: 1},400);
			}
			
			if( $(this).scrollTop() > window.innerHeight){
				$("header").css({"position": "fixed","top": "-80px"});
				$("header").animate({top: "0px"});
			}
		}
		else{
			if( $(this).scrollTop() <= window.innerHeight*0.5 ){
				$("#toTop").css({"display":"none","opacity":0});
			}
			
			if( $(this).scrollTop() <= window.innerHeight){
				$("header").css("position","initial");
			}
		}
		
		lastScrollTop = st;
	});
	// Recruit animate
	$("#RECRUIT").hover(function(){
		$(this).stop().animate({
			top: "78%"
		},500);
	},function(){
		$(this).stop().animate({
			top: "80%"
		},200);
	})
	// Menu bottom line
	$("ul#Menu li a").hover(function(){
		$(this).next().stop().animate({marginLeft: "-50%", width: "100%"},300);
	},function(){
		$(this).next().stop().animate({marginLeft: "0%", width: 0},300);
	})
	
	
	// Set img slide width
	var w = 0,deltaW1,deltaW2;
	
	setTimeout(function(){
		$("ul#imgH1 li").each(function(){
			w += $(this).find("img").outerWidth();
		});
		$("ul#imgH1").css("width", w);
		
		w = 0;
		$("ul#imgH2 li").each(function(){
			w += $(this).find("img").outerWidth();
		});
		$("ul#imgH2").css("width", w);
		
		deltaW1 = ( $("ul#imgH1").width() - $(window).width() ) / $(window).width();
		deltaW2 = ( $("ul#imgH2").width() - $(window).width() ) / $(window).width();
		
		$("ul#imgH2").css({"right": deltaW2*100 +"%"});
		moveHorizon();
		setInterval(moveHorizon,80000);
	},50);
	
	// Window resize // Slide pictures
	$(window).resize(function(){
		setTimeout(function(){
			deltaW1 = ( $("ul#imgH1").width() - $(window).width() ) / $(window).width();
			deltaW2 = ( $("ul#imgH2").width() - $(window).width() ) / $(window).width();
			$("ul#imgH2").css({"right": deltaW2*100 +"%"});
			$("ul#imgH1").css({"left": "0%"});
			$("ul#imgH1 , ul#imgH2").css({marginLeft: "0%"});
		},50);		
	});
	
	function moveHorizon(){
		$("ul#imgH1").animate({marginLeft: "-"+ deltaW1*100 +"%"},40000);
		$("ul#imgH1").animate({marginLeft: "0%"},40000);
		$("ul#imgH2").animate({marginLeft: deltaW2*100 +"%"},40000);
		$("ul#imgH2").animate({marginLeft: "0%"},40000);
	}
});