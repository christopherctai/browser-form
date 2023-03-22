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
    checkPasswordInput()
})
passwordConfirmation.addEventListener('input', () => {
    checkPasswordConfirmationInput()
})

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
        
    }
}

function checkPasswordInput() {

}

function checkPasswordConfirmationInput() {

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


function checkAllInputs() {
    const emailValue = email.value.trim();
    const countryValue = country.value.trim();
    const zipcodeValue = zipcode.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmationValue = passwordConfirmation.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
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