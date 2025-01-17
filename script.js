$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //slide-up-scripte

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //togle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //Typing animation script...

  var typed = new Typed(".typing ", {
    strings: [
      "Software Developer",
      "Cyber Security Researcher",
      "Hacker",
      "Entrepreneur",
      "Web Designer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //owl carousel scripte

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
