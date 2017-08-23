$(function(){
    $("form").submit(function(event){
        event.preventDefault();
        $(".submit-text").text("Sending...");
        $.ajax({
            url: "https://formspree.io/singh.aman956@gmail.com", 
            method: "POST",
            data: {name: $("#name").val(),
                   email: $("#email").val(),
                   message: $("#message").val()
                  },
            dataType: "json",
            success: function(){ $(".send-success").css("display","block").animate({opacity: 1},{duration: 500, complete: function(){
                setTimeout(function(){
                        $(".send-success").animate({opacity: 0},{duration: 1000, complete: function(){
                            $(this).css("display","none");
                        }});
                    },1000);
                }});
                $("form").trigger("reset");
                $(".submit-text").text("Send");
            },
            error: function(){
                $(".send-fail").css("display","block").animate({opacity: 1},{duration: 500, complete: function(){
                setTimeout(function(){
                        $(".send-fail").animate({opacity: 0},{duration: 1000, complete: function(){
                            $(this).css("display","none");
                        }});
                    },1000);
                }});
                $("form").trigger("reset");
                $(".submit-text").text("Send");
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
    $(".arrow-down").click(function(){
        $("html,body").stop().animate({scrollTop: $("#contact-page .row").offset().top - 35},1000);
    });
});