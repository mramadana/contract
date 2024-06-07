$(window).on("load", function () {
  $(".loader")
    .delay(400)
    .fadeOut(1000)
});


$(document).ready(function () {
  "use strict";
  let isRtl = $('html[lang="ar"]').length > 0;
  // when click to responsive btn show ul and overlay
  $(".nav-btn").click(function () {
    $(this).addClass("active");
    $(".nav-links").addClass("active");
    $(".nav-overlay").addClass("show");
  });

  // when i click on overlay remove class show and remove ul

  $(".nav-overlay").click(function () {
    $(".nav-btn").removeClass("active");
    $(".nav-links").removeClass("active");
    $(".nav-overlay").removeClass("show");
  });

  // select-2
  $(".select-plugin").select2({
    dir: isRtl ? "rtl" : "ltr",
  });

  $(".select").select2({
    dir: isRtl ? "rtl" : "ltr",
  });

  $(".without-search").select2({
    minimumResultsForSearch: Infinity,
  });

  $(':input[type="number"]').on("input", function () {
    var nonNumReg = /[^0-9]/g;
    $(this).val($(this).val().replace(nonNumReg, ""));
  });

  $(".main-slider").owlCarousel({
    items: 1,
    loop: true,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 10,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar,
  });

  function startProgressBar() {
    // apply keyframe animation
    $(".slide-progress").css({
      width: "100%",
      transition: "width 5000ms",
    });
  }

  function resetProgressBar() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s",
    });
  }

  // start to brand slider
  $(".brand-slider").owlCarousel({
    items: 5,
    loop: true,
    rtl: isRtl,
    margin: 10,
    nav: false,
    stagePadding: 0,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
      320: {
        items: 2,
      },

      768: {
        items: 3,
      },

      1024: {
        items: 4,
      },

      1440: {
        items: 5,
      },
    },
  });

  // js footer
  if ($(window).width() <= 768) {
    $(".foot-title").click(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".links").stop().slideUp();
      } else {
        $(".foot-title").removeClass("active");
        $(".footer-links .links").stop().slideUp();
        $(this).addClass("active");
        $(this).siblings(".links").stop().slideDown();
      }
    });
  }

  // fixed nav
  let isFixed = function () {
    if ($(".banner-header").length > 0) {
      $(".header").addClass("with-banner");
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
    } else {
      // $(".header").removeClass("with-banner");
      // $(".top-header").addClass("unactive");
    }

    if ($(window).scrollTop() > 50) {
      $(".header").addClass("fixed");
      $(".top-header").addClass("unactive");

    } else {
      $(".header").removeClass("fixed");
      $(".top-header").removeClass("unactive");

    }
  };

  isFixed();

  $(window).on("scroll", function () {
    isFixed();
  });


});
