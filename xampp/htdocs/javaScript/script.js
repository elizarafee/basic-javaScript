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