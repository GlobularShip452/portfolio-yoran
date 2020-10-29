console.log("The theme change script has started up and is now working.");

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('Option Clicked!', mode);
        setTheme(mode)
    });
};

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = '../style.css';
    } else if (mode == 'blue') {
        document.getElementById('theme-style').href = '../colors/blue.css';
    } else if (mode == 'green') {
        document.getElementById('theme-style').href = '../colors/green.css';
    } else if (mode == 'purple') {
        document.getElementById('theme-style').href = '../colors/purple.css';
    }

    localStorage.setItem('theme', mode);
}