function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "topmenu") {
    x.className += " responsive";
  } else {
    x.className = "topmenu";
  }
}
