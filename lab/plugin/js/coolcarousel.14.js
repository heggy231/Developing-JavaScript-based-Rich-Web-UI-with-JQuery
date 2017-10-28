
(function ($) {
  // anytime you are creating plug-in $.fn
  $.fn.coolcarousel = function (options){
    //defaults
    var configOptions = {width:200};

    //update default with options
    if(options){ $.extend({ width: 200}, options);}



    $(this).each(function () {
      var individualImageWidth = 600;

      var carouselWidth = 0; 


      // Create the markup
      var $viewportEl = $("<div id=\"cc_viewport\"></div>");
      // Carousel element
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

      // Add carousel to DOM
      $(this).append($viewportEl);

      // Get images
      var imagesAr = options.images;

      // Add image carousel
      // tell me what to do each one then 
      $(imagesAr).each(function (i) {
        // i is counter for each member of array
        // as we add img we are setting width plus carousel width
        var $thisImage = $("<img src=\"" + imagesAr[i] + " \">");
        $carouselEl.append($thisImage);
        
        setTimeout(function(){
        // 50 milisec stalling
          carouselWidth = parseInt(carouselWidth + $thisImage.width());
          // console.log(">>>>" + $thisImage.width());
          // setCarouselWidth
          $carouselEl.css("width", carouselWidth + "px");
        },parseInt(imagesAr.length * 90));
      });
      //set the navigation events
      $("#cc_navBar a[href='cc_next']").bind("click", function (e) {
        e.preventDefault();
        var carouselLeft = parseInt($("#carousel").css("left"));

        if(carouselLeft > -1500) {
          $("#carousel").css("left", carouselLeft - individualImageWidth);
        }
      });
    });
    return this;
  };
})(jQuery);

// $("#myPhotoCarousel").width() // 1078
// parseInt(imagesAr.length * 1.2)