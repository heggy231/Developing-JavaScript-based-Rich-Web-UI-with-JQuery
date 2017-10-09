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