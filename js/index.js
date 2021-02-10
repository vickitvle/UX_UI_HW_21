$("#mydivheader").on("click", function(){
  $("#dropDown").slideToggle();
});

window.onscroll = function() {
  menu();
}

function menu() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('#mydiv').fadeIn();

  } else {
    $('#mydiv').fadeOut();
  }
}