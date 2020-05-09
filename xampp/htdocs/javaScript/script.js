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
