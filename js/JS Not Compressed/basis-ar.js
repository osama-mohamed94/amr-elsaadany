var windowPage = $(window),
    bodyContent = $("body");
$(function(){
    /*Start Head Top*/
    
    $(".head-top #login, .pop-up-videos, .uesful-videos .video-star .video-image .icon, .pop-up-videos .close-icon").click(function(e){
        $(this).next().slideToggle(1000 * 0.2);
        var popUpVideos = $(".pop-up-videos");
        if(e.currentTarget == $(".uesful-videos .video-star .video-image .icon")[0]){
            popUpVideos.removeClass("remove slideOutUp").addClass("slideInDown");
        } else if(e.currentTarget == $(".pop-up-videos .close-icon")[0] || e.target == $(".pop-up-videos")[0]){
            popUpVideos.addClass("slideOutUp").removeClass("slideInDown");
            setTimeout(function(){
                popUpVideos.addClass("remove");
            }, 1000 * 0.8);
        }
    });
    
    //For Select Box Lang//////////
    var selectBoxLang = $(".head-top .right .select-lang"),
        lang = selectBoxLang.find("a"),
        langHeight = lang.height(),
        langNumber = lang.length,
        i, j;
    for(i = langNumber - 1; i >= 0; i = i - 1){
        if($(lang[i]).hasClass("active")){
            continue;
        }
        $(lang[i]).css("z-index", i);
    }
    selectBoxLang.hover(function(){
        for(j = 0; j < langNumber; j = j + 1){
            $(lang[j]).stop(false, false).animate({
                "top": j * langHeight
            }, 1000 * 0.5);
        }
    }, function(){
        for(j = 0; j < langNumber; j = j + 1){
            $(lang[j]).stop(false, false).animate({
                "top": 0
            }, 1000 * 0.5);
        }
    });
    
    /*End Head Top*/
    /*Start Side Menu*/
    
    var buttonMenu = $(".navbar .small-screen .button"),
        sideMenu = $(".side-menu.overlay"),
        closeSideMenu = $(".side-menu.overlay .menu .top .close-icon"),
        dropDownElement = $(".side-menu.overlay .menu .item li .drop");
    $(".navbar .small-screen .button, .side-menu.overlay .menu .top .close-icon, .side-menu.overlay, .side-menu.overlay .menu .item li .drop").click(function(e){
        if(e.currentTarget == $(buttonMenu)[0]){
            sideMenu.fadeIn(1000 * 0.4).find(".menu").animate({
                "right": 0
            }, 1000 * 0.4);
            bodyContent.animate({
                "margin-right": "250px"
            }, 1000 * 0.4);
        } else if(e.currentTarget == $(closeSideMenu)[0]){
            $(this).parents(".menu").animate({
                "right": "-250px"
            }, 1000 * 0.4);
            bodyContent.animate({
                "margin-right": 0
            }, 1000 * 0.4);
            setTimeout(function(){
                sideMenu.fadeOut(1000 * 0.4);
            }, 1000 * 0.4);
        } else if(e.target == $(sideMenu)[0]){
            $(this).find(".menu").animate({
                "right": "-250px"
            }, 1000 * 0.4);
            bodyContent.animate({
                "margin-right": 0
            }, 1000 * 0.4);
            setTimeout(function(){
                sideMenu.fadeOut(1000 * 0.4);
            }, 1000 * 0.4);
        } else if(e.currentTarget == $(dropDownElement)[0]){
            e.preventDefault();
            $(this).next().slideToggle(1000 * 0.4);
        }
    });
    
    /*End Side Menu*/
    /*Start Navbar*/
    
    $(".navbar #search").click(function(e){
        e.preventDefault();
        $(".navbar .search-box").slideToggle(1000 * 0.2);
    });
    
    /*End Navbar*/
    /*Start Load Page*/

    windowPage.on("load", function(){
        $(".load-page").fadeOut(1000 * 0.4);
    });

    /*End Load Page*/
});