function login(email, password) {

    if (!email.includes("@")) {
        return "Invalid email";
    }

    if (password.length < 8) {
        return "Password must contain at least 8 characters";
    }

    return "Login successful";
}
console.log(login("test@gmail.com", "12345678"));