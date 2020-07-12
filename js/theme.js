// The Settings button
var setting = document.getElementsByClassName("settingsnav")[0];

function ToggleSettings()
{
    if(setting.style.display == "none" || setting.style.display == "")
    {
        setting.style.display = "block";
    }
    else
    {
        setting.style.display = "none";
    }
}

// Theme stuff
var themetext = document.getElementById("themetext");
function toggleTheme () {
    const htmlTag = document.getElementsByTagName("html")[0]
    if (htmlTag.hasAttribute("data-theme")) {
        htmlTag.removeAttribute("data-theme");
        localStorage.removeItem("site-theme");
        themetext.textContent = "Light Mode:";
    }
    else{
        htmlTag.setAttribute("data-theme", "dark");
        localStorage.setItem("site-theme", "dark");
        themetext.textContent = "Dark Mode:";
    }
}

var toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", toggleTheme);

function applyInitialTheme () {
    const theme = window.localStorage.getItem("site-theme")
    if (theme !== null) {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.setAttribute("data-theme", theme)
        toggle.checked = true;
    }
}
applyInitialTheme();

