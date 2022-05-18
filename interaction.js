var maxwidth = window.screen.width 
var desktopnav = document.querySelector("#firstnav") ; 
var mobilenav = document.querySelector("#secondnav") ; 



console.log( "Your script reads correctly.");
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  // remove hide class from top nav
  //add hide class to desktop nav
  //create if conditional statement for if the screen shrinks
  if (maxwidth < 600)
  {console.log("hello")
  desktopnav.classList.add('hide'); 
  mobilenav.classList.remove('hide');      


}