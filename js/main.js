

//FQA click function

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//wow
new WOW().init();


//toggler

'use strict';

document.querySelector('.toggle')
        .addEventListener('click', function() {
  this.classList.toggle('activate');
});