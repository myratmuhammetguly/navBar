//classList - show/get all class list
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.menu');

navToggle.addEventListener('click', function () {
   //console.log(menuBar.classList); 
   //console.log(menuBar.classList.contains('random'));
//    if (navMenu.classList.contains('show')) {
//     navMenu.classList.remove('show');
//    } else {
//     navMenu.classList.add('show');
//    }
   navMenu.classList.toggle('show');
});