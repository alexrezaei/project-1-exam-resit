const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject1");
const message = document.querySelector("#message");
const form = document.querySelector("#form");
const errorContainer = document.querySelector(".error-message");
const error = document.querySelectorAll(".error");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject1.value.trim();
    const messageValue = message.value.trim();
    const nameContainer = document.querySelector("#name-error");
    const subjectContainer = document.querySelector("#subject-error");
    const emailContainer = document.querySelector("#email-error");
    const messageContainer = document.querySelector("#message-error");
    if (fullNameValue === "" || fullNameValue === null) {
        nameContainer.innerHTML = `<p class="error">Full name must contain atleast 1 character<p>`;
    } else {
        nameContainer.innerHTML = ``;
    }
    if (validateEmail(emailValue) === false) {
        emailContainer.innerHTML = `<p class="error">Email is not valid<p>`;
    } else {
        emailContainer.innerHTML = "";
    }
    if (subjectValue === "" || subjectValue === null) {
        subjectContainer.innerHTML = `<p class="error">Subject must contain atleast 1 character</p>`;
    } else {
        subjectContainer.innerHTML = ``;
    }
    if (messageValue === "" || messageValue === null) {
        messageContainer.innerHTML = `<p class="error">Message must contain atleast 1 character</p>`;
    } else {
        messageContainer.innerHTML = "";
    }
});

const validateEmail = (email) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regex)) {
        return true;
    } else {
        return false;
    }
};
