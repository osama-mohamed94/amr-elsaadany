$(function(){
    /*Start Best Articles*/
    
    $(".owl-carousel.owl-carousel1").owlCarousel({
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 1000 * 3,
        autoplayHoverPause: true,
        responsiveClass: true,
        rtl: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            768:{
                items:2,
                nav:true
            },
            992:{
                items:3,
                nav:true
            }
        }
    });
    
    /*End Best Articles*/
    /*Start Quality*/
    
    $(".owl-carousel.owl-carousel2").owlCarousel({
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 1000 * 3,
        autoplayHoverPause: true,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    
    /*End Quality*/
    /*Start Students Testmonials*/
    
    $(".testmonials .testmo .images .person-image").click(function(){
        if(windowPage.innerWidth() >= 576){
            var clickIndex = $(this).index();
            if($(this).hasClass("active") == false){
                $(this).addClass("active").siblings().removeClass("active");
                $(".testmonials .testmo .names .person-name").hide(0).eq(clickIndex).fadeIn(1000 * 0.4);
                $(".testmonials .testmo .text .person-text").hide(0).eq(clickIndex).fadeIn(1000 * 0.4);
            }
        }
    });
    var carouselSlider = $(".owl-carousel.owl-carousel3");
    function sliderSmallScreen(){
        if(windowPage.innerWidth() < 576){
            carouselSlider.owlCarousel({
                items: 1,
                center: true,
                startPosition: 1,
                loop: true,
                rtl: true
            });
            $(".testmonials .testmo .names .person-name.twe-name").fadeIn(1000 * 0.4).siblings().hide(0);
            $(".testmonials .testmo .text .person-text.twe-text").fadeIn(1000 * 0.4).siblings().hide(0);
        } else {
            carouselSlider.trigger("destroy.owl.carousel");
            $(".testmonials .testmo .images .person-image.image-2").addClass("active").siblings().removeClass("active");
            $(".testmonials .testmo .names .person-name.twe-name").fadeIn(1000 * 0.4).siblings().hide(0);
            $(".testmonials .testmo .text .person-text.twe-text").fadeIn(1000 * 0.4).siblings().hide(0);
        }
    }
    windowPage.resize(sliderSmallScreen);
    sliderSmallScreen();
    
    carouselSlider.on("dragged.owl.carousel", function(){
        if(windowPage.innerWidth() < 576){
            var thisPerson = $(this).find(".owl-stage-outer .owl-stage .owl-item.active .person-image").data("small");
            $(".testmonials .testmo .names .person-name." + thisPerson + "-name").fadeIn(1000 * 0.4).siblings().hide(0);
            $(".testmonials .testmo .text .person-text." + thisPerson + "-text").fadeIn(1000 * 0.4).siblings().hide(0);
        }
    });
    
    /*End Students Testmonials*/
    /*Scroll*/
    
    $(".uesful-videos .scroll-section").niceScroll({
        cursoropacitymax: 1,
        cursoropacitymin: 1,
        emulatetouch: true
    });

    /*Scroll*/
    /*Start Navbar*/
    
    var navBar = $(".navbar"),
        headTopHeight = $(".head-top").innerHeight(),
        navBarHeight = $(".navbar").outerHeight(true),
        heroPaddingTop = $(".hero-area > .container"),
        key = true;
    windowPage.scroll(function(){
        if(windowPage.scrollTop() > (headTopHeight + navBarHeight)){
            if(key == true){
                navBar.addClass("fixed-top").hide(0).slideDown(1000 * 0.3);
                heroPaddingTop.css("margin-top", navBarHeight);
                key = false;
            }
        } else {
            if(key == false){
                navBar.removeClass("fixed-top");
                heroPaddingTop.css("margin-top", 0);
                key = true;
            }
        }
    });
    
    /*End Navbar*/
    /*Start Hero Area*/
    
    //(heroAreaWidth)For Arrow In Bottom
    function everyResize(){
        var heroAreaWidth = $(".hero-area").innerWidth();
        $(".hero-area .arrow-bottom").css("border-right-width", heroAreaWidth + "px");
    }
    windowPage.resize(everyResize);
    everyResize();
    
    /*End Hero Area*/
    /*Start Best Articles*/
    
    var button = $(".best-articles .articles .owl-nav button");
    button.empty();
    button.first().html("<i class=\"fas fa-angle-left\"></i>");
    button.last().html("<i class=\"fas fa-angle-right\"></i>");
    
    /*End Best Articles*/
    
    
});