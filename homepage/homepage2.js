let dataUser = [];

function startGame(gameName) {
    // You can add logic here to start the selected game
    alert("Starting " + gameName + "!");
    // Redirect to the game page or load the game assets, etc.
}

function signUp() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.user = username;
    localStorage.pass = password;
    if (username && password) {
        document.getElementById('message').innerHTML = "Sign Up successful!";
        document.getElementById('message').style.color = "green";

        window.location.href = 'homepage2.html';

        return false;
    } else {
        document.getElementById('message').innerHTML = "Username and password are required!";
        document.getElementById('message').style.color = "red";
        return true;
    }
}

function lomginYeah() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === localStorage.user && password === localStorage.pass) {
        alert("Login Success");

        window.location.href = 'lobby.html';

        // return false;
    } else {
        alert("Wrong Username/Password!")
        
        // return true;
    }
}