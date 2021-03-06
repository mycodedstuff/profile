var initialProject;
var initialProjectDetails;
var initialCaption;
var initialHexagon;
var initialProjectTitle;
var array;
var view_mode = false;
var callingHexagon;
var tag;
var title;
var hideDelay = true;
var closingProject = false;
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
        if(!view_mode){initialize();
            $(".projects").css("overflow-y","scroll").animate({marginTop: "3vh",height: "185px",marginBottom: "20px"},{duration: 600,queue: false,complete: function(){$(".projects").css("max-height","185px");}});
            $(".project-details").css("display","block").animate({height: "420px"},{duration: 600, queue: false});
            $(".caption").animate({fontSize: "0.8em"},{duration: 600,queue:false});
            setTimeout(function(){callingHexagon.parentNode.scrollTop = callingHexagon.offsetTop - 110;},600);
        }else{
            callingHexagon.parentNode.scrollTop = callingHexagon.offsetTop - 110;
        }
        view_mode = true;
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
            closingProject = false;
        },1300);
    }
    $.each(array,function(i,e){
        if(event == "shrink"){shrinkHexagon(e);}
        else{expandHexagon(e);}
    });
}


function shrinkHexagon(element){
    $(element).find(".hexagon").animate({
        width: "110px",
        height: "120px"
    },{
        duration: 0,
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
        duration: 400,
        queue: false
    });
    $(element).find(".project_title").animate({
        fontSize: initialProjectTitle.fontSize
    });
}

$(function(){
    array = $(".projects").find(".project-pane");
    $('[data-toggle="tooltip"]').tooltip();
    $(document).on('shown.bs.tooltip', function (e) {
        setTimeout(function () {
            $(e.target).tooltip('hide');
        }, 2000);
    });
    $(".project-pane").click(function(event){
        if(!closingProject){
            $('#myCarousel').carousel("pause").removeData();
            $('#fullscreen-carousel').carousel("pause").removeData();
            $('.carousel').carousel({interval: 1800,pause: "false"});
            callingHexagon = event.currentTarget;
            tag = $(callingHexagon).data("title");
            animateHexagon("shrink");
            $.each(array,function(i,e){
                $(e).removeClass("highlight-project");
            });
            $(this).addClass("highlight-project");
            $(".description .content").load("project_details.txt #"+tag);
            $(".carousel-inner").load("project_shots.txt #"+tag, function(){
                $(".carousel-inner").html($(".carousel-inner #"+tag).html());
                $('#fullscreen-carousel').carousel(0);
                $('#myCarousel').carousel(0);
                $('#myCarousel').carousel("cycle");
                $('#fullscreen-carousel').carousel("cycle");
            });
            $.ajax({
                url: "project_links.txt",
                cache: false,
                dataType: "html",
                type: "get",
                success: function(data){
                    var data = $(data).find("#"+tag).html();
					$(".code").empty();
					$(".code").html(data);
                }
            });
            title = $(callingHexagon).find(".project_title").text();
            $(".project-content h2").html(title);
        }
    });
    $(".close-project").click(function(){
        closingProject = true;
        $('#myCarousel').carousel("pause").removeData();
        $('#fullscreen-carousel').carousel("pause").removeData();
        animateHexagon("expand");
        $.each(array,function(i,e){
            $(e).removeClass("highlight-project");
        });
    });
    $('#fullscreen').on('hide.bs.modal',function(){
    if(hideDelay){ $('#fullscreen').removeClass('zoomIn').addClass('zoomOut');
      hideDelay = false;
       setTimeout(function(){
            $('#fullscreen').modal('hide'); $('#fullscreen').removeClass('zoomOut').addClass('zoomIn');
          },700);
          return false;
      }
      hideDelay = true;
      return true;
    });
    $(".dragscroll").mousedown(function(){
        $(".project-details").css("cursor","-webkit-grabbing");
    });
    $(".dragscroll").mouseup(function(){
        $(".project-details").css("cursor","-webkit-grab");
    });
});