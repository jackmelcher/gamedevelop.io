var side = document.getElementsByClassName("sidenav")[0];
var sidebutton = document.getElementsByClassName("sidenavbutton")[0];
function ToggleSide()
{
    if(side.style.display == "none" || side.style.display == "")
    {
        side.style.display = "block";
    }
    else
    {
        side.style.display = "none";
    }
}

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
        sidebutton.style.display = "none";
    }
}
mq.addListener(resizeSideNav);
