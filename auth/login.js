var email = document.getElementById("email")
var pswd = document.getElementById("pswd")

function onLogin() {
    if (!email.value || !pswd.value) {
        alert("All Information is required")
    }

    var users = JSON.parse(localStorage.getItem("users"))

    var isLoggedIn = false
    for (var i = 0; i < users.length; i++) {
        const element = users[i];
        console.log(element.email)
        if(element.email === email.value && element.pswd === pswd.value){
            alert("Login Successfull")
            isLoggedIn = true
            break
        }
        
        
    }

    if(isLoggedIn === false){
        alert("Invalid Credentials")
    }

    window.location.replace = "./home.html"
}