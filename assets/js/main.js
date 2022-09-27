var menu = document.querySelector('.menu')
var sidebar = document.querySelector('.sidebar')
var mainContent = document.querySelector('.main--content')

menu.onclick = function() {
    sidebar.classList.toggle('active')
    mainContent.classList.toggle('active')
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function logout(){
  document.location.href="homepage.html"
}

function logoutt(){
  document.location.href="homepage.html"
}