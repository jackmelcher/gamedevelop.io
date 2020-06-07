var side = document.getElementsByClassName("sidenav")[0];
var sidebutton = document.getElementsByClassName("sidenavbutton")[0];
var menuicon = document.getElementsByClassName("menuicon")[0];

var mq = window.matchMedia("(max-width: 768px)");

makeSidebar();

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

function secjump(id)
{
    document.getElementById(id).scrollIntoView();
    window.scrollBy(0,-64);
    ToggleSide();
}

function makeAnchors(divContainer,ids,sections)
{
    var list = document.createElement("ul");
    list.classList.add("nobullets");
    var litem;
    var anchor;
    for(var a = 0; a < ids.length; a++)
    {
        litem = document.createElement("li");
        anchor = document.createElement("a");
        anchor.href = "javascript:secjump(\""+ids[a]+"\")";
        anchor.innerHTML = sections[a];
        litem.appendChild(anchor);
        list.appendChild(litem);
    }
    divContainer.appendChild(list);
}

function makeSidebar()
{
    var sidenav = document.getElementsByClassName("sidenav")[0];
    var fileName = location.href.split("/").slice(-1).toString(); 
    var pages =  ["beginner","industry","ip","pr","youtube","kickstarter","tactics"];
    var pagetitle = ["Beginner's Guide","The Computer and Video Game Industry","The Strength of Intellectual Property","Public Relations and Marketing","Building a Successful YouTube Channel","How to be successful at Kickstarter","Indie Business Tactics"];

    for(var j = 0; j < pages.length; j++)
    {
        var divContainer = document.createElement("div");
        var a = document.createElement("a");
        a.href = "guides/"+pages[j]+".html";
        a.innerHTML = pagetitle[j];
        a.classList.add("bold");
        divContainer.appendChild(a);
        if(fileName.includes(pages[j]))
        {
            a.classList.add("underline");
            var h3s = document.getElementsByTagName("h3");
            var sections = [];
            var ids = [];
            for (var i = 0; i < h3s.length; i++)
            {
                ids.push(h3s[i].parentElement.id);
                sections.push(h3s[i].innerHTML);
            }
            makeAnchors(divContainer, ids, sections);
        }
        divContainer.classList.add("guidelink");
        sidenav.appendChild(divContainer);
    }
}