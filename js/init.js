jQuery('.nav-hover').click(function(){
  jQuery('nav-hover').removeClass('active');
  jQuery(this).addClass('active');
});

(function($){
  $(function(){

  jQuery ('a.orderbutton').click(function(){
    alert("Your order is being processed.")
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space

jQuery('.nav-hover').click(function(){
  jQuery('nav-hover').removeClass('active');
  jQuery(this).addClass('active');
});
