$(function(){
    $("form").submit(function(event){
        event.preventDefault();
        
    });
    if(Clipboard.isSupported()){
        var clipboard = new Clipboard(".mail-id", {
            text: function(trigger) {
                return "singh.aman956@gmail.com";
            }
        });
        clipboard.on("success",function(event){
            $(".copied").animate({opacity: 1},{duration: 500, complete: function(){
                setTimeout(function(){
                    $(".copied").animate({opacity: 0},1000);
                },1000);
            }});
        });
    }
    initMap();
});
