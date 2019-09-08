$(document).ready(function() {
//navbar
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
	  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		document.getElementById("NavBar").style.display = "none";
	  } else {
		document.getElementById("NavBar").style.display = "block";
	  }
	}
})