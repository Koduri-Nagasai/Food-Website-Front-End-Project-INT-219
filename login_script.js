let loginForm = document.getElementById('signin-form');
let signupForm = document.getElementById('signup-form');

let loginButton = document.getElementById('signin-btn');
let signUpButton = document.getElementById('signup-btn');
let submit = document.querySelectorAll('.submit');

let buttonList = []
// add event listeners to  sign in and sign up submit buttons
submit.forEach((button) =>{
    buttonList.push(button);
})

let forms = document.querySelectorAll('.text-center');
forms.forEach((form) => {
    form.addEventListener('submit',(event) => {
        event.preventDefault();
    });
});

buttonList[0].addEventListener('click',validateLogin);
buttonList[1].addEventListener('click',vallidateSignUp);

// display single form to user
loginForm.style.display = "block";
signupForm.style.display = "none";

loginButton.addEventListener('click',displayLoginForm);
signUpButton.addEventListener('click',displaySignUpForm);

function displayLoginForm(){
    signupForm.style.display = "none";
    loginForm.style.display = "block";
}

function displaySignUpForm(){
    loginForm.style.display = "none";
    signupForm.style.display = "block";
}

function validateLogin(){
    let userName = document.getElementById('signin-username').value;
    let password = document.getElementById('signin-password').value;
    if(validateDetails(userName,password,0)){ 
        window.location.href = "index.html";
    }
}

function vallidateSignUp(){
    let userName = document.getElementById('new-username').value;
    let password = document.getElementById('new-password').value;
    if(validateDetails(userName,password,1)){
        window.location.href = "index.html";
    }
}

let inputFields = document.querySelectorAll('input');

inputFields.forEach((field) => {
    field.addEventListener('click',(event) => {
        let warnings = document.querySelectorAll('.warnmsg');
        warnings.forEach((text) => {
            text.style.display = "none";
        })
    });
}) ;

function validateDetails(userName,password,index){
    const userNamePattern = /^[a-zA-Z][a-zA-Z0-9]*$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:;'<>,.?\/"\[\]]).{8,}$/;
    let userValid = userNamePattern.test(userName);
    let passValid = passwordPattern.test(password);
    let userWarning = " ",passWarning = " ";
    if(index === 0){
        userWarning = document.querySelector('.logUserWarn');
        passWarning = document.querySelector('.logPassWarn');
    }
    else{
        userWarning = document.querySelector('.signUserWarn');
        passWarning = document.querySelector('.signPassWarn');
    }
    if(!userValid){
        userWarning.innerHTML = "username must start with alphabet and can contain numbers and alphabets only";
        userWarning.style.display = "block";
    }
    if( userValid && !passValid){
        passWarning.innerText = "password must and only contain 'A-Z','a-z','0-9',special symbol and must be 8 characters long";
        passWarning.style.display = "block";
    }
    return userValid && passValid;
}

