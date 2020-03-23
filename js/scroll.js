let upbutton =
  '<div class="scroll">' +
  '<button class="btn btn-success">' +
  '<i class="fa fa-arrow-circle-up" aria-hidden="true"></i>Do góry' +
  "</button>" +
  "</div>";

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showTopButton() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.querySelector(".scroll").style.display = "block";
  } else {
    document.querySelector(".scroll").style.display = "none";
  }
}

elem = document.getElementById("up-button");
elem.innerHTML = upbutton;
elem.addEventListener("click", goToTop);
window.onscroll = function() {
  showTopButton();
};
