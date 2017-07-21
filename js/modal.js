$(function(){
    var hideDelay = true;
    $("#credits").on("show.bs.modal",function(){
        $(".pushback").css("transform","scale3d(0.95,0.95,0.95)");
        $(".pushback").css("-webkit-transform","scale3d(0.95,0.95,0.95)");
    });
    $('#credits').on('hide.bs.modal',function(){
    if(hideDelay){ $('#credits').removeClass('bounceInUp').addClass('fadeOutUp');
      hideDelay = false;
       setTimeout(function(){
            $('#credits').modal('hide'); $('#credits').removeClass('fadeOutUp').addClass('bounceInUp');
            $(".pushback").css("transform","scale3d(1,1,1)");
            $(".pushback").css("-webkit-transform","scale3d(1,1,1)");
          },700);
          return false;
      }
      hideDelay = true;
      return true;
    });
});