$(function(){
     $('[data-toggle="tooltip"]').tooltip({
         viewport : ".known-lang",
         container: ".known-lang"
     });
    $(document).on('shown.bs.tooltip', function (e) {
      setTimeout(function () {
        $(e.target).tooltip('hide');
      }, 2000);
   });
});