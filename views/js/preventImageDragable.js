const allImgs = document.querySelectorAll('img');

// prevent image dragable
allImgs.forEach(img => {
    img.addEventListener("dragstart", function (event) {
        event.preventDefault();
    })
    img.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    })
});
