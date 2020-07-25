var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


const validatePassword = (password) => {
    let errors = []
    try {
        if (password.length < 8) {
            errors.push("at least 8 characters");
        }
        if (password.search(/[A-Z]/g) < 0) {
            errors.push("at least one uppercase letter"); 
        }
        if (password.search(/[a-z]/g) < 0) {
            errors.push("at least one lowercase letter"); 
        }
        if (password.search(/[0-9]/g) < 0) {
            errors.push("at least one digit");
        }
        if (password.search(/[^a-zA-Z\d]/g) < 0){
            errors.push("at least one special character")
        }
        if (errors.length > 0) {
            console.table({success: false, message: "Your password must contain ",errors: `${errors}`});
            return ({success: false, message: "Your password must contain ",errors: `${errors}`});
        }
        console.table({success: true, message: "password is valid."});
        return ({success: true, message: "password is valid."});
    } catch (err) {
        console.log(`${err}`)
        return ({success: false, message: "failed to validate password.", error: `${err}`});
    }
}

validatePassword("abc")

const passwordValidation = (password) => {
    console.log(password);
    try {
        if (password.length < 8) {
            return ({success: false, message: "Your password must be at least 8 characters"})
        }
        let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        console.log(regularExpression.test(password))
        if (!regularExpression.test(password)) {
            return ({success: false, message: "Password must be at least 8 characters, combinations of numbers, letters and special characters."})
        }
        return ({success: true, message: "password is valid."});
    } catch (err) {
        console.log(`${err}`)
        return ({success: false, message: "failed to validate password.", error: `${err}`});
    }
}

// passwordValidation();

const  checkValidation = (str) => { 
    
    console.log(str)
    if (str.match(/[a-z]/g) && 
        str.match(/[A-Z]/g) &&
        str.match(/[0-9]/g) &&
        str.match(/[^a-zA-Z\d]/g) &&
        str.length >= 8) {
        console.log("valid")
        return true; 
    } else {
        console.log("invalid")
        return false; 
    }

}

// checkValidation("abc123AB!")
