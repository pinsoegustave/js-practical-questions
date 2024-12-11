const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');

const checkUsername = () => {
    let valid = false;

    const min = 3, max = 25

    const username = usernameEl.value.trim();
    if(!isRequired(username)) {
        showError(usernameEl, "Username can't be blank.");
    }
    else if (isBetween(username.length,min,max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    }
    else {
        showSuccess(usernameEl);
        valid = true
    }
    return valid;
};

const isRequired = value => value === '' ? false : true
const isBetween = (length, min, max) => length < min || length > max ? false : true

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
}

const showSuccess = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
})