$(function () {
  $("#search").click(function () {
    $("#mainmenu").stop().animate({ marginRight: "168px" });
    $("#search").stop().animate({ width: "150px" });
  });
  $("#search").blur(function () {
    $("#mainmenu").animate({ marginRight: "50px" });
    $("#search").animate({ width: "1px" });
    $("#search").val("");
  });
  // setCufon();
});

// function setCufon() {
// 	Cufon.replace("h1, h2, h3");
// }

function selectMenu() {
  path = location.pathname;
  var flag = false;

  $(".mainmenu a").each(function (index) {
    $(this).addClass("noajax");
    if (encodeURI($(this).attr("href")) == path) {
      $(".mainmenu a").removeClass("selected ");
      $(this).addClass("selected");
      flag = true;
    }
  });

  if (!flag) $(".mainmenu a").removeClass("selected");
}

function scrollToTop() {
  $("html, body").animate({ scrollTop: 0 }, 600);
}

function handleSlider() {
  $(".group-slider").owlCarousel({
    singleItem: true,
    pagination: true,
    navigation: false,
    autoHeight: true,
    transitionStyle: "fade",
    afterMove: function () {
      $(".group-list ul li")
        .removeClass("active")
        .eq(this.owl.currentItem)
        .addClass("active");
      $("html, body").animate({ scrollTop: 0 }, 600);
    },
  });

  var featureSlider = $(".group-slider").data("owlCarousel");
  var navs = $(".group-list ul li");

  navs.click(function () {
    var current = $(this);
    navs.removeClass("active");
    current.addClass("active");
    featureSlider.goTo(current.index());
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
}

function handleFilter() {
  $(".home-filter ul li a").click(function () {
    $(".home-filter ul li").removeClass("active");
    $(this).parent().addClass("active");
  });
}

function handleMobilemenu() {
  $(".menu-icon a").click(function () {
    $("#mainmenu").toggleClass("close");
  });
}
function showhide() {
  $(".logos .partner:lt(8)").show();
  $(".showlogo").click(function () {
    $(".logos .partner").show();
    $(".hidelogo").show();
    $(".showlogo").hide();
  });
  $(".hidelogo").click(function () {
    $(".logos .partner").not(":lt(8)").hide();
    $(".showlogo").show();
    $(".hidelogo").hide();
  });
}
function footerlogo() {
  if ($(".solutions-main") !== undefined) {
    $(".footerlogofunc img").each(function (index) {
      if (index == 0) {
        $(this).attr("src", "/static/images/icon/global.png");
      }
      if (index == 1) {
        $(this).attr("src", "/static/images/icon/pledge.png");
      }
      if (index == 2) {
        $(this).attr("src", "/static/images/icon/certified.png");
      }
      if (index == 3) {
        $(this).attr("src", "/static/images/icon/giirs.png");
      }
      if (index == 4) {
        $(this).attr("src", "/static/images/icon/know.png");
      }
    });
  }
}
