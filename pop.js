
var form1 = document.getElementById("edit-form");

var formbtn = document.getElementById("request");

var close1 = document.getElementsByClassName("close1")[0];


formbtn.onclick = function() {
  form1.style.display = "block";
}

function close() {
  form1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
