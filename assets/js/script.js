// Page Loader
const spinnerEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () =>{
    spinnerEl.style.opacity = 0;

    setTimeout(() =>{
        spinnerEl.style.display = 'none';
    },200);
})


// Contact form
const form = document.querySelector('.contact-form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const messages = document.querySelectorAll('.message');

const error = (input, message) => {
    input.nextElementSibling.classList.add('error');
    input.nextElementSibling.textContent = message;
};

const success = (input) => {
    input.nextElementSibling.classList.remove('error');
};

const checkRequireFields = (inputArr) => {
    inputArr.forEach(input => {
        if (input.value.trim() === "") {
            error(input, `${input.id} is Required`);
        }
    });
};

const checkLength = (input, min) => {
    if (input.value.trim().length < min) {
        error(input, `${input.id} must be at least ${min} characters`);
    } else {
        success(input);
    }
};

const checkEmail = (input) => {
    const regEx =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regEx.test(input.value.trim())) {
        success(input);
    } else {
        error(input, 'Email is not valid');
    }
};

form.addEventListener('submit', e => {
    checkLength(username, 2);
    checkLength(subject, 2);
    checkLength(message, 10);
    checkEmail(email);
    checkRequireFields([username, email, subject, message]);

    const notValid = Array.from(messages).find(message => {
        return message.classList.contains("error");
    });

    notValid && e.preventDefault();
});
// End of Contact from