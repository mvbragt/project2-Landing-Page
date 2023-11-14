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

//Define Global Variables

const navList = document.getElementById('navbar__list');
const main= document.querySelector('main');
const sectionList = document.querySelectorAll('section')

// Start Helper Functions
//create 4 sections and add to main
for(let i = 4; i <= 7; i++) {
    const newSection = document.createElement('section');
    newSection.id = `section${i}`;
    newSection.setAttribute('data-nav', `section ${i}`);
    newSection.innerHTML = ` 
            <div class="landing__container">
            <h2>Section ${i}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. 
            Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. 
            Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. 
            Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. 
            Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. 
            Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
            <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. 
            Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
            </div>`;
    main.appendChild(newSection);
}

// Create a topnav to every section
function createTopNavigation(){
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const navItem = document.createElement('li');
        const sectionId = section.id;
        const sectionDataNav = section.getAttribute('data-nav');

        navItem.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionDataNav}</a>`;
        navList.appendChild(navItem);
    })
}
createTopNavigation();



//set active class
window.onscroll = function() {
    sectionList.forEach(function(section){
        if (checkVisible(section)) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    })
}
function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


//add style to menu
const navListItem = document.querySelectorAll('.menu__link')
document.addEventListener('DOMContentLoaded', function () {
    navListItem.forEach(function(navItem) {
        navItem.addEventListener('click', function(){
            navItem.style.background = "aquamarine";
        })
    });
})
