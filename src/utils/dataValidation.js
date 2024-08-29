
const isValidPassword = (password) => {
    /*
        Checks if the password entered is valid
        :password: password entered by the user
        :returns: boolean value that indicates whether the passwor is valid or not
    */
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Checks password against criteria
    if (password.length < minLength) {
        return { valid: false, message: "Password must be at least 8 characters long." };
    }

    if (!hasUppercase) {
    return { valid: false, message: "Password must contain at least one uppercase letter." };
    }

    if (!hasLowercase) {
    return { valid: false, message: "Password must contain at least one lowercase letter." };
    }

    if (!hasNumber) {
    return { valid: false, message: "Password must contain at least one number." };
    }

    if (!hasSpecialChar) {
    return { valid: false, message: "Password must contain at least one special character." };
    }
    
    // If all checks pass, the password is valid
    return { valid: true, message: "Password is valid." };
}


const isUserExists = (userID) => {
    

    return false;
}
