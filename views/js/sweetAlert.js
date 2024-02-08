function deleteConfirmation(shortId) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.value) {
            // User clicked "Yes", perform the deletion or follow the link
            window.location.href = '/url/delete/' + shortId;
        }
    });
}

function confirmLogout() {
    Swal.fire({
        title: 'Logout',
        text: 'Are you sure you want to logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout'
    }).then((result) => {
        if (result.isConfirmed) {
            // User clicked "Yes", perform logout
            window.location.href = '/logout';
        }
    });
}

function showLoginAlert() {
    Swal.fire({
        title: 'Login Required',
        text: 'Please login or register to use the URL shortener.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login',
        cancelButtonText: 'Register',
        showCloseButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            loginMethod();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            signupMethod()
        }
    });
}