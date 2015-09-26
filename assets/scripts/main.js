(function(){
"use strict";

$('.dropdown-toggle').click(function(){
  console.log("Click me one more time");
  $(this).parent().children('ul').toggleClass('dropdown-menu');

});






})(window);
