function validateName(name){
    const regex = /^[A-Za-z\s]+$/;
    if(name.trim() === ""){
        return "Name cannot be empty";
    }
    if (!regex.test(name)){
        return "Name can only conatain letters and spaces";
    }
    return"Name is valid";
}

function validateEmail(email){
    const regex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.trim() === ""){
        return "Email cannot be empty";
    }
    if (!regex.test(email)){
        return "Inavalid email format";
    }
    return"Email is valid";
}

function validatePassword(password){
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(password.trim() === ""){
        return "Password cannot be empty";
    }
    if (!regex.test(password)){
        return "Password must be at least 8 characters long,contains an uppercase letter,and a number";
    }
    return"Password is valid";
}

function validatePhone(phone){
    const regex = /^[0-9]{10}$/;
    if(phone.trim() === ""){
        return "Phone number cannot be empty";
    }
    if (!regex.test(phone)){
        return "Phone number must be 10 digits long";
    }
    return" Phone Number is valid";
}

function validateForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const phoneError = validatePhone(phone);

    if (nameError === "Name is valid" && emailError === "Email is valid" && passwordError ==="Password is valid" && phoneError === "Phone Number is valid") {
        return true;
    }

    document.getElementById("nameError").innerText = nameError === "Name is valid" ? "":nameError;
    document.getElementById("emailError").innerText = emailError === "Email is valid" ? "":emailError;
    document.getElementById("passwordError").innerText = passwordError === "Password is valid" ? "":passwordError;
    document.getElementById("phoneError").innerText = phoneError === "Phone Number is valid" ? "":phoneError;

    return false;
}