
	$("#menuLink").click(function(){
	    $("#layout").toggleClass("active");
	});

	$(".menuright-link").click(function(){
	    $("#menuright,.menuright-link").toggleClass("active");
	});

	$(".buttongroup-vertical .pure-button").click(function(){
		$(this).parent().children(".button-hidden").toggleClass("hidden");
	});
	
	$(function(){
		$("img.lazy").lazyload({threshold: 200});
	});
	
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "https://hm.baidu.com/hm.js?09fee16fd07449ed0dbc971f46110b92";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	  
	
	  
	})();
