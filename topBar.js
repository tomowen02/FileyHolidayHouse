
function myFunction() {
  var x = document.getElementById("main-nav-list");
  if (x.className === "nav-list") {
    x.className += " responsive";
  } else {
    x.className = "nav-list";
  }
}