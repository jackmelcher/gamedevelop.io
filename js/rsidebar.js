var side = document.getElementsByClassName("sidenav")[0];
var sidebutton = document.getElementsByClassName("sidenavbutton")[0];
var menuicon = document.getElementsByClassName("menuicon")[0];
menuicon.classList.replace("fa-bars","fa-filter");

var mq = window.matchMedia("(max-width: 768px)");
function resizeSideNav(mq)
{
    if(mq.matches)
    {
        side.style.display = "none";
        sidebutton.style.display = "inline-block";
    }
    else
    {
        side.style.display = "block";
        menuicon.classList.replace("fa-times","fa-filter");
    }
}
mq.addListener(resizeSideNav);

function ToggleSide()
{
    if(mq.matches)
    {
        if(side.style.display == "none" || side.style.display == "")
        {
            side.style.display = "block";
            menuicon.classList.replace("fa-filter","fa-times");
            document.body.style.overflow = "hidden";
        }
        else
        {
            side.style.display = "none";
            menuicon.classList.replace("fa-times","fa-filter");
            document.body.style.overflow = "";
        }
    }
}