let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let mainIcon = document.getElementById('mainLogo');


function main() {


  navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    mainIcon.classList.toggle('hidden');
  });

  const navSoftware = document.getElementById("showSoftware");
  const navProfessional = document.getElementById("showProfessional");
  const navCourses = document.getElementById("showCourses");

  const articleSoftware = document.getElementById("software");
  const articleProfessional = document.getElementById("professional");
  const articleCourses = document.getElementById("courses");




  navSoftware.onclick = function () {
    articleSoftware.style.display = "block";
    articleProfessional.style.display = "none";
    articleCourses.style.display = "none";
  }

  navProfessional.onclick = function () {
    articleProfessional.style.display = "block";
    articleSoftware.style.display = "none";
    articleCourses.style.display = "none";
  }

  navCourses.onclick = function () {
    articleCourses.style.display = "block";
    articleProfessional.style.display = "none";
    articleSoftware.style.display = "none";
  }




}


window.onload = function () {
  main();
}


// Visibility of studies




