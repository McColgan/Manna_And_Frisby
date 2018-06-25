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

    function parallax(){
        var wScroll = $(window).scrollTop();
            $('.showcase_img').css('top',(wScroll * 0.04)+'em');
        }
    $(window).scroll(function(){
        parallax();
        //linkSwitching();
    });

});