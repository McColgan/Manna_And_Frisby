$(document).ready(function(){
    // Nav-Icon Animation
    $('#nav_icon').click(function(){
        $('.nav_outer').toggleClass('nav_outer--open', 400);
        $(this).toggleClass('open');
        
        if ($('.nav_outer').has('nav-outer--open')){
            $('.nav_outer a').each(function(i){
                setTimeout(function(){
                    $('.nav_outer a').eq(i).addClass('is-showing');
                }, 200 * (i+1));
            });
        } else if (!$('.nav_outer').has('nav_outer--open')){
           $('.nav_outer a').removeClass('is+showing');
        }
        return false;
    });

     // Smooth Scrolling
     var scrollLink = $('.scroll');
     scrollLink.click(function(e){
         e.preventDefault();
         $('body,html').animate({
         scrollTop: $(this.hash).offset().top - $('.header_outer').outerHeight()
         }, 1500);
     });
 
     // Link switching 
     function linkSwitching(){
         var scrollBarLocation = $(this).scrollTop();
         scrollLink.each(function(){
           var sectionOffset = $(this.hash).offset().top -140;
           if (sectionOffset <= scrollBarLocation){
             $(this).parent().addClass('active_link');
             $(this).parent().siblings().removeClass('active_link');
           }
         });
     }

    // Parallax function 
    function parallax(){
        var wScroll = $(window).scrollTop();
            $('.showcase_img').css('top',(wScroll * 0.03)+'em');
            $('.logo_outer').css('top',(wScroll * 0.09)+'em');
            //$('.showcase_quote_box').css('top',(wScroll * 0.09)+'em');
        }

    // Calling functions    
    $(window).scroll(function(){
        parallax();
        linkSwitching();
    });

});