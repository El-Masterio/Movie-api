// This is animation for the movie cards
export function hoverIn() {
  // To add the animation class to img
  $(this).find($(".contentCard img")).addClass("animation");

  // To animate the Title of Overlay
  $(this).find($("#content .overlay-title")).removeClass("animate__fadeOutUp");
  $(this).find($("#content .overlay-title")).addClass("animate__fadeInDown");

  // To animate the description of Overlay
  $(this).find($("#content .overlay-desc")).removeClass("animate__rollOut");
  $(this).find($("#content .overlay-desc")).addClass("animate__rollIn");

  // To animate the date of Overlay
  $(this)
    .find($("#content .overlay-date "))
    .removeClass("animate__slideOutLeft");
  $(this).find($("#content .overlay-date  ")).addClass("animate__slideInLeft");

  // To animate the icons of Overlay
  $(this)
    .find($("#content .overlay-icons i "))
    .removeClass("animate__fadeOutDown");
  $(this).find($("#content .overlay-icons i  ")).addClass("animate__fadeInUp");

  // To animate the rating of Overlay
  $(this)
    .find($("#content .overlay-rating "))
    .removeClass("animate__zoomOutDown");
  $(this).find($("#content .overlay-rating  ")).addClass("animate__zoomInUp");

  //   console.log(1);
}

// This is just to remove the classes we added and add a new animation on mouse leave (in other words to make the animation get repeated)
export function hoverOut() {
  // remove animation from img
  $(this).find($(".contentCard img")).removeClass("animation");

  // Title
  $(this).find($("#content .overlay-title")).removeClass("animate__fadeInDown");
  $(this).find($("#content .overlay-title")).addClass("animate__fadeOutUp");

  //description
  $(this).find($("#content .overlay-desc")).removeClass("animate__rollIn");
  $(this).find($("#content .overlay-desc")).addClass("animate__rollOut");

  // To animate the date of Overlay
  $(this)
    .find($("#content .overlay-date  "))
    .removeClass("animate__slideInLeft");
  $(this).find($("#content .overlay-date ")).addClass("animate__slideOutLeft");

  // icons
  $(this)
    .find($("#content .overlay-icons i "))
    .removeClass("animate__fadeInUp");
  $(this)
    .find($("#content .overlay-icons i "))
    .addClass("animate__fadeOutDown");

  // rating
  $(this).find($("#content .overlay-rating ")).removeClass("animate__zoomInUp");
  $(this)
    .find($("#content .overlay-rating  "))
    .addClass("animate__zoomOutDown");

  //   console.log(0);
}
