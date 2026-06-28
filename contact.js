let form = document.querySelector("#contactForm");

// input fields
let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");

//paragraph error
let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let subjectError = document.querySelector("#subjectError");
let messageError = document.querySelector("#messageError");



form.addEventListener("submit", function (e) {

    e.preventDefault()

    let isValid = true;


    nameError.innerText = "";
    emailError.innerText = "";
    subjectError.innerText = "";
    messageError.innerText = "";


    if (fullName.value.trim() === "") {

        nameError.innerText = "Please Enter Your Full Name";
        isValid = false;

    }

    if (email.value.trim() === "") {

        emailError.innerText = "Please Enter Your Email";
        isValid = false;

    } else if (!email.value.includes("@")) {

        emailError.innerText = "Please Enter a valid Email";
        isValid = false;

    }

    if (subject.value.trim() === "") {

        subjectError.innerText = "Fill The Subject Field";
        isValid = false;

    }

    if (message.value.trim() === "") {

        messageError.innerText = "Type Your Message";
        isValid = false;

    }

    if(isValid){
        alert("Form submitted successfully!");
        form.reset();
    }

})