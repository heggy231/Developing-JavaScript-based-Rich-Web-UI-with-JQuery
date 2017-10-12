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

## lesson 4: DOM traversal
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

- use case of learning about Dom tra

                                                          