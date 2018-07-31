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

};


window.onload = function() {
  onReady();
};


// $(window).scroll(function() {
//   if($(this).scrollTop()>650) {
//     $('.navmenu').addClass("sticky");
//   } else {
//     $('.navmenu').removeClass("sticky");
//   }
// });
