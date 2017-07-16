var follow_action;
function openNav() {
    $("#nav-toggle").css("visibility","hidden");
    $("#mySidenav").stop().animate({width: "220px"},{duration: 400, queue: false});
    $("#mainDiv").stop().animate({marginLeft: "220px"},{duration: 400, queue: false});
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    $("#mySidenav").animate({width: "0"},{duration: 400, queue: false});
    $("#mainDiv").animate({marginLeft: "0"},{duration: 400, queue: false});
    $("#nav-toggle").css("visibility","visible");
}

function followToggle(){
    if($("#follow").css("right") == "-320px"){
        $(".social").css("display","block");
        $("#follow").css("display","block");
        $("#follow").css("right","70px");
    }
    else{
        $("#follow").css("right","-320px");
        setTimeout(function(){
            $(".social").css("display","none");
        },1000);
        followover();
    }
}

$(function(){
    document.addEventListener('contextmenu', event => event.preventDefault());
    $("#socialclosebtn").click(function(){
       followToggle(); 
    });
    $(".closebtn").click(function(){
        closeNav();
    });
    $("#nav-toggle").click(function(){
        openNav();
    });
    $(".followtext").click(function(){
       followToggle(); 
    });
});