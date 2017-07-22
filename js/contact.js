$(function(){
    $("form").submit(function(event){
        event.preventDefault();
        $.ajax({
            url: "https://formspree.io/singh.aman956@gmail.com", 
            method: "POST",
            data: {name: $("#name").val(),
                   email: $("#email").val(),
                   message: $("#message").val()
                  },
            dataType: "json",
            success: function(){
                
            },
            error: function(){
                
            }
        });
    });
    if(Clipboard.isSupported()){
        var clipboard = new Clipboard(".mail-id", {
            text: function(trigger) {
                return "singh.aman956@gmail.com";
            }
        });
        clipboard.on("success",function(event){
            $(".copied").css("display","block").animate({opacity: 1},{duration: 500, complete: function(){
                setTimeout(function(){
                    $(".copied").animate({opacity: 0},{duration: 1000, complete: function(){
                        $(this).css("display","none");
                    }});
                },1000);
            }});
        });
    }
});