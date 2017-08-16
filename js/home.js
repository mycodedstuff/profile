window.onload = function(){
    $(".back").slideUp("slow");
    $("body").css("overflow-y","auto");
    $("#mainWebpage").fadeIn("slow","linear");
    $(".arrow-down").click(function(e){
        e.preventDefault();
        $("html, body").stop().animate({
            scrollTop: $("#contents").offset().top - 35
        },1000);
    });
    $(window).scroll(function(){
        var bottom_of_object = $("#contents").offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if(bottom_of_object < bottom_of_window){
            setTimeout(function(){
                $("#contents").addClass("animated bounceInUp").css("visibility","visible");
            },100);
        }
    });
};