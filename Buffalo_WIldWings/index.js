var owl = document.querySelector('.owl-carousel');
  var options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  };
  var carousel = new OwlCarousel(owl, options);