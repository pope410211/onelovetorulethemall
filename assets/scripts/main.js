(function(){


$('.dropdown-toggle').click(function(){
  console.log("Click me one more time");
  $(this).toggleClass('icon open');
  $(this).parent().children('ul').toggleClass('d-none dropdown-menu');
});






})(window);
