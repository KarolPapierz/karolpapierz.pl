
localStorage.setItem('theme', 'theme-light');
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme(){
    const githubImage = document.getElementById("githubImage");
    const emailImage = document.getElementById("emailImage");
    const resumeImage = document.getElementById("resumeImage");
    if (localStorage.getItem('theme') == 'theme-dark'){
        setTheme('theme-light');
        githubImage.style = "";
        emailImage.style = "width:32px; height:32px;";
        resumeImage.style = "width:32px; height:32px;";
    } else {
        setTheme('theme-dark');
        githubImage.style = "filter: invert(1);";
        emailImage.style = "width:32px; height:32px;filter: invert(1);";
        resumeImage.style = "width:32px; height:32px;filter: invert(1);";
    }
}
