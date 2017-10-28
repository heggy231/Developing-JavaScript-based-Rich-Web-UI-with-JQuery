// important to see the strucuture of final html 
/* <div id="myPhotoCarousel">
    <div id="cc_viewport">
      <div id="cc_carousel">
        <div id="cc_keypad">
          <div id="cc_navBar">
            <a href="cc_prev" prev<="" a="">|</a>
            <a href="cc_next">Next</a>
*/

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
      // Add Carousel to DOM
      $carouselEl.append($keypadEl);

      // Get images
      var imagesArr = options.images;
      $(imagesArr).each(function (i) {
        // i is counter for each member of array
        var $thisImage = $("<img src=\"" + imagesArr[i] + " \">");
        $carouselEl.append($thisImage);

        // thisImage.width(); gets the width of imgage recalculating carousel width
        carouselWidth = carouselWidth + $thisImage.width();

        console.log($thisImage.width()); // NAN

      });
      // this is first image of the array



      //Install carousel
      // $(this) refers to user's id=myPhotoCarousel
      $(this).append($viewportEl);

    });
    return this;
  };
      
})(jQuery);