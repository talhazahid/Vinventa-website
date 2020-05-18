$(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 200 && scrollTop <= 400) {
        $('.discover-path-img').stop().animate({height: "0px"}, 250);
    } else {
        $('.discover-path-img').stop().animate({height: "100vh"}, 1050);   
    }
});