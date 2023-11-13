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
    // second add one section -- check
    //make function out of it -- check
    // then add new sections to navigation
    // then style

//Define Global Variables
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
const  main= document.querySelector('main');


// Start Helper Functions
//create 4 sections and add to main
for(let i = 4; i <= 7; i++) {
    const newSection = document.createElement('section');
    newSection.id = `section${i}`;
    newSection.setAttribute('data-nav', `section ${i}`);
    newSection.innerHTML = ` 
            <div class="landing__container">
            <h2>Section ${i}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.
Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
            </div>`;
    main.appendChild(newSection);
}




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


