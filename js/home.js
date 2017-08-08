// $(function(){
//     var timeout = 4000;
//     var cookie = document.cookie;
//     if(cookie.includes("home_loaded=true")){
//         timeout = 0;
//     }else{
//         setTimeout(function(){
//             $(".cookie-alert").css("display","block");
//         },timeout + 100);
//     }
//     setTimeout(function(){
//         $(".back").slideUp("slow");
//         $("body").css("overflow-y","auto");
//         $("#mainWebpage").fadeIn("slow","linear");
//     },timeout);
//     $("#credits").on("show.bs.modal",function(){
//         $(".pushback").css("transform","scale3d(0.95,0.95,0.95)");
//         $(".pushback").css("-webkit-transform","scale3d(0.95,0.95,0.95)");
//     });
//     $("credits").on("hide.bs.modal",function(){
//         $(".pushback").css("transform","scale3d(1,1,1)");
//         $(".pushback").css("-webkit-transform","scale3d(1,1,1)");
//     });
//     $(".cookie-btn").click(function(){
//         $(".cookie-alert").slideToggle(600);
//     });
//     document.cookie = "home_loaded=true";
// });


window.onload = function(){
    $(".back").slideUp("slow");
    $("body").css("overflow-y","auto");
    $("#mainWebpage").fadeIn("slow","linear");
};
