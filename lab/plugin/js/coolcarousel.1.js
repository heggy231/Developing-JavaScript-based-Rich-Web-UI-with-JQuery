(function ($) {
  $.fn.coolcarousel = function (options){
    //defaults
    var configOptions = {width:200};

    //update default with options
    if(options){ $.extend({ width: 200}, options);}

    $(this).each(function () {
      var individualImageWidth = 600;
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
    })

    return this;
  };
      
})(jQuery);