(function(){
"use strict";

$('.dropdown-toggle').click(function(){
  console.log("Click me one more time");
  $(this).parent().children('ul').toggleClass('d-none dropdown-menu');
  $(this).toggleClass('icon open');

});






})(window);
