// Form Validation Logic
const form = document.getElementById("contact-form");
const submitButton = form.querySelector("button[type='submit']");

const fields = {
    "first-name": {
        element: document.getElementById("first-name"),
        error: document.getElementById("first-name-error"),
        validate: value => value.trim() !== "" && /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(value),
    },
    "last-name": {
        element: document.getElementById("last-name"),
        error: document.getElementById("last-name-error"),
        validate: value => value.trim() !== "" && /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(value),
    },
    "email": {
        element: document.getElementById("email"),
        error: document.getElementById("email-error"),
        validate: value => value.trim() !== "" && /.+@.+\..+/.test(value),
    },
    "query-type": {
        elements: document.getElementsByName("query-type[]"),
        error: document.getElementById("query-type-error"),
        validate: elements => Array.from(elements).some(el => el.checked),
    },
    "message": {
        element: document.getElementById("message"),
        error: document.getElementById("message-error"),
        validate: value => value.trim() !== "",
    },
    "consent": {
        element: document.getElementById("consent"),
        error: document.getElementById("consent-error"),
        validate: el => el.checked,
    },
};

function validateForm() {
    let valid = true;

    Object.keys(fields).forEach(key => {
        const field = fields[key];
        if (field.element) {
            const value = field.element.value;
            const isValid = field.validate(value);
            field.error.style.display = isValid ? "none" : "block";
            valid = valid && isValid;
        } else if (field.elements) {
            const isValid = field.validate(field.elements);
            field.error.style.display = isValid ? "none" : "block";
            valid = valid && isValid;
        }
    });

    if (valid) {
        const successMessage = document.getElementById("form-success");
        successMessage.style.display = "block";
        form.reset();
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    }

    return valid;
}

submitButton.addEventListener("click", event => {
    event.preventDefault();
    validateForm();
});
