$(function(){
		$("#nav").load(navFunction());
		$("#nav1").load(navFunction2());
		$("#nav2").load(navFunction3());
		$("#nav3").load(navFunction4());
		$("#officeNav").load(navFunction5());
		$("#footer").load(footFunction3());
});

function navFunction() {
	return "nav.html";
}

function navFunction3() {
	return "nav2.php";
}



function navFunction2() {
	return "nav1.html";
}
function navFunction4() {
	return "nav3.html";
}

function navFunction5() {
	return "nav.php";
}

function footFunction3() {
	return "../common/footer.html";
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
function goBack() {
	window.history.back();
  }

  function openWin() {
	window.open("../js/Assignment 01_2020.pdf");
  }
