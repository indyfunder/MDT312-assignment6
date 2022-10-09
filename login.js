const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const RegisterUser = urlParams.get('username')
const RegisterPass = urlParams.get('password')

window.onload = loginLoad;
function loginLoad(){
	var logininfo = document.getElementById("myLogin");
    logininfo.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.forms["myLogin"]["username"];
    var password = document.forms["myLogin"]["password"];
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
    if (username.value!= RegisterUser) {
        alert("incorrect Username");
        return false;
    }
    else if (password.value != RegisterPass) {
        alert("incorrect Password");
        return false;
    }
    else {
        alert("Success Login");
    }
}

			