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

/**
 * Define Global Variables
 * 
*/
const sections =Array.from(document.getElementsByTagName("section"));
let list = document.getElementById("navbar__list");
let df = new DocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
for ( section of sections){
    const LiElement = document.createElement("li"); 
const link = document.createElement("a");
link.innerHTML= `<a class= "menu__link" href="#${section.id}"> ${section.dataset.nav}</a>`
link.classList.add("menu__link");
LiElement.appendChild(link);
df.append(LiElement);
}
list.append(df);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class "active" to section when near top of viewport
// Make sure that the section is in view port
function secInViewPort (x){
    let SecPos = x.getBoundingClientRect();
    return (SecPos.top >= -400 && SecPos.top <= 200);
}
//aplly active class to the section in view port only
function activeSec  (){
    for(section of sections){
    // make sure that the section is in view oprt    
    if (secInViewPort(section)){
        // Check if it contains activeClass or not.
        if(!section.classList.contains("activeClass")){
            // if it doesn"t have it .. add it
            section.classList.add("activeClass");
        }
    // If it is out the view port .. remove activeClass
    else{ 
        section.classList.remove("activeClass");
    }
        
    }
    }   
}
window.addEventListener("scroll",activeSec );

// Scroll to anchor ID using scrollTO event
list.addEventListener(click, (event) => {
    event.preventDefault();
    if (event.target.dataset.nav){
        document
        .getElementById(`${event.target.dataset.nav}`)
        .scrollIntoVeiw({behavior: "smooth"});
    }
});
    
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
LI = document.querySelectorAll('li');

function myFunction() {
    var x = document.querySelectorAll("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




