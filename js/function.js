document.addEventListener("DOMContentLoaded", function () {
  const navContentLinks = document.querySelectorAll("#nav-content li a");

  navContentLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      document.getElementById("nav-input").checked = false;
    });
  });
});
