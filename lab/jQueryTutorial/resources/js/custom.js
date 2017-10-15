// same as $(document).ready(function(){});
//  $(function() {});
$(function() {

  $(".nextLink").on("click", function(event) {
    var currentActiveImage = $(".image-shown");
    // .next() moves to next element
    var nextActiveImage = currentActiveImage.next();

    // if no more next image
    if(nextActiveImage.length === 0) {
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
    var nextActiveImage = currentActiveImage.prev();

    // If at the first image (no more .prev())
    if(nextActiveImage.length === 0) {
      // loop back to last img so we can keep calling .prev()
      nextActiveImage = $(".carousel-inner img").last();
    }

    currentActiveImage
    .removeClass("image-shown")
    .addClass("image-hidden")
    .css("z-index", -10);

    nextActiveImage
    .addClass("image-shown")
    .removeClass("image-hidden")
    .css("z-index", 20);

    $(".carousel-inner img")
    .not([currentActiveImage, nextActiveImage])
    .css("z-index",1);

    event.preventDefault();
  });

});

// .image-shown
// {
//   display: inline-block;
// }
// .image-hidden
// {
//   display: none;
// }
// .carousel-inner
// {
//   width: 500px;
//   height: 400px;
//   /* container is 500x400px but img is biggger add position: relative, img to be 100%*/
//   position: relative;
//   float: left;
// }
// /* what ever img inside of div of .carousel-inner will have
// same width/height of .carousel-inner */
// .carousel-inner img
// {
//   width: 100%;
//   height: 100%;
//   border-radius: 5px;
// }
// /* all three container .carousel-inner .previousLink, .nextLink are floating */
// .previousLink, .nextLink
// {
//   float:left;
//   margin-top: 190px;
// }
// .previousLink
// {
//   margin-right: 50px;
// }
// .nextLink
// {
//   margin-left: 50px;
// }