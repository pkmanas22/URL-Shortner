const cube = document.querySelector('.cube');
const lightTheme = document.querySelector('.light');
const darkTheme = document.querySelector('.dark');
const root = document.documentElement;

function forLightTheme() {
    root.classList.add('light');
    cube.style.opacity = '0.1';     // opacity for  light mode in cube 
    lightTheme.style.background = "#144EE3";
    darkTheme.style.background = "";
}

function forDarkTheme() {
    root.classList.remove('light')
    cube.style.opacity = '1';
    darkTheme.style.background = "#144EE3";
    lightTheme.style.background = "";
}

lightTheme.addEventListener('click', () => {
    forLightTheme();
    localStorage.setItem('theme','light');
})

darkTheme.addEventListener('click', () => {
    forDarkTheme();
    localStorage.setItem('theme','dark');
})


if (localStorage.getItem('theme') == 'light') {
    forLightTheme();
}
else {
    forDarkTheme();
}