
var name;
var pass;


function checkall(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    var formData = 'username=' + username + '&password=' + password;
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
               if (this.responseText ==='OK'){
                   window.location.replace("http://localhost:8080/Login_war_exploded/Calculator/main.html")
               }
            } else {
                alert(this.status);
            }
        }
    }
    xhr.open("GET","/Login_war_exploded/Login?username="+username+"&password="+password,true);
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}