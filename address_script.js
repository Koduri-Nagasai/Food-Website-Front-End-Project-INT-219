
let forms = document.querySelector('#form');
forms.addEventListener('submit',(event) => {
    event.preventDefault();
})

let submitButton = document.getElementById('submit');
// console.log(submitButton);
submitButton.addEventListener('click',validateDeatails);

function validateDeatails(){
    // window.alert("Hello");
    let valid = true;
    let namePattern = /^[^\W]{5,}[a-zA-Z ]+$/;
    let addressPattern = /^[\w\s ,.-]+$/;
    let cityPattern = /^[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*$/;
    let pincodePattern = /^\d{6}$/;
    let mobilePatttern = /^(6|7|8|9)\d{9}$/;

    let patternArray = [namePattern,addressPattern,cityPattern,pincodePattern,mobilePatttern];

    let userName = document.getElementById('fullName').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let pinCode = document.getElementById('zipCode').value;
    let mobile = document.getElementById('phoneNumber').value;

    let array = [userName,address,city,pinCode,mobile];
    
    let displayArray = [document.querySelector('#namewarn'),
                        document.querySelector("#addwarn"),
                        document.querySelector('#citywarn'),
                        document.querySelector('#pinwarn'),
                        document.querySelector('#mobilewarn')];
    // console.log(displayArray);
    for(let i = 0;i < array.length;i++){
        let result = patternArray[i].test(array[i]);
        if(!result){
            alert("hello");
            displayArray[i].style.display = "block";
            valid = false;
        }
    }
    if(valid){
        alert("Details Saved Succcessfully");
        window.location.href = "index.html";
        forms.reset();
    }

}