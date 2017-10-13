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

