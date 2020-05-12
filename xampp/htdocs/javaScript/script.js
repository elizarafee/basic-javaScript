var date = new Date();
var a = document.querySelector('#role');
a.innerHTML = "<h1>I'm starting JavaScript on " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + "</h1>";



//  For accessing and changing attribute there are 4 methods: hasAttr, getAttr, setAttr, removeAttr
// hasAttr checks is it available and returns boolean
// getAttr returns the value of the attr
// setAttr checks if the attribute exists then changes the value otherwise add a new attr
// removeAttr removes the attribute

const CTA = document.querySelector(".note a");

if(CTA.hasAttribute("target")){
    console.log(CTA.getAttribute("target"));
}else{
    CTA.setAttribute("target", "_blank");
}
console.log(CTA.attributes);



// Adding new fig caption to image 
//  usable functions : 
//  createElement() for creating Element
//  createTextNode() for creating  text Node
//  appendClild() for placing one child node inside another
const FEATURED = document.querySelector(".image-fig");
const THEIMAGE = FEATURED.querySelector("img");
var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figCaption");
captionElement.append(altText);
FEATURED.append(captionElement);
THEIMAGE.setAttribute("alt", "");

// Apply iline CSS
document.querySelector(".text h1").style.color = "red";
document.querySelector(".text h1").style.backgroundColor = "black";
document.querySelector(".text h2").style.cssText = "color: yellow; background-color: red; padding: 1em;";
document.querySelector(".text h3").setAttribute("style", "color: orange; background-color: purple; font-size: 3rem");
// Inline CSS is opinionated. so best practice is to create custom CSS file thenuse JS to manage those


// Trigger functions with event handler

const A = document.querySelector(".bote h1");

const B = document.querySelector(".sectionh1");

A.classList.remove("hide");
B.classList.add("hide");

// After clicking on the link the page should not go on the top so we'll add e as a perameter and have to add e.preventDefault() in the function
function reveal(e){
    e.preventDefault();
    A.classList.toggle("hide");
    B.classList.toggle("hide");
}

A.onclick = reveal;
B.onclick = reveal;