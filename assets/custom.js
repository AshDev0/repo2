$(document).ready(function () {
  $(".slide-block-grid").slick({
    arrows: false,
    autoplay: false,
    slideToShow: 1,
    slideToScroll: 1,
  });
});

$(window).on("load", function () {
  $(".featured__slider__row").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
  });
});

$(window).on("load", function () {
  $(".main_images").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".thumb_images",
  });
  $(".thumb_images").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".main_images",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
  });
});

$(document).on("click", ".easytabs-tab-item", function () {
  $(this).toggleClass("tab-item-active");
  $(this).siblings(".easytabs-tab-item").removeClass("tab-item-active");
});

$(document).on("click", ".easytabs-tabs li", function () {
  let tabValue = $(this).data("tab");
  $(".easytabs-content-item").removeClass("content-item-active");
  $(".easytabs-contents")
    .find("[data-tab=" + tabValue + "]")
    .addClass("content-item-active");

  // $(".easytabs-content-item").addClass("content-item-active");
  // $(this).siblings(".easytabs-content-item").removeClass("content-item-active");
});

// $(document).on("click", ".accordion-content-head h3", function () {
//   let accValue = $(this).data("acc");
//   // $(".accordion-content-text")
//   //   .find("[data-acc=" + accValue + "]")
//   //   .toggleClass("acc-active");
//   // $(".accordion-content")
//   //   .find("[data-acc=" + accValue + "]")
//   //   .addClass("acc-active");
//   $(".accordion-content-text").addClass("acc-active");
//   $(this).siblings(".accordion-content-text").removeClass("acc-active");
// });

$(".accordion-content-head").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");

  let $this = $(this);
  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find(".accordion-content-text").removeClass("show");
    $this.parent().parent().find(".accordion-content-text").slideUp(350);
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

/*$(document).on("click", ".accordion-content-head h3", function () {
  $(".accordion-content-head").toggleClass("active");
  $(this).siblings(".accordion-content-head").removeClass("active");
});*/
