var initialProject;
var initialProjectDetails;
var initialCaption;
var initialHexagon;
var initialProjectTitle;
var array;
var view_mode = false;
var callingHexagon;
function initialize(){
    initialProject = {
        marginTop: $(".projects").css("margin-top"),
        height: $(".projects").css("height"),
        marginBottom: $(".projects").css("margin-bottom"),
        maxHeight: $(".projects").css("max-height")
    };
    initialProjectDetails = {
        height: $(".project-details").css("height"),
    };
    initialCaption = {
        fontSize: $(".caption").css("font-size")
    };
    initialHexagon = {
        width: $(".hexagon").css("width"),
        height: $(".hexagon").css("height")
    };
    initialProjectTitle = {
        fontSize: $(".project_title").css("font-size")
    }
}
function animateHexagon(event){
    if(event == "shrink"){
        if(!view_mode){initialize();}
        view_mode = true;
        $(".projects").css("overflow-y","scroll").animate({marginTop: "3vh",height: "185px",marginBottom: "30px"},{duration: 600,queue: false,complete: function(){$(".projects").css("max-height","185px");}});
        $(".project-details").css("display","block").animate({height: "420px"},{duration: 600, queue: false});
        $(".caption").animate({fontSize: "0.8em"},{duration: 600,queue:false});
        setTimeout(function(){callingHexagon.parentNode.scrollTop = callingHexagon.offsetTop;},600);
    }else{
        view_mode = false;
        $(".projects").css("overflow-y","visible").animate({marginTop: initialProject.marginTop,height: initialProject.height ,marginBottom: initialProject.marginBottom},{duration: 600,queue: false,complete: function(){$(".projects").css("max-height", initialProject.maxHeight).css("max-height","none").css("height","auto");}});
        $(".project-details").animate({marginTop: "420px",height: initialProjectDetails.height},{duration: 600, queue: false, complete: function(){
            $(".project-details").css("display","none").css("margin-top","0");
        }});
        $(".caption").animate({fontSize: initialCaption.fontSize},{duration: 600,queue:false});
        setTimeout(function(){$(".projects").removeAttr("style");$(".project-details").removeAttr("style");$(".caption").removeAttr("style");
            $.each(array,function(i,e){
                $(".hexagon").removeAttr("style");
                $(".project_title").removeAttr("style");
            });
        },1300);
    }
    $.each(array,function(i,e){
        if(event == "shrink"){shrinkHexagon(e);}
        else{expandHexagon(e);}
    });
}


function shrinkHexagon(element){
    $(element).find(".hexagon").animate({
        width: "90px",
        height: "120px"
    },{
        duration: 600,
        queue: false
    });
    $(element).find(".project_title").animate({
        fontSize: "1em"
    });
}

function expandHexagon(element){
    $(element).find(".hexagon").animate({
        width: initialHexagon.width,
        height: initialHexagon.height
    },{
        duration: 1200,
        queue: false
    });
    $(element).find(".project_title").animate({
        fontSize: initialProjectTitle.fontSize
    });
}

$(function(){
    array = $(".projects").find(".project-pane");
    $('[data-toggle="tooltip"]').tooltip();
    $('.carousel').carousel({interval : 2200});
    $('.carousel').hover(function(){$(this).carousel('pause');} ,function(){$(this).carousel('cycle');});
    $(".project-pane").click(function(event){
        callingHexagon = event.currentTarget;
        animateHexagon("shrink");
        $.each(array,function(i,e){
            $(e).removeClass("highlight-project");
        });
        $(this).addClass("highlight-project");
    });
    $(".close-project").click(function(){
        animateHexagon("expand");
        $.each(array,function(i,e){
            $(e).removeClass("highlight-project");
        });
    });
});