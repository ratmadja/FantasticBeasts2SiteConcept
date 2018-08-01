function onReady() {

  //JQuery for Jump-to-element
  //Will only work if href of <a> matches id of element to jump to

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -100
        }, 1000);
        return false;
      }
    }
  });



  //JQuery for changing CSS property on user scroll

  $(document).ready(function(){
              var scroll_pos = 0;
              $(document).scroll(function() {
                  scroll_pos = $(this).scrollTop();
                  if(scroll_pos > 5) {
                      $(".fixedNav").css('background-color', 'hsla(0, 0%, 0%, 0.5)');
                  } else {
                      $(".fixedNav").css('background-color', 'hsla(0, 0%, 0%, 0)');
                  }
              });
          });

};


window.onload = function() {
  onReady();
};
