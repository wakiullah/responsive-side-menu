let navBtn = document.querySelector('.nav-button');
let sideMenu = document.querySelector('.side-menu');
navBtn.addEventListener("click", function(e) {

    sideMenu.classList.toggle('toggle');

    navBtn.classList.toggle('cross')


})