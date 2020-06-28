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