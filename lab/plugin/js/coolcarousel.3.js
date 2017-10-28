(function ($) {
  $.fn.coolcarousel = function (options){
    //defaults
    var configOptions = {width:200};

    //update default with options
    if(options){ $.extend({ width: 200}, options);}

    $(this).each(function () {
      var individualImageWidth = 600;

      // Create the markup
      // to make the id unique, add cc to on top
      // we are now oing to comment out img section in html
      var $viewportEl = $("<div id=\"cc_viewport\"></div>");
      var $carouselEl = $("<div id=\"cc_carousel\"></div>");


      // viewport element includes carousel Make it a child
      $viewportEl.html($carouselEl);


      var $keypadEl = $("<div id=\"cc_keypad\"></div>");
      var $navbarEl = $("<div id=\"cc_navBar\"></div>");
      var $navAnchorEl = $("<a href=\"cc_prev\">Prev</a>|<a href=\"cc_next\">Next</a>");

      // stitching up start from inner most element to outer
      // .html means inner html 
      $navbarEl.html($navAnchorEl);
      $keypadEl.html($navbarEl);

      // here we use .html whatever you have append since 
      //  we already have nested element inside of each
      //  $carouselEl and $keypadEl
      $carouselEl.append($keypadEl);
      $(this).append($viewportEl);
/*
      $("#carousel")
      .width(individualImageWidth * 4)
      .css("position", "absolute");
    
      // picture frame viewPort overflowing width 600 hides
      $("#viewPort").css("overflow", "hidden");

      $("#keyPad a[href='next']").on("click", function (e) {
          // when click href link doesn't open disable href function
          e.preventDefault();
          // every click 600px width movement
          // find the #carousel left position, parseInt() to get rid of px and get int
          var carouselLeftCoordinate = parseInt($("#carousel").css("left")); 

          // when you arrive at the last pic, $("#carousel").css("left") is -1800px
          //  therefore if -1500 px you are not yet at the last pic left position
          if(carouselLeftCoordinate > -1500){
              $("#carousel").css("left", carouselLeftCoordinate - individualImageWidth);
          }
      });

      $("#keyPad a[href='prev']").on("click", function (e) {
          // when click href link doesn't open disable href function
          e.preventDefault();
          // every click 600 width movement
          // find the #carousel left position
          var carouselLeftCoordinate = parseInt($("#carousel").css("left")); 

          // when you arrive at the last pic, $("#carousel").css("left") is 0 px
          //  pic is moving to left to show more pic from right it needs to be less than 
          if(carouselLeftCoordinate < 0){
              $("#carousel").css("left", carouselLeftCoordinate + individualImageWidth);
          }
      });
      */
    });
    return this;
  };
      
})(jQuery);