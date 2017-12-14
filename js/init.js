jQuery('.nav-hover').click(function(){
  jQuery('nav-hover').removeClass('active');
  jQuery(this).addClass('active');
});

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

jQuery('.nav-hover').click(function(){
  jQuery('nav-hover').removeClass('active');
  jQuery(this).addClass('active');
});
