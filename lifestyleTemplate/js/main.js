(function ($) {
	"use strict";

    jQuery(document).ready(function($){



/// -----------------  Off Canvus Menu  -----------------  ///  

$(".menu-trigger").on("click",function(){
  $(".off-canvus-menu").addClass("active");
  return false;
});

$(".menu-close,.off-canvus-overlay").on("click",function(){
  $(".off-canvus-menu").removeClass("active");
});

// .........  Modal content  .........  ///

 $('#myModal').modal('show');    

// .........  for smooth scroll  ..........        

 $('.smooth-menu a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '0';
        $('html, body').stop().animate({                
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"            
        }, 1200, 'easeInOutExpo');
        
        event.preventDefault();
        
    });



        


});


    $(window).load(function(){
        
        
    });


}(jQuery)); 