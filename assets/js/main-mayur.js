/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// home button

document.addEventListener("DOMContentLoaded", function () {
  const homeButton = document.getElementById("homeButton");

  homeButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior
      location.reload(); // Reload the page
  });
});






// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

/*==================== ACCORDION SKILLS ====================*/
/* ==================== ACCORDION SKILLS ==================== */
const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  const itemClass = this.parentNode.className;

  for (const content of skillsContent) {
    content.classList.remove('skills__open');
    content.classList.add('skills__close');
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.classList.remove('skills__close');
    this.parentNode.classList.add('skills__open');
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});





// const skillsContent = document.getElementsByClassName('skills__content'),
//       skillsHeader = document.querySelectorAll('.skills__header')

// function toggleSkills(){
//     let itemClass = this.parentNode.className
    
//     for(i = 0; i < skillsContent.length; i++){
//         skillsContent[i].className = 'skills__content skills__close'
//     }
//     if(itemClass === 'skills__content skills__close'){
//         this.parentNode.className = 'skills__content skills__open'
//     }
// }

// skillsHeader.forEach((el) => {
//     el.addEventListener('click', toggleSkills)
// })

// experience

const educationTab = document.getElementById('education-tab');
const workTab = document.getElementById('work-tab');
const educationContent = document.getElementById('education-content');
const workContent = document.getElementById('work-content');

// Set "Education" as the default active tab and content
educationTab.classList.add('active');
educationContent.style.display = 'block';
workContent.style.display = 'none';

educationTab.addEventListener('click', () => {
    educationContent.style.display = 'block';
    workContent.style.display = 'none';
    educationTab.classList.add('active');
    workTab.classList.remove('active');
});

workTab.addEventListener('click', () => {
    educationContent.style.display = 'none';
    workContent.style.display = 'block';
    educationTab.classList.remove('active');
    workTab.classList.add('active');
});

document.querySelector('.bg-circle').addEventListener('mouseenter', function() {
  document.querySelector('.bg-circle').classList.add('hovered');
  document.querySelector('.bot-image').classList.add('hovered');
});

document.querySelector('.bot-image').addEventListener('mouseenter', function() {
  document.querySelector('.bg-circle').classList.add('hovered');
  document.querySelector('.bot-image').classList.add('hovered');
});

document.querySelector('.bg-circle').addEventListener('mouseleave', function() {
  document.querySelector('.bg-circle').classList.remove('hovered');
  document.querySelector('.bot-image').classList.remove('hovered');
});

document.querySelector('.bot-image').addEventListener('mouseleave', function() {
  document.querySelector('.bg-circle').classList.remove('hovered');
  document.querySelector('.bot-image').classList.remove('hovered');
});
