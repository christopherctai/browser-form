/* 
LOGIC 

I need to get each of the inputs. 

Whenever the input field is affected (new typing etc. check the input for validation)
If the input field is good, then give it a good class 
If the input field is not good, then give it an error class and error message 

Do this for ALL inputs. 
-each input has different reasons for why it could be wrong 
-make a separate function for each input field? 



*/

const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zip');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

email.addEventListener('input', () => {
    checkEmailInput()
});
country.addEventListener('input', () => {
    checkCountryInput()
})
zipcode.addEventListener('input', () => {
    checkZipcodeInput()
})
password.addEventListener('input', () => {
    checkPasswordInput();
})
passwordConfirmation.addEventListener('input', () => {
    checkPasswordConfirmationInput();
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkAllInputs(); 
})


function checkAllInputs() {
    checkEmailInput();
    checkCountryInput();
    checkZipcodeInput();
    checkPasswordInput();
    checkPasswordConfirmationInput();
}

function checkCountryInput() {
    const countryValue = country.value.trim(); 
    const countryNotValid = {
        noCountry: "You must include a country!",
        tooLong: "Your country doesn't exist! Too long",
        tooShort: "Your country is probably longer than 1 character"
    }
    if (countryValue === '') {
        setErrorFor(country, countryNotValid.noCountry);
    } else if (countryValue.length > 50) {
        setErrorFor(country, countryNotValid.tooLong);
    } else if (countryValue.length < 2) {
        setErrorFor(country, countryNotValid.tooShort);
    } else {
        setSuccessFor(country);
    }

}

function checkZipcodeInput() {
    const zipcodeValue = zipcode.value.trim();
    const zipcodeNotValid = {
        noZipcode: "You must include a zipcode",
        zipcodePatternMismatch: "Your zipcode is not valid!",
        tooShort: "Your zipcode needs to be longer",
        tooLong: "Your zipcode is too long"
    }
    if (zipcodeValue === "") {
        setErrorFor(zipcode, zipcodeNotValid.noZipcode)
    } else if (zipcodeValue.length > 10) {
        setErrorFor(zipcode, zipcodeNotValid.tooLong) 
    } else if (zipcodeValue.length < 2) {
        setErrorFor(zipcode, zipcodeNotValid.tooShort) 
    } else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcodeValue)) {
        setErrorFor(zipcode, zipcodeNotValid.zipcodePatternMismatch)
    } else {
        setSuccessFor(zipcode);
    }
}

function checkPasswordInput() {
    const passwordValue = password.value.trim();
    const passwordNotValid = {
        noPassword: "You must include a password",
        tooLong: "Password must be less than 30 characters",
        tooShort: "Password must be greater than 5 characters"
    }
    if (passwordValue === '') {
        setErrorFor(password, passwordNotValid.noPassword);
    } else if (passwordValue.length > 29) {
        setErrorFor(password, passwordNotValid.tooLong);
    } else if (passwordValue.length < 5) {
        setErrorFor(password, passwordNotValid.tooShort);
    } else {
        setSuccessFor(password);
    }
}

function checkPasswordConfirmationInput() {
    const passwordValue = password.value.trim();
    const passwordConfirmationValue = passwordConfirmation.value.trim()
    if (passwordValue !== passwordConfirmationValue) {
        setErrorFor(passwordConfirmation, "Passwords do not match!");
    } else {
        setSuccessFor(passwordConfirmation);
    }
}

function checkEmailInput() {
    const emailValue = email.value.trim();
    const emailNotValid = {
        noEmail: "You cannot have a blank email",
        notEmail: "You must include a valid email address",
        tooLong: "Email must be shorter than 50 characters",
        tooShort: "Email must be longer than 2 characters"
    }
    if (emailValue === '') {
        setErrorFor(email, emailNotValid.noEmail);
    } else if (emailValue.length > 50) {
        setErrorFor(email, emailNotValid.tooLong);
    } else if (emailValue.length < 3) {
        setErrorFor(email, emailNotValid.tooShort);
    } else if (!email.checkValidity()) {
        setErrorFor(email, emailNotValid.notEmail);
    } else {
        setSuccessFor(email);
    }
}



function setErrorFor(input, message) {
    const formRow = input.parentElement;
    formRow.className = 'form-row invalid';
    const errorMessage = formRow.querySelector('.error-message');
    errorMessage.textContent = message; 
}

function setSuccessFor(input) {
    const formRow = input.parentElement;
    formRow.className = 'form-row valid';
    const errorMessage = formRow.querySelector('.error-message');
    errorMessage.textContent = ''; 
}