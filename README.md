# Developing-JavaScript-based-Rich-Web-UI-with-JQuery
UCSC ext jquery focus class note

Toggling Demo: 
https://thirsty-crown.glitch.me/

photo slider previous (prev), next (next) using jQuery, html, css
https://living-supermarket.glitch.me/

- if you click on header open it nicely

- Animation:  Move from point a to point b over period of time - fundamental of graphics over screen.

jQuery is all about DOM - 

.show() - it has a better experience, by default animation built into it.  expands 300 ms.

- Note: advance mode of animation.
.animate(properties, [duration], [easing], [callback])

easing: grphical property, go fast and slow down

graphical curve:  ease in and ease out 
ex; car speed starts and car speeds up

hair animation: maya - s/w, nVdia - h/w, 

no matter what original val is: left: '50px'
                                height: '20px'

jQuery shines here. callback happens after the animation is done.  At the end of the animation, do something.

change the duration : 30 sec (30000)

EX) 
Chart.js

material design effects by google

http://www.material-ui.com/#/customization/themes

opacity: "0" <- transparent

delete something it is moving away from your list.
left: '50px' // element moves to left
opacity: "0" // gone
when visible opacity: "1", if you want it to 

AJAX feature: microSoft introduced it. 
Google used Map
stitching in the map

pg 41 of 51
data looks like object
{ text: "Hi"} // data we are sending as data
dataType: we are expecting what type of data we expect from
  server.

if you tell it is html, jQuery will parse return data for you.

    $.get({
      url: "text.txt"
    });


http protocol
1) get/post
- get me resource from server
- post (before you give me the resource, you decide what request you will give me)


Anotomy of URL:
http: <= protocol

// 
www.something.com <= domain (host) of our server location. 
        (For our example
            htdoc <= domain)
            - it is assume :80 is default port
            - index.html <= default directory
//

XYZ <= subdirectory

? <= begining of query

? K = V (Query Parameter consists of Key: Value pair)  

if you have multiple query parameter
? K = V & K2 = V2 // this is get type of request It is visible in URL

in Post, it is not visible in URL
POST has invisible header how file is tranported
        body (your message)

For Post, you do'nt put the query in the URL string but put it inside of body.
For Get, you put the query in the URL

How do you make sure it is secure? Post method encrypted so people don't see it.
The other reason people go for POST: we are not sending anything therefore,
  webserver have no limit.  We are using Get string.  It has 4,000 character for URL string limit.

.ajx(setting)

- success(data, textStatus) - standard way to know postiviely or negatively. Server side network protocol, give a number: when htpp is made there is a lifeCycle.  Status of call:
http status code- this code server sends back.  send a call and you get a response, it is success.  sucess code: 200 response.

- error - server side error code, if error page tend to get branded.  error code: 400 (no site, not found)
500 server side error

- complete: no matter what happens just time out, if the server has not triggered; 
ex of complete: single page app, there is no page onload- we do'nt want to lose what we are seeing.  At the end of network call I should get rid of the swirl icon put away.  the common process for error and success task is used for complete.

How is complete is for our usecase?  not that server has timed out, 

- Week4:
javaScript JSON key value in world of JS we need 
{'name': 'value'}

- why we add quote inside json object?
  key could be javascript keyword therefore make it into 'string'
  Douglous Crocker

  http://json.parser.online.fr/ - json validator

- Advance topic: creating jQuery plugin
https://plugins.jquery.com/?s=pagination

2 wayt to create Using Plugin:
1) jQuery namespace 
- thing that goes directly to jQuery
jQuery.myThing 
have it available to $.myPluginHeggy
- not on selector directly on $
slide pg 48 of 51

2) $("...") is selector .foo() jQeury method

- HW 1 answer session
<script>
        $(".master").bind("click", function(event){
            // $("master") all master this is targeted this
            // jQuery .show() 
            //  $(this).next().show();
            
            // console.log($(this).next().css("display"));

            var detailDisplayState = $(this).next().css("display");
// if it is collapsed
            if(detailDisplayState === "none") {
              $(this).next().show();
            } else {
              $(this).next().hide();
            }

        });

</script>

- refactor to DRY

<script>
        $(".master").bind("click", function(event){
            // $("master") all master this is targeted this
            // jQuery .show() 
            //  $(this).next().show();
            
            // console.log($(this).next().css("display"));

            var detailDisplayState = $(this).next().css("display");
            var $detailElement = $(this).next();
// if it is collapsed
            if(detailDisplayState === "none") { //collapsed
              $detailElement.show();
            } else {
              $detailElement.hide();
            }

        });
</script>

- how do you grab first ".detail"?
$(".detail").first()

$(".detail").first().innerHeight(); and $(".detail").first().outerHeight(); are the same

$(".detail").first().outerHeight(0);

$(".detail").first().css("display", "block"); // shows up

// when display set to block; height has to be there

set overflow: scroll; to 
height: 25px;
display: block;
overflow: scroll;

$(".detail").first().css("padding");
// he added padding: 5px

// interested in padding bottom/top vertical for panel detail
$(".detail").first().css("padding-bottom");
$(".detail").first().css("padding-top");

<script>
 $(".master").bind("click", function(event){
            // $("master") all master this is targeted this
            // jQuery .show() 
            //  $(this).next().show();
            
            // console.log($(this).next().css("display"));

            var detailDisplayState = $(this).next().css("display");
            var $detailElement = $(this).next();
// if it is collapsed
            if(detailDisplayState === "none") { //collapsed
            // show in 5 sec
              $detailElement.show(8000);
            } else {
              $detailElement.hide();
            }

        });
</script>


function that takes out only number
parseInt();

- version with height 
<script>
/**
 *  - Include jQuery library file (Heggy: added inside of heading)
 * 
 *  - Using css, hide the detail paragraph
 *    identified by 'detail' class, from each row (Heggy: added display none on .detail)
 *
 *  - Using JavaScript and jQuery, add a click event handler
 *    to each element identified by class 'master'. The
 *    handler function will show/hide the detail paragraph
 *    for the clicked master in a toggle manner.
 */

// No need document.ready

// ?? view requirement why use class?  
// - view how they look
// apply view logic to multiple Element
// class is generated by the style requirement
// this element need same look and feel to other nextElementSibling
// - class is part of attrib of html Element
// - common to multiple Elements
// id: unique, unique look and feel/ identify differently


        // click on master, attach 
        // option1: $(".master").on("click") <-attach click event

        $(".master").bind("click", function(event){
            // $("master") all master this is targeted this
            // jQuery .show() 
            //  $(this).next().show();
            
            // console.log($(this).next().css("display"));

            var detailDisplayState = $(this).next().css("display");
            var $detailElement = $(this).next();
// if it is collapsed
            if(detailDisplayState === "none") { //collapsed

            
              // parseInt to get rid of px of 50px 
              var topPadding = parseInt($detailElement.css("padding-top"));
              var bottomPadding = parseInt($detailElement.css("padding-bottom"));
              var paragraphHeight = parseInt($detailElement.height());

              // rendered height
              var thisTotalHeight = topPadding + bottomPadding + paragraphHeight;

              // close it back up
              $detailElement.height(0);
              // show in 5 sec
            //   $detailElement.show(5000);
            //   or 
              $detailElement.css("display","block");

              // expand it using .animate() easing
              $detailElement.animate({height: thisTotalHeight}, 300);
            } else {
              $detailElement.hide();
            }

        });


</script>

-  } else {
                $detailElement
                    .animate({height: thisTotalHeight}, 0)
                    .css("display", "none");
refactor since it is not waiting for display none for else

- refactor

- Final 
Single pg view. 
user sees things as you click 
-if you pick limited >
- if you click comprehensive >
- comprehensive > personal detail form
  after finish submit > just show thank you!

- + Add More person 1, person 2, person 3 : you can limit 5 people to add

- calendar jQuery, jQueryUI calendar plugin

- top part: Plan > comprehensive > personal detail is bread crumb
- links are hot- bread crums you go directly 
- clicking back will take you back also, you are loading previous pg


## dont call it page/screen as view
- moving from one screen from another how dynamically I can
* how to make it work.
- date picker jQuery Ui > demo links
** go to api documentation: 
try auto complete widget

- when we say absolute in html
css means it is relatve to its body - in relation to body absolute works
* if you do'nt have any element set to relatve then the body is 
  * now all element to relative to body
body by default has a postion relative
cc_carousel abosolute relative to body.
it will start(0,0) top left
we will bring someone inbtwween viewport position relative
- then img will look at the viewport and have a absolute 

- web component: inlining css with javascript: 
