$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $(document).on('shown.bs.tooltip', function (e) {
      setTimeout(function () {
        $(e.target).tooltip('hide');
      }, 2000);
    });
    $(window).scroll(function(){
        var bottom_of_intro = $(".intro").offset().top;
        var bottom_of_lang = $(".lang").offset().top + 150;
        var bottom_of_ongoing = $(".ongoing").offset().top + 250;
        var bottom_of_button = $(".project a").offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if(bottom_of_window > bottom_of_intro ){
            setTimeout(function(){
            $(".animateToRight").addClass("animated fadeInLeft").css("visibility","visible");
            $("#googleMaps").addClass("animated fadeInRight").css("visibility","visible");
            },80); 
        }
        if(bottom_of_window - 600 > bottom_of_intro){
            setTimeout(function(){
                $(".navigate-down").addClass("animated zoomIn").css("visibility","visible");
            },500);
        }
        if(bottom_of_window > bottom_of_lang){
            setTimeout(function(){
            $(".lang .tags-wrapper").addClass("animated fadeInUp").css("visibility","visible");
            },80);
        }
        if(bottom_of_window > bottom_of_ongoing){
            setTimeout(function(){
            $(".ongoing .tags-wrapper").addClass("animated fadeInRight").css("visibility","visible");
            },80);
        }
        if(bottom_of_window > bottom_of_button){
            setTimeout(function(){
            $(".project").addClass("animated bounceIn").css("visibility","visible");
            },80);
        }
        if(bottom_of_intro >= bottom_of_window){
            $(".navigate-down").removeClass("animated zoomIn").css("visibility","hidden");
        }
    });
    $(".arrow-down").click(function(e){
        e.preventDefault();
        $("html, body").stop().animate({
            scrollTop: $(".intro").offset().top + 10
        },1000);
    });
    $(".navigate-down").click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({
            scrollTop: $(".lang").offset().top - 10
        },1000);
    });
});