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

    var pagenames =  ["beginner","industry","ip","pr","youtube","kickstarter","tactics"];
    var pagetitle = ["Beginner's Guide","The Computer and Video Game Industry","The Strength of Intellectual Property","Public Relations and Marketing","Building a Successful YouTube Channel","How to be successful at Kickstarter","Indie Business Tactics"];

    var beginnerSections = ["Overview","Start Small","Concepting","Managing Scope","Writing a Game Design Doc","Tools and Assets FAQs","How Experience affects Development","Recruiting Team Members","Production and Task Management","Cost of Development","Funding Options","Making a Business Plan","Marketing","Post Mortem"]
    var beginnerids = ["overview","startsmall","concept","scope","gdd","tools","experience","team","production","cost","funding","business","marketing","postmortem"]

    var industrySections = ["Overview and Highlights of the Industry","Getting a Job in the Games Industry","Working in Game Testing","The Downside of Game Testing","Departments in a AAA Studio","Culture in the Game Industry","Unionization Efforts in the Industry"];
    var industryids = ["highlights","job","testing","testingcons","departments","culture","union"]

    var ipSections = ["Intellectual Property and Brands","Common Pitfalls in Development","Combating Game Dev Tunnel Vision","Creating a lasting Brand","Key Takeaways"];
    var ipids = ["ip","pitfalls","tunnel","brand","takeaways"]

    var prSections = ["What you need to do for Marketing","Goals of a Landing Page","Importance of A/B Testing and Analytics","How to Get Help from News Outlets","Tips for working with Media Outlets"];
    var prids = ["plan","landing","analytics","news","media"]

    var youtubeSections = ["Types of Gaming Channels","Growing Your Channel","Handling Comments Section","Monetizing Your Channel"];
    var youtubeids = ["type","grow","comments","monetize"]

    var kickstarterSections = ["Before You Start a Campaign","Tips for Success","How Much Money Do I Ask for?"]
    var kickstarterids = ["research","tips","money"]

    var tacticsSections = ["Community Growth","Funding","Marketing","Networking","Business","Market Expansion"]
    var tacticsids = ["community","funding","marketing","networking","business","expansion"]

    var i;
    for(var j = 0; j < pagenames.length; j++)
    {
        divContainer = document.createElement("div");
        i = document.createElement("a");
        i.href = "guides/"+pagenames[j]+".html";
        i.innerHTML = pagetitle[j];
        i.classList.add("bold");
        //console.log(location.href.split("/").slice(-1));
        if(location.href.split("/").slice(-1) == pagenames[j]+".html")
        {
            i.classList.add("underline");
        }
        
        divContainer.appendChild(i);

        if(location.href.split("/").slice(-1) == "beginner.html" && pagenames[j]+".html" == "beginner.html")
        {
            makeAnchors(divContainer, beginnerids, beginnerSections);
        }
        if(location.href.split("/").slice(-1) == "industry.html" && pagenames[j]+".html" == "industry.html")
        {
            makeAnchors(divContainer, industryids, industrySections);
        }
        if(location.href.split("/").slice(-1) == "ip.html" && pagenames[j]+".html" == "ip.html")
        {
            makeAnchors(divContainer, ipids, ipSections);
        }
        if(location.href.split("/").slice(-1) == "pr.html" && pagenames[j]+".html" == "pr.html")
        {
            makeAnchors(divContainer, prids, prSections);
        }
        if(location.href.split("/").slice(-1) == "youtube.html" && pagenames[j]+".html" == "youtube.html")
        {
            makeAnchors(divContainer, youtubeids, youtubeSections);
        }
        if(location.href.split("/").slice(-1) == "kickstarter.html" && pagenames[j]+".html" == "kickstarter.html")
        {
            makeAnchors(divContainer, kickstarterids, kickstarterSections);
        }
        if(location.href.split("/").slice(-1) == "tactics.html" && pagenames[j]+".html" == "tactics.html")
        {
            makeAnchors(divContainer, tacticsids, tacticsSections);
        }
        divContainer.classList.add("guidelink");
        sidenav.appendChild(divContainer);
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
