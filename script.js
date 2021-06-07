// dyanmic text

let dyanmicDisplay =  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
let dynamicHeader = "Discover innovative \n ways to decorate"

dynamicHeaderText();
dynamicText();


function dynamicHeaderText() {
const dynamicHeaderStyle = document.getElementById("dynamic-header").style;
document.getElementById("dynamic-header").innerText = dynamicHeader;
dynamicHeaderStyle.fontWeight = "600";
// dynamicHeaderStyle.border = "solid 2px black";
dynamicHeaderStyle.fontSize = "2em";
dynamicHeaderStyle.lineHeight = "1em";
dynamicHeaderStyle.paddingTop = "110px";
dynamicHeaderStyle.position = "absolute";
dynamicHeaderStyle.left = "925px";

}

// these are flex bc the parent node is flex!! [delete me]
function dynamicText() {
    const dynamicStyle = document.getElementById("dynamic-text").style;
    document.getElementById("dynamic-text").innerText = dyanmicDisplay;
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
