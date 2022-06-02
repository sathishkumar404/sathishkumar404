$(window).load(function() {

    $('#carousel').flexslider({
        animation: "slide",
        controlNav: true,
        animationLoop: false,
        slideshow: true,
        itemWidth: 380,
        itemMargin: 30,
        asNavFor: '#slider',
        touch:true,
        mousewheel: true, 
        controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
      });

  
})