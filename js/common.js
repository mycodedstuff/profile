var follow_action;
function openNav() {
    $("#nav-toggle").css("visibility","hidden");
    $("#mySidenav").stop().animate({width: "220px"},{duration: 400, queue: false});
    $("#mainDiv").stop().animate({marginLeft: "220px"},{duration: 400, queue: false});
}

function closeNav() {
    $("#mySidenav").animate({width: "0"},{duration: 400, queue: false});
    $("#mainDiv").animate({marginLeft: "0"},{duration: 400, queue: false});
    $("#nav-toggle").css("visibility","visible");
}

function followToggle(){
    if($("#social-container").css("width") == "0px"){
        $("#social-container").animate({width: "380px"},{duration: 0, queue: false, easing: "linear"});
        $("#follow").animate({width: "460px"},{duration: 0, queue: false, easing: "linear"});
    }
    else{
        $("#follow").animate({width: "80px"},{duration: 0, queue: false, easing: "linear"}).attr("style","");
        $("#social-container").animate({width: "0px"},{duration: 0, queue: false, easing: "swing"});
    }
}

$(function(){
    document.addEventListener('contextmenu', function(event){event.preventDefault();});
    $("#socialclosebtn").click(function(){followToggle();});
    $(".closebtn").click(function(){closeNav();});
    $("#nav-toggle").click(function(){openNav();});
    $(".followtext").click(function(){followToggle();});
});