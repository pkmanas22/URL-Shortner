const dropdownMenu = document.querySelector(".dropdown-menu");
const logoutDiv = document.querySelector(".logout");
const mobLogoutDiv = document.querySelector("#mobLogout");
const caretIcon = document.querySelector('#caretIcon');

const settingImg = document.querySelector('.settingImg');
const settingDiv = document.querySelector('.setting-div');

// drop down action
dropdownMenu.addEventListener("click", () => {
    const activeStatus = logoutDiv.classList.contains('active')
    // console.log("clicked");
    if (activeStatus) {
        logoutDiv.classList.remove("active");
        caretIcon.style.transform = "rotate(0deg)";
    } else {
        logoutDiv.classList.add("active");
        caretIcon.style.transform = "rotate(-180deg)";
    }
})

logoutDiv.addEventListener("click", () => {
    // console.log("logout ");
    logoutDiv.classList.remove("active");
    caretIcon.style.transform = "rotate(0deg)";
})

// mobile drop down
settingImg.addEventListener('click', () => {
    const mactiveStatus = settingDiv.classList.contains('active')
    // console.log("clicked");
    if (mactiveStatus) {
        settingDiv.classList.remove("active");
    } else {
        settingDiv.classList.add("active");
    }
})
mobLogoutDiv.addEventListener("click", () => {
    // console.log("Mobile logout ");
    settingDiv.classList.remove("active");
})
