document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("signupForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let valid = true;

        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const terms = document.getElementById("terms");

        const usernameError = document.getElementById("usernameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const termsError = document.getElementById("termsError");

        // Reset errors
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        termsError.textContent = "";

        username.classList.remove("invalid");
        email.classList.remove("invalid");
        password.classList.remove("invalid");

        // Username validation
        if (username.value.trim() === "") {
            usernameError.textContent = "Username is required";
            username.classList.add("invalid");
            valid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {
            emailError.textContent = "Email is required";
            email.classList.add("invalid");
            valid = false;
        } else if (!emailPattern.test(email.value)) {
            emailError.textContent = "Invalid email format";
            email.classList.add("invalid");
            valid = false;
        }

        // Password validation
        if (password.value.length < 8) {
            passwordError.textContent =
                "Password must be at least 8 characters";
            password.classList.add("invalid");
            valid = false;
        }

        // Terms validation
        if (!terms.checked) {
            termsError.textContent =
                "Please accept the terms and conditions";
            valid = false;
        }

        // Success
        if (valid) {
            alert("Signup Successful!");
        }
    });

});