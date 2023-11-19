function $(id) {
    return document.getElementById(id);
}
function check(){

    var username = document.getElementById("name").value;
    var password = document.getElementById("pass1").value;

    var xhr = new XMLHttpRequest();
    var formData = 'username=' + username + '&password=' + password;
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                window.location.replace("http://localhost:8080/Login_war_exploded/Login/Login.html")
            } else {
                alert(this.status);
            }
        }
    }
    xhr.open("POST","/Login_war_exploded/SignIn",true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(formData);
}