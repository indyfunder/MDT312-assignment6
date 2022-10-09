window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
}

function validateForm() {
    var pass1 = document.forms["myForm"]["password1"].value;
    var pass2 = document.forms["myForm"]["password2"].value;

    if (pass1 == pass2) {     
        alert("Done !!"); 
    }

    else if (pass1 != pass2) {
        document.getElementById("errormsg").innerHTML ="Error";
        alert("password not match try again");
        return false;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}