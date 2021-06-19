// mobile navbar
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// dynamic header, flavor text, and shop now

let dynamicDisplay =  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
let dynamicHeader = "Discover innovative \n ways to decorate"


dynamicHeaderText();
dynamicText();


// dynamic header default desktop view
function dynamicHeaderText() {
const dynamicHeaderStyle = document.getElementById("dynamic-header").style;
document.getElementById("dynamic-header").classList = "item2";
document.getElementById("dynamic-header").innerText = dynamicHeader;
dynamicHeaderStyle.fontWeight = "600";
dynamicHeaderStyle.fontSize = "2.5em";
dynamicHeaderStyle.lineHeight = "1em";

dynamicHeaderStyle.paddingTop = "3em";
dynamicHeaderStyle.paddingLeft = "2.75em";
dynamicHeaderStyle.paddingRight = "2em";

dynamicHeaderStyle.marginRight = "3em";
dynamicHeaderStyle.minWidth = "90%";

}
// dynamic flavor text default desktop view
function dynamicText() {
    const dynamicStyle = document.getElementById("dynamic-text").style;
    document.getElementById("dynamic-text").classList = "item2";
    document.getElementById("dynamic-text").innerText = dynamicDisplay;
    dynamicStyle.color = "var(--darkGray)";
    dynamicStyle.lineHeight = '1.5em';
    dynamicStyle.fontFamily = 'Spartan';
    dynamicStyle.fontSize = "1.5rem";

    dynamicStyle.marginRight = "2em";
    dynamicStyle.marginLeft = "6em";

    dynamicStyle.paddingLeft = "3em";
    dynamicStyle.paddingTop = "2em";
    dynamicStyle.paddingRight = "2.5em";
}



// use buttons to rotate through gallery in one direction 
// STATUS: CURRENTLY NOT FUNCTIONING

// right button = forward;
const rightB = document.querySelector("#right-btn");
rightB.addEventListener('click', rotateGalleryRight);

// left button = back;
const leftB = document.querySelector("#left-btn");
leftB.addEventListener('click', rotateGalleryLeft);



// rotating image gallery forward via array cycling -- CURRENTLY NOT FUNCTIONING
  let galleryForward = ["images/gallery/desktop-image-hero-1.jpg", "images/gallery/desktop-image-hero-2.jpg", "images/gallery/desktop-image-hero-3.jpg"];
    function rotateGalleryRight() {
        let i = 0;
        document.getElementById("#rotating-image").src = galleryForward[i];
        i++;
        // loops back around to the start if you continue clicking through
        if (i >= galleryForward.length) {
            i = 0;
        }
    };

    let galleryBackward = ["images/gallery/desktop-image-hero-1.jpg", "images/gallery/desktop-image-hero-3.jpg", "images/gallery/desktop-image-hero-2.jpg"];
    function rotateGalleryLeft() {
        let i = 0;
        document.getElementById("#rotating-image").src = "images\gallery\desktop-image-hero-1.jpg";
        //galleryBackward[i];
        i++;
        // loops back around to the start if you continue clicking through
        if (i >= galleryBackward.length) {
            i = 0;
        }
    };

    
rotateGalleryLeft();



    

    
// https://github.com/riteessshh/room-website-homepage/blob/main/styles.css