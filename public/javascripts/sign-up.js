const formButton = document.querySelector(".form-btn");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const error = document.querySelector(".error-message");
const errorFirstname = document.querySelector(".error-firstname");
const errorLastname = document.querySelector(".error-lastname");
const errorEmail = document.querySelector(".error-email");
const errorPassword = document.querySelector(".error-password");
const errorTwo = document.querySelector(".error-2");

formButton.addEventListener("click", (e) => {

    if (firstName.value === '') {
        firstName.style.border = "1px solid red";
        errorFirstname.style.display = 'block';
        errorFirstname.style.color = 'red';
        errorFirstname.innerHTML = 'Please enter your first name';
        e.preventDefault();
    }

    if (lastName.value === '') {
        lastName.style.border = "1px solid red";
        errorLastname.style.display = 'block';
        errorLastname.style.color = 'red';
        errorLastname.innerHTML = 'Please enter your last name';
        e.preventDefault();
    }

    if (email.value === '') {
        email.style.border = "1px solid red";
        errorEmail.style.display = 'block';
        errorEmail.style.color = 'red';
        errorEmail.innerHTML = 'Please enter your email'; // Fix the error message
        e.preventDefault();
    }

    if (password.value === '') {
        password.style.border = "1px solid red";
        errorPassword.style.display = 'block';
        errorPassword.style.color = 'red';
        errorPassword.innerHTML = 'Please enter your password'; // Fix the error message
        e.preventDefault();
    }
    if (password.value.length < 6 ) {
        password.style.border = "1px solid red";
        errorPassword.style.display = 'block';
        errorPassword.style.color = 'red';
        errorPassword.innerHTML = 'Password must be more than 6 characters'; // Fix the error message
        e.preventDefault();
    }
});

//input listeners

firstName.addEventListener('input', function() {
        if (this.value !== ''){
            

            errorFirstname.style.display = 'none';
            this.style.border = '1px solid green';
            
        }else{
            this.style.border = 'none';
        }

});

lastName.addEventListener('input',function() {
    if (this.value !== ''){
        

        errorLastname.style.display = 'none';
        this.style.border = '1px solid green';
        
    }else{
        this.style.border = 'none';
    }

});

email.addEventListener('input', function() {
    if (this.value !== ''){
        

        errorEmail.style.display = 'none';
        this.style.border = '1px solid green';
        
    }else{
        this.style.border = 'none';
    }

});

password.addEventListener('input', function() {
    if (this.value !== ''){
        
        errorPassword.style.display = 'none';
        this.style.border = '1px solid green';
        
    }

});