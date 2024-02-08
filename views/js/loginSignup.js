const login = document.body.querySelector('.login');
const register = document.body.querySelectorAll('.register');
const closes = document.body.querySelectorAll('.crossmark');

function loginMethod() {
    document.body.querySelector('#loginDiv').style.display = 'block';
    document.body.querySelector('#signupDiv').style.display = 'none';
}

function signupMethod() {
    document.body.querySelector('#loginDiv').style.display = 'none';
    document.body.querySelector('#signupDiv').style.display = 'block';
}

closes.forEach(elem => {
    elem.addEventListener('click', () => {
        document.body.querySelector('#loginDiv').style.display = 'none';
        document.body.querySelector('#signupDiv').style.display = 'none';
    })
});