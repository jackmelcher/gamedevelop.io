var div = document.querySelector('.footer');
if(div == null){div= document.createElement("div");}
div= document.createElement("div");
var a1 = document.createElement("a");
var a2 = document.createElement("a");
var a3 = document.createElement("p");

div.className = "footer";
a1.href = "about.html";
a1.innerHTML = "About";
div.appendChild(a1);
a2.href = "suggestion.html";
a2.innerHTML = "Make a Suggestion";
div.appendChild(a2);
var br = document.createElement("br")
div.appendChild(br);
a3.innerHTML = "© 2020 GameDevelop.io All rights reserved. All trademarks and registered trademarks are the property of their respective owners.";
div.appendChild(a3);
document.body.appendChild(div);

checkHeight();
window.addEventListener('resize', checkHeight());
window.addEventListener('onload', checkHeight());
window.addEventListener('onpageshow', checkHeight());

function checkHeight(){
    //console.log(document.body.scrollHeight+" scroll v body "+window.innerHeight);
    if(document.body.scrollHeight > window.innerHeight){
        div.style.position = "relative";
    }
    else{div.style.position = "absolute";}
}