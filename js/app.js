$(document).ready(function(){

    $("#burger_menu").click(function(){
        $("#scrolling_menu").slideToggle();
        $("#burger_menu").toggleClass("bg-color-white");
        $("#burger_menu div").toggleClass("bg-color-black");
    });

    var counter;
    var leftValue;

    $(".arrow_left").click(function() {

        var nbrImgs = $(this).parent().find(".img_container img").length;
        counter = $(this).parent().find(".img_container img.active").index();
        leftValue = counter * -100;

        if(counter > 0) {
            $(this).parent().find(".img_container img").removeClass("active");
            $(this).parent().find(".img_container img").eq(counter - 1).addClass("active");
            leftValue += 100;
            $(this).parent().find(".img_container").animate({left : leftValue + "%"}, 1000);
            counter--;
        }

    });

    $(".arrow_rigth").click(function(){

        var nbrImgs = $(this).parent().find(".img_container img").length;
        counter = $(this).parent().find(".img_container img.active").index();
        leftValue = counter * -100;

        console.log("leftValue au click : " + leftValue);

        if(counter < nbrImgs - 1) {
            $(this).parent().find(".img_container img").removeClass("active");
            $(this).parent().find(".img_container img").eq(counter + 1).addClass("active");
            leftValue -= 100;
            $(this).parent().find(".img_container").animate({left : leftValue + "%"}, 1000);
            counter++;
        }

    });


    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(".toBeFaded").fadeIn(2000);
        }
    });

});