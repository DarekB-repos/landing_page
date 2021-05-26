function myFunction() {
  console.log("Clicked")
  var x = document.getElementById("topnav");
  if (x.className === "topmenu") {
    x.className += " responsive";
  } else {
    x.className = "topmenu";
  }
}

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 150) {
	    $(".nav-color").css("background" , "rgba(94, 99, 99, 0.59)");
	  }

	  else{
		  $(".nav-color").css("background" , "transparent");  	
	  }
  })
})