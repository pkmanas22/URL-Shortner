document.addEventListener("DOMContentLoaded", function () {
    const msgCancel = document.getElementById("msgCancel");

    const displayMessage = document.querySelector(".display-message");

    msgCancel.addEventListener("click", function () {
        displayMessage.classList.add("animation");

        setTimeout(function () {
            displayMessage.style.display = "none";
        }, 2400);
    });
});