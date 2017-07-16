
var follow_toggle = false;
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
    if(!follow_toggle){
        $("#follow").css("right","70px");
        follow_toggle = true;
    }
    else{
        follow_toggle = false;
        $("#follow").css("right","-325px");
        followover();
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());

function followout(){
//    if(follow_action == undefined){
//        follow_action = setTimeout(function(){
//            followToggle();
//        },2000);
//    }
}

function followover(){
//    clearTimeout(follow_action);
//    follow_action = undefined;
}