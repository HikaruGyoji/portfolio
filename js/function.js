// close the hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const navContentLinks = document.querySelectorAll("#nav-content a li");

  navContentLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      document.getElementById("nav-input").checked = false;
    });
  });
});
