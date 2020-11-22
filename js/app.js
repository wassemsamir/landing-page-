/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Navigation variables 
const   navList = document.getElementById('navbar__list');
// sections variables 
const   sections= document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// navigation bulider #987535
const navBuilder = () => {
    let navLi ='';

    sections.forEach(section => {
        // menu list virables 
        const sectionID = section.id;
        const sectionData = section.dataset.nav;

        navLi += `<li><a class="menu__link" style="color:red;" href="#${sectionID}" >${sectionData}</a></li>`;
        

    });

    // append the navigation to the HTML file 
    navList.innerHTML=navLi;
};
// invoke the navigation builder 
navBuilder();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click


// Set sections as active

var topButton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function buttonFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
