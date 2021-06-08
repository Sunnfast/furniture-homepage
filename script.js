// dynamic header, flavor text, and shop now

let dynamicDisplay =  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
let dynamicHeader = "Discover innovative \n ways to decorate"

dynamicHeaderText();
dynamicText();

// dynamic header
function dynamicHeaderText() {
const dynamicHeaderStyle = document.getElementById("dynamic-header").style;
document.getElementById("dynamic-header").classList = "item2";
document.getElementById("dynamic-header").innerText = dynamicHeader;
dynamicHeaderStyle.fontWeight = "600";
// dynamicHeaderStyle.border = "solid 2px black";
dynamicHeaderStyle.fontSize = "2em";
dynamicHeaderStyle.lineHeight = "1em";
dynamicHeaderStyle.paddingTop = "110px";
dynamicHeaderStyle.position = "absolute";
dynamicHeaderStyle.left = "925px";

}
// dynamic flavor text
// these are flex bc the parent node is flex!! [delete me]
function dynamicText() {
    const dynamicStyle = document.getElementById("dynamic-text").style;
    document.getElementById("dynamic-text").innerText = dynamicDisplay;
    dynamicStyle.color = "var(--darkGray)";
    dynamicStyle.lineHeight = '1.5em';
    dynamicStyle.fontFamily = 'Spartan';
    dynamicStyle.fontSize = "12px";
    dynamicStyle.position = "absolute";
    dynamicStyle.paddingTop = '225px';
    dynamicStyle.paddingRight = '40px';
    dynamicStyle.marginRight = '0px';
    dynamicStyle.left = "925px";
//     document.getElementById("dynamic-text").color = "gray";
//     document.getElementById("dynamic-text").fontSize = 12px;
}

// function shopLink() {

// }

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

// MEDIA QUERIES //
//               //


const smallerDevice = window.matchMedia("(max-width: 1330px)");


function handleDeviceChange(smallerDevice) {
    const mobileHeader = document.getElementById("dynamic-header");
    
    if (smallerDevice.matches) {
        mobileHeader.style.fontSize = "20px";
        mobileHeader.style.position = 'absolute';
        mobileHeader.style.paddingTop = '70%';
        mobileHeader.style.right = "1000px";
        document.body.style.backgroundColor = "pink";

    }
        
}
handleDeviceChange(smallerDevice);
smallerDevice.addListener(handleDeviceChange);

    

    
// https://github.com/riteessshh/room-website-homepage/blob/main/styles.css