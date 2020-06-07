var div = document.querySelector('.footer');
if(div == null){div= document.createElement("div");}
div= document.createElement("div");
var a1 = document.createElement("a");
var a2 = document.createElement("a");
var a3 = document.createElement("p");

div.className = "footer";
a1.href = "about.html";
a1.textContent = "About";
div.appendChild(a1);
a2.href = "suggestion.html";
a2.textContent = "Make a Suggestion";
div.appendChild(a2);
var br = document.createElement("br")
div.appendChild(br);
a3.textContent = "© 2020 GameDevelop.io All rights reserved. All trademarks and registered trademarks are the property of their respective owners.";
div.appendChild(a3);
document.body.appendChild(div);

checkHeight();
window.addEventListener('resize', checkHeight());

//turn into a media query or a flexbox
function checkHeight(){
    //console.log(document.body.scrollHeight+" scroll v body "+window.innerHeight);
    if(document.body.scrollHeight > window.innerHeight){
        document.documentElement.style.height = "auto";
    }
    else{document.querySelector("html").style.height = "100%";}
}