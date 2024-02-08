const originalLinks = document.querySelectorAll('.originalLink');

// original link icon
originalLinks.forEach(link => {
    /*
    // console.log(link.innerText);
    const parsedUrl = new URL(link.innerText);

    parsedUrl.pathname = '/favicon.ico';
    const logoUrl = parsedUrl.href;
    link.querySelector('img').src = logoUrl;
    // console.log(logoUrl);
    */
    const logoUrl = `https://s2.googleusercontent.com/s2/favicons?domain=${link.innerText}`
    //    console.log(logoUrl);
    link.querySelector('img').src = logoUrl;
});