// same as $(document).ready(function(){});
$(function() {

  $(".nextLink").on("click", function(event) {
    var currentActiveImage = $(".image-shown");
    // .next() moves to next element
    var nextActiveImage = currentActiveImage.next();

    // if no more next image
    if(nextActiveImage.length === 0){
      // loop back to the first image
      nextActiveImage = $(".carousel-inner img").first();
    }
    // First remove img shown > add img-hidden to hide >css("z-index",-10) hidden img go to last stacked order. 

    currentActiveImage
    .removeClass("image-shown")
    .addClass("image-hidden")
    .css("z-index", -10);
    // make image show > remove hidden class > img top of z-index layer stack
    nextActiveImage.addClass("image-shown")
    .removeClass("image-hidden")
    .css("z-index", 20);

    // now reset the .css z-index for all img inside of .carousel-inner. not currentActiveImage, nextActiveImage
    $(".carousel-inner img")
    .not([currentActiveImage, nextActiveImage]).css("z-index",1);

    // prevent href of nextLink/prevLink route me to any pg
    event.preventDefault();
  });

  $(".previousLink").on("click", function(event) {

    var currentActiveImage = $(".image-shown");

    event.preventDefault();
  });

});