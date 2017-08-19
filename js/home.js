window.onload = function(){
    $("#mainWebpage").fadeIn("slow","linear");
    $(".arrow-down").click(function(e){
        e.preventDefault();
        $("html, body").stop().animate({
            scrollTop: $("#contents").offset().top - 35
        },1000);
    });
};