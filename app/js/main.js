$(function(){
  $(".benefits__items").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  prevArrow: '<button type="button" class="slick-next"><svg><use xlink:href="images/sprite.svg#arrow"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-prev"><svg><use xlink:href="images/sprite.svg#arrow"></use></svg></button>'
  });
});