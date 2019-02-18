jQuery(document).ready(function($) {
  $("body").on("click", ".nav_main_menus_button", function(e){
    e.preventDefault();
    $( this ).toggleClass("active");
  });
});
