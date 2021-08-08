$(document).ready(function(){
    $(".about-section").waypoint(function(direction){
       if(direction == "down"){
            $("nav").addClass("sticky-nav");
        }
        else{
           $("nav").removeClass("sticky-nav");
        }
    //    if(direction == "up"){
    //         $("nav").removeClass("sticky-nav");
    //    }
       
    });
});