jQuery('.nav-hover').click(function(){
    jQuery('nav-hover').removeClass('active');
    jQuery(this).addClass('active');
  });

  jQuery ('a.orderbutton').click(function(){
    alert("Your order is being processed.")
  });

  (function($){
    $(function(){
  
      $('.button-collapse').sideNav();
      $('.parallax').parallax();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space