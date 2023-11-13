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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

//build on what we already have.
    // So first add top navigation -- check
    // second add one section
    //make function out of it
    // then add new sections to navigation
    // then style

//Define Global Variables
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const  main= document.querySelector('main');


// Start Helper Functions
const newSection = document.createElement('section');
newSection.id = `section 4`;
newSection.setAttribute('data-nav', `section 4`);
newSection.innerHTML = ` 
            <div class="landing__container">
            <h2>Section 4</h2>
            <p>Content for Section 4</p>
            </div>`;
main.appendChild(newSection);




//Begin Main Functions
// Create a topnav to every section
function createTopNavigation(){
    sections.forEach((section) => {
        const navItem = document.createElement('li');
        const sectionId = section.id;
        const sectionDataNav = section.getAttribute('data-nav');

        navItem.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionDataNav}</a>`;
        navList.appendChild(navItem);
    })
}
createTopNavigation();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


//End Main Functions


//Begin Events


// Build menu 

// Scroll to section on link click

// Set sections as active


