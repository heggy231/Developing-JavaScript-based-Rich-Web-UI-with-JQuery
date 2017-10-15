# jQuery-Tutorial-by-LearnCode
 * jQuery tutorial for serious beginners
    - this includes excercise files for jQuery Tutorial for Beginners video series

## Lesson 1:
  * Learned basic structure of jQuery
  * Created template jQuery
    ex: always start with $(function() {

    	});
  * Animate using .slideUp .hide .toggle
  * Insert curly when using .css({ })
  * Style any {} as js object enter
  * .css value put it inside ""
    ex: .css( { color: "red"})
  * Multiple .css key value separate it with comma (,)
  * camelCase any time .css property has dash (-) or " "
    ex: $("#panel1").css({
    	  fontWeight: 'bold',
    	  "font-weight": 'normal'
    	});

## Lesson 2: 
  * Eventlistener 'click' in js
  	ex) $(#btn1).on('click', function() {
  			// do something when click happens
  			$(#panel1).fadeIn(200);
  		});
  * using .html to change text on the page
  * .slideToggle(200); animation when 'click' event -> triggers callback
  * .fadeIn(200) .fadeOut(200) use number always in parenthesis
  * .find('.panel-body') to search through html doc
  * 'hover' effect  .on('hover', function() { * do something * }); 
  *  chain methods
     ex) $("#panel1").slideUp(1000).delay(1000).slideDown(1000);

## Lesson 3:
  * Refactor repeating codes

- carousel step by step
http://www.my-html-codes.com/easy-jquery-carousel

- code: 
https://github.com/kaileeagray/learn_code_academy_jquery/tree/master/tutorial4 

- Learn to code video link:
https://www.youtube.com/watch?v=Cc3K2jDdKTo

## lesson 4: DOM traversal jQuery $('element')
refer to lesson4.html for code

$('li') // all
$('li').first() //one first li on page
$('li').last() //3 last one on page
$('li').first().hide() // hide one
$('li').first().show() // show one again
$('li').eq(0) // first index(eq)

- let's look at children
$('ul:first').children() // get ul's first children all li right under 
                         //  ul's first children level. no nested li shows
$('li:first').siblings() // first li siblings but not including itself
$('li:first').parent()   // first parent of li => ul
$('li').eq(4).parent()   // index 4th li => 1 then its parent => ul
$('li').eq(4).parent().parent().parent() // ul .list
$('li').eq(4).parent().parent().prev()  // three => prev() previous sibling
$("li").eq(4).parent().parent().prev().prev().next(); // back to three .next() 
                                                          next sibling
$('li:first').next() = $('li').first().next() // first li then next li => li.special

- use case of learning about Dom traversal with jQuery:

    hides next element sibling clicked on
      $(this).next().hide();

    removes next element
      $(this).next().remove();

    remove all siblings
      $(this).siblings().remove();

    add class .special, I didn't become special but all my siblings did
      $(this).siblings().addClass('special');                    

    remove myself .special if I have it than 
    add class .special to my siblings not including me
      $(this).removeClass('special'); 
      $(this).siblings().addClass('special');

    when add .special to parent; everyone gets it
       $(this).parent().addClass('special');
    
    closest .list and add .special : result <li class="list special">
       $(this).closest('.list').addClass('special');
    
    only descendent of clicked is matched
          $(this).find('li').addClass('special');

    $('.list').on('click', function() {
          // only the first element all under .list
          $(this).find('li').filter(':first').remove();
          // click any list => .find li, .filter down to only
          //  .special => remove
          $(this).find('li').filter('.special').remove();
    Note: .find() great it only looks at .list block => fast

    Other but not efficient way to do this: find .special in 
     entire page then remove.
          $('.special').remove();
    On the other when you use .filter; 
     Stay with element we are working with and find .special
      $(this).find('.special').remove();

  - .special is clicked; alert special 
        $('.special').on('click', function() {
          alert('special');
        });

  - if !.special; alert special
      $('li').on('click', function() {
          // hide that clicked element
        $(this).hide();
          // if clicked element = .special
          //  alert special
        if ( !$(this).is('.special') ) {
          alert('Not special');
        }
      });

  - hide only when .sublist direct child li
        $('.sublist li').on('click', function() {
          $(this).hide();
        });
  
  - when click on li but do something special 
    if parent().is('.sublist')

        $('li').on('click', function() {
          // do other things to all li's
          console.log('click on li');
          // if parent is .sublist then hide
          if($(this).parent().is('.sublist')) {
            $(this).hide();
          }
        });

## To rewatch DOM transverse
https://www.youtube.com/watch?v=LYKRkHSLE2E


# jQuery Tutorial #5 - Building a jQuery Tab Panel Widget
https://www.youtube.com/watch?v=1nWrIBB_bMA
- In this lesson, we're going to be building a jQuery Tab Panel Widget just like the ones you've undoubtedly seen all over.  There's nothing special about what we're going to build, but this lesson will help you get a great understanding of how to build things in jQuery.


## write a rough outline:
1. figure out which panel to show
2. hide current panel
3. show new panel

1. figure out which panel to show:
  - add rel="panel1" in tabs panel 1
    <body>
      <div class="tab-panels">
        <ul class="tabs">
          <!-- rel="panel1" points to div id="panel1" -->
          <li rel="panel1" class="active">panel1</li>

  - then under Script
      * when click on top panels add click event
      $('.tab-panels .tabs li').on('click', function() {
        
        // figure out which panel to show
        //  insert rel="panel1" in .tabs panel1 (rel html attrb)
        //  option to also use data-panelid="panel1"
        //  when I click on tab panel1 => grab div #panel1 
        // Note: this is multiple li under tab
        var panelToShow = $(this).attr('rel');
      
        // test it out
        alert(panelToShow); /* panel1 display rel="panel1"*/

2. hide current panel:

* hide current panel (which we have it active)
$('.tab-panels .tabs li').on('click', function() {
  $('.tab-panels .panel.active').slideUp(300);

* next add callback so it waits til panel gets slid up 
300 ms then it will fire up call back

        $('.tab-panels .panel.active').slideUp(300, function() {
          alert("done sliding");
        });

* add callback function to grab #panel2 and slide down
      - above .css .panel.active get display:block
        $('.tab-panels .panel.active').slideUp(300, function() {
      - try console $('#panel2').slideDown(300) >> you can see it sliding
          $('#'+panelToShow).slideDown(300);
        });

* now add on <div id="panel2" class="panel active">:
        $('.tab-panels .panel.active').slideUp(300, function() {
      - try console $('#panel2').slideDown(300) >> you can see it sliding

      - add active on #panel2
          $('#'+panelToShow).slideDown(300, function() {
      - $(this) refers to #panel2 since inside of callback function
            $(this).addClass('active');
          });

* Bug: we have not yet removed the class panel that sliding up:

  - remove .active from panel2 > once side down > add class .active to 
   current panel
          $(this).removeClass('active');
  - add active on #panel2, note: panelToShow = 
     ('.tab-panels .tabs li').attr('rel');  output: panel2 info from tab

          $('#'+panelToShow).slideDown(300, function() {
      
  - $(this) refers to #panel2 since inside of callback function
            $(this).addClass('active');
          });

* Bug tab panel should be active for currently selected panel-tab

    $('.tab-panels .tabs li').on('click', function() {
        // first remove assigned active class
        $('.tab-panels .tabs li.active').removeClass('active');
        // add 'active' to the currently clicked on tab

- Version that meets all requirements but clunky with callback hell:
<script>
$(function() {
  // when click on tabs
  $('.tab-panels .tabs li').on('click', function(){
    $('.tab-panels .tabs li.active').removeClass('active');
    $(this).addClass('active');

    // figure out which panel to show (rel is html custom attr)
    var panelToShow = $(this).attr('rel');

    // hides current panel 300 miliseconds (kinda fast speed)
    $('.tab-panels .panel.active').slideUp(300, function (){
      $(this).removeClass('active');

      $('#'+panelToShow).slideDown(300, function() {
        $(this).addClass('active');
      });
    });
  });


});
</script>

## Refactoring above code
* callback hell: whenever there is more than one nested callbacks.

<script>
 $('.tab-panels .panel.active').slideUp(300, function() {
   $(this).removeClass('active');

   $('#'+panelToShow).slideDown(300, function() {
     $(this).addClass('active');
   });

 });
</script>

- 1) Name callback function showNextPanel

<script>
 $('.tab-panels .panel.active').slideUp(300, function showNextPanel() {
   $(this).removeClass('active');

   $('#'+panelToShow).slideDown(300, function() {
     $(this).addClass('active');
   });

 });
</script>

- 2) Take it outisde of $('#'+panelToShow).slideUp(300);
<script>
$('.tab-panels .panel.active').slideUp(300);

function showNextPanel() {
   $(this).removeClass('active');

   $('#'+panelToShow).slideDown(300, function() {
     $(this).addClass('active');
   });
}
</script>

- 3) scalable coding: operate it so it only show/hide panel that was clicked on.

* 1. Add extra #panel5 thru #panel8:
      Note: bug: panel5 closes with panel1 since they are active even though we clicked only panel1 tab

* 2. find out which panel we are in:
$('.tab-panels .tabs li').on('click', function() { 
  // which .tab-panel we clicked on using .closest tab-panel it's part of

var panel = $(this).closest('.tab-panels');

* 3. update code with var panel:
- replace:
$('.tab-panels .tabs li.active').removeClass('active');

to:
panel.find('.tabs li.active').removeClass('active');

- replace:
$('.tab-panels .panel.active').slideUp(300, showNextPanel);

Summary now we are searching within existing panels' .tabs li.active

- variable naming 
when var $panel is jQuery selector add '$' to signify

- codepen version of image slider
<!-- https://codepen.io/heggy231/pen/vezNKMß -->


- https://lnkd.in/gezbZcr
#zIndex #stackingOrder #css

In order to apply the z-index property to an element, you must first apply a position value of relative, absolute, or fixed. 

https://medium.com/always-be-coding/abc-always-be-coding-d5f8051afce2

https://www.lynda.com/CSS-tutorials/Margin-page-layouts/569190/601600-4.html

- Lynda:Margin and page layouts:
https://www.lynda.com/CSS-tutorials/Margin-page-layouts/569190/601600-4.html

- Lynda: some great exercise files by Christina
http://jsfiddle.net/user/christinatruong/fiddles/

- background color with center text
http://jsfiddle.net/christinatruong/c04bb8v8/

- max-width concept
.content-wrap {
  <!-- max is 950px = 100% which makes the text wrap around. -->
  max-width: 950px;
  <!-- top/bottom left/right -->
  margin: 0 auto;
}

- margin or padding?
* margin: represents the area around an element

box Model
Draw box model with each properties labeled

1. margin = space outside of the element
2. border = display btwn padding and margin
3. padding = space inside of the element
4. content


- side note about obj
resource Part 2 Solutions
https://www.rithmschool.com/courses/javascript/javascript-objects-exercises

when you want to remove a object property
use delete keyword
<script> 
var AboutMe = 
{
 name: "heggy",
 age: 20

};

delete aboutMe.name;
</script>


## refer to an element 
<html>

<div id="keyPad">
    <div id="navBar"><a href="prev">Prev</a>|<a href="next">Next</a></div>
</div>

</html>

$("#keyPad a[href='next']")

- resource: https://www.w3schools.com/jquery/jquery_selectors.asp