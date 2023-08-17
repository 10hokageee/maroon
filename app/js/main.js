$(function(){
  $(".benefits__items").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  prevArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#arrow"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#arrow"></use></svg></button>'
  });

  

   $(".catalog-top__btn").on("click", function(){

    $(".catalog-top__filter").toggleClass("catalog-top__filter--show");

    $(".catalog-top__btn").toggleClass("catalog-top__btn--active");
    
   });


   $(window).on("scroll", function (){
    if ($(window).scrollTop() > 50) {
      $(".header-wrapper").addClass("header-fixed");
    } else {
      $(".header-wrapper").removeClass("header-fixed");
    }
  });

  $(".header-menu__link, .logo, .footer__logo").on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr("href");
    let scrollPoint = $(scrollAnchor).offset().top;
  
    if (scrollAnchor === "#home") {
      scrollPoint = scrollPoint;
  
    }
  
    $("html, body").animate (
      {
        scrollTop: scrollPoint,
      },
      1500
    );
  return false;
  });
});

