var follow_action;
var follow_width;
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

$(function(){
    document.addEventListener('contextmenu', function(event){event.preventDefault();});
    $("#socialclosebtn").click(function(){followToggle();});
    $(".closebtn").click(function(){closeNav();});
    $("#nav-toggle").click(function(){openNav();});
});