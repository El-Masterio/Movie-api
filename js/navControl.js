/// Set nav default width ( to hide it)
let outerNavWidth = $(".nav-container").outerWidth();
$(".side-navbar").css("left", `-${outerNavWidth}px`);

//////////////// Nav control (Open Nav)
export function navOpen() {
  $(".side-navbar").animate({ left: 0 }, 1000);

  $(".icon-open").removeClass("fa-bars");
  $(".icon-open").addClass("fa-x");
  for (let i = 0; i < 6; i++) {
    $(".nav-links li")
      .eq(i)
      .animate({ top: 0 }, (i + 5) * 100);
  }
}

//////////////// Nav control (Close Nav)
export function navClose() {
  $(".side-navbar").animate({ left: `-${outerNavWidth}px` }, 1000);
  $(".icon-open").removeClass("fa-x");
  $(".icon-open").addClass("fa-bars");
  $(".nav-links > *").animate({ top: 250 }, 1000);
}

/////////// Toggle Open and Close Nav on click

$(".icon-open").on("click", function () {
  if ($(".side-navbar").css("left") !== "0px") {
    navOpen();
  } else {
    navClose();
  }
});
