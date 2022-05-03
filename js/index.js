var remainingAttempts = 3;

function handleLogin() {
    var username = document.getElementById("login_username").value;
    var password = document.getElementById("login_password").value;

    /*
    if (username == "") {
        window.alert("Username can't be empty");
        return;
    }

    if (password == "") {
        window.alert("Password can't be empty");
        return;
    }
    */

    if (remainingAttempts > 1) {
        // The .html pages are not protected via. authentication and can be accessed directly through the URl for now
        if (username == "Admin" && password == "Admin") {
            // Admin page
            location.href = "html/admin.html";
        }
        else if (username == "Staff" && password == "Staff") {
            // Staff page
            location.href = "html/staff.html";
        }
        else {
            remainingAttempts--;
            window.alert("Login Credentials Incorrect, " + remainingAttempts + " attempt(s) remaining")
        }
    } else {
        // Disable Form
        document.getElementById("login_button").disabled = true;
        document.getElementById("login_username").disabled = true;
        document.getElementById("login_password").disabled = true;
        window.alert("You entered false credentials too many times");
    }
}