function login(username, password) {
    if (username && password) {
        return "Login successful";
    }

    return "Invalid username or password";
}

console.log(login("testuser", "12345678"));
