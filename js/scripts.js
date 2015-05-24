$(document).ready(function() {
    $('.bxslider').bxSlider({
        controls: false,
        auto: true,
        pause: 7500
    });
    showMenu();
});

function showMenu(){
    var navList=$(".nav_list");
        $(".nav_menu").on("click", function () {
            navList.toggleClass("expanded");
        });
        $(".nav_close").on("click", function () {
            navList.removeClass("expanded");
        });
}