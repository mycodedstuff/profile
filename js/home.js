function hideLoading(){
    setTimeout(function(){
        $(".back").slideUp("slow");
        $("body").css("overflow-y","auto");
        $("#mainWebpage").fadeIn("slow","linear");
    },2000);
}