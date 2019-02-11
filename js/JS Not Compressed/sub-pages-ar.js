$(function(){
    /*Start Navbar*/
    
    var navBar = $(".navbar"),
        headTopHeight = $(".head-top").innerHeight(),
        navBarHeight = $(".navbar").outerHeight(true),
        elementPaddingTop = navBar.next().next(),
        key = true;
    windowPage.scroll(function(){
        if(windowPage.scrollTop() > (headTopHeight + navBarHeight)){
            if(key == true){
                navBar.addClass("fixed-top").hide(0).slideDown(1000 * 0.3);
                elementPaddingTop.css("margin-top", navBarHeight);
                key = false;
            }
        } else {
            if(key == false){
                navBar.removeClass("fixed-top");
                elementPaddingTop.css("margin-top", 0);
                key = true;
            }
        }
    });
    
    /*End Navbar*/
    /*Start Certificates*/
    
    $(".owl-carousel.owl-carousel4").owlCarousel({
        margin: 30,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1000 * 2,
        autoplayHoverPause: true,
        rtl: true,
        responsive : {
            0: {
                items: 1
            },
            350: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
}
    });
    
    /*End Certificates*/
    /*Start Best Articles*/
    
    var button = $(".certificates .iso .owl-nav button");
    button.empty();
    button.first().html("<i class=\"fas fa-angle-left\"></i>");
    button.last().html("<i class=\"fas fa-angle-right\"></i>");
    
    /*End Best Articles*/
});