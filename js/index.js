      /////////////////////////////////
     //   page Reload to start With Top            
 //////////////////////////////////

    $(document).ready(function(){
        $('html').animate({scrollTop:0}, 1);
        $('body').animate({scrollTop:0}, 1);
    });

      /////////////////////////////////
     //         Loader            
    //////////////////////////////////
        $(window).load(function() {
               setTimeout(function() {
                   $(".loader").removeClass("loader");
               }, 1000);
        });
      //////////////////////////////////
     //    Scroll To show Shadow         
    ///////////////////////////////////
        $(window).scroll(function() {
            var y = $(window).scrollTop();
            if (y > 0) {
                $(".nav_shadow").css({
                    'display': 'block',
                    'opacity': y / 400
                });
                
            } else {
                $(".nav_shadow").css({
                    'display': 'block',
                    'opacity': y / 400
                });
            }
        });

        $(window).scroll(function() {
            var y = $(window).scrollTop();
            if (y > 0) {
                $(".barnd").css({
                    'display': 'block',
                    'opacity': y / 100
                });
                
            } else {
                $(".barnd").css({
                    'display': 'block',
                    'opacity': y / 100
                });
            }
        });
      //////////////////////////////////
     //    Scroll to faid out        
    ///////////////////////////////////
        var fadeStart=000 // 100px scroll or less will equiv to 1 opacity
            ,fadeUntil=100 // 200px scroll or more will equiv to 0 opacity
            ,fading = $('.disgner_name')
        ;

        $(window).bind('scroll', function(){
            var offset = $(document).scrollTop()
                ,opacity=0
            ;
            if( offset<=fadeStart ){
                opacity=1;
            }else if( offset<=fadeUntil ){
                opacity=1-offset/fadeUntil;
            }
            fading.css('opacity',opacity);
        });

        ////
        //Animacion
        ////
        /*jQuery*/

(function($){
$(function(){
    var ink, d, x, y;
    $(".clickable").click(function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
  });
});})(jQuery);