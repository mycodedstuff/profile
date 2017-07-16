var array = ['l','o','a','d','i','n','g'];
var marginset = false;
var index = -2,previndex = -1;
var animationInterval;
document.addEventListener('contextmenu', event => event.preventDefault());

function animateEach(className){
    $.each(array,function(i,obj){
        $("#"+obj).addClass(className);
    });
}

function removeAnimation(className){
    $.each(array,function(i,obj){
        $("#"+obj).removeClass(className);
    });
}

function animateForever(){
    if(!marginset){
        $(".inline").css("margin-top","35vh");
        marginset = true;
    }
    if(index != previndex){
        index = Math.floor(Math.random() * 7);
        if($("#"+array[index]+"-bar").css("height") == "80px"){
            $("#"+array[index]+"-bar").css("height",60);
        }else{
            $("#"+array[index]+"-bar").css("height",80);
        }
    }
}

$('#g').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    removeAnimation("bounceInUp");
    removeAnimation("bounceInDown");
    animateEach("flash");
    setTimeout(function(){
        removeAnimation("flash");
        $("#loading").addClass("animated flip");
        setTimeout(function(){
            $("#loading").removeClass("flip");
            for(var i=0 ; i<array.length; i++){
                $("#"+array[i]+ " .letter").addClass("animated bounceIn");
            }
            setTimeout(function(){
                animationInterval = setInterval(function(){ animateForever(); },250);
            },1000);
        },1100);
    },1000);
});