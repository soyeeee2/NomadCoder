$(document).ready(function () {
    $(".sec-kg").slick({});
  
    $(".sec-r1").slick({
      dots: true,
      asNavFor: ".sec-r2 > .content-wrap"
    });
  
    $(".sec-r2 > .content-wrap").slick({
      asNavFor: ".sec-r1"
    });

    $(".benefit-slider").slick({
      dots: true,
      prevArrow:'<i class="prev-arrow fa-solid fa-angle-left"></i>',
      nextArrow:'<i class="next-arrow fa-solid fa-angle-right"></i>',
    });

    $(".sec-trend .hashtag").click(function(){
      var indexNum = $(this).index()
      $(this).addClass("active")
      $(this).siblings().removeClass("active")

      $(".sec-trend .img-wrap").eq(indexNum).addClass("active")
      $(".sec-trend .img-wrap").eq(indexNum).siblings().removeClass("active")
    });

    $(".sec-location .slider-location").slick({
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
    });


    $(".sec-sns .slider-sns").slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 5,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    
    $('.sec-sns').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $(".sec-sns .bar-box").eq(nextSlide).addClass("active")
      $(".sec-sns .bar-box").eq(nextSlide).siblings().removeClass("active")
    });

    $(".slider-support").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow:'<i class="prev-arrow fa-solid fa-angle-left"></i>',
      nextArrow:'<i class="next-arrow fa-solid fa-angle-right"></i>',
      variableWidth: true,
    });

    $(".up-btn").click(function(){
      $("html,body").animate({
        "scrollTop" : "0"
      },500)
    });
  });
  

$(window).scroll(function(){
  var thisScrollTop = $(this).scrollTop();
  if(thisScrollTop < 100){
    $(".up-btn").removeClass("active")
  } else{
    $(".up-btn").addClass("active")
  }
});