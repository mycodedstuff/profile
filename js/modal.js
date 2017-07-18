$(function(){
    var hideDelay = true;
    $('#credits').on('hide.bs.modal',function(){
    if(hideDelay){ $('#credits').removeClass('bounceInUp').addClass('fadeOutUp');
      hideDelay = false;
       setTimeout(function(){
            $('#credits').modal('hide'); $('#credits').removeClass('fadeOutUp').addClass('bounceInUp');
          },700);
          return false;
      }
      hideDelay = true;
      return true;
    });
});