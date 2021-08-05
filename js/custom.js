$(function(){

  var mixer = mixitup('.mixit_main');

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop()

    if(scrolling > 50 ){
       $(".back_to_top").fadeIn(800);
    }else{
        $(".back_to_top").fadeOut(800);
   }
});
$(".back_to_top").click(function(){
  $('html, body').animate({
      scrollTop:0
  }, 2000)
});

    $('.banner_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:".next",
        prevArrow:".prev",
        dots:true,
      });

      $('.test_slick').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 2000,
      });
        
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      });
            
        //animation scroll js
     var html_body = $('html, body');
     $('nav a').on('click', function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');    
  if (target.length) {
                 html_body.animate({
                     scrollTop: target.offset().top - 0
                 }, 1500,);
                 return false;
             }
         }
     });

});