var side = document.getElementsByClassName("sidenav")[0];
var sidebutton = document.getElementsByClassName("sidenavbutton")[0];
var menuicon = document.getElementsByClassName("menuicon")[0];

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
        menuicon.classList.replace("fa-times","fa-bars");

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
            menuicon.classList.replace("fa-bars","fa-times");
        }
        else
        {
            side.style.display = "none";
            menuicon.classList.replace("fa-times","fa-bars");
        }
    }
}

function makeSidebar(){
    //console.log("Making Sidebar");
    
    var sidenav = document.getElementsByClassName("sidenav")[0];
    var divContainer;

    var pagenames =  ["beginner","industry","ip","pr","youtube","kickstarter"];
    var pagetitle = ["Beginner's Guide","The Computer and Video Game Industry","The Strength of Intellectual Property","Public Relations and Marketing","Building a Successful YouTube Channel","How to be successful at Kickstarter"];

    var beginnerSections = ["Overview","Start Small","Concepting","Managing Scope","Writing a Game Design Doc","Tools and Assets FAQs","How Experience affects Development","Recruiting Team Members","Production and Task Management","Cost of Development","Funding Options","Making a Business Plan","Marketing","Post Mortem"]
    var industrySections = ["Overview and Highlights of the Industry","Getting a Job in the Games Industry","Working in Game Testing","The Downside of Game Testing","Departments in a AAA Studio","Culture in the Game Industry","Unionization Efforts in the Industry"];

    var i;
    for(var j = 0; j < pagenames.length; j++)
    {
        divContainer = document.createElement("div");
        i = document.createElement("a");
        i.href = "guides/"+pagenames[j]+".html";
        i.innerHTML = pagetitle[j];
        i.classList.add("bold");
        //console.log(location.href.split("/").slice(-1));
        if(location.href.split("/").slice(-1) == pagenames[j]+".html"){
            i.classList.add("underline");
        }
        divContainer.appendChild(i);
        divContainer.appendChild(document.createElement("br"));
        divContainer.appendChild(document.createElement("br"));
        sidenav.appendChild(divContainer);
    }
}
