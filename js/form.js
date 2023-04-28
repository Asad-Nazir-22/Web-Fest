let body = document.getElementById("body");

body.addEventListener("load",Main);


function Main() {

    const pass = document.getElementsByClassName("pass");
    const error = document.getElementsByClassName("Error");

    let Showpass = document.querySelector("#showPass");

    Showpass.addEventListener("click", () => {
      if (pass[0].type == "password") {
        pass[0].type = "text";
        pass[1].type = "text";
      } else {
        pass[0].type = "password";
        pass[1].type = "password";
      }
    });

    pass[0].addEventListener("focusout", () => {
      if (pass[0].value.length < 8) {
        error[0].textContent = "Atleast 8 character Long";
        pass[0].style.borderColor = "red";
        return;
      }

      error[0].textContent = "";
      pass[0].style.borderColor = "";
    });

    function verify() {
      //On Submission
      if (pass[0].value.length < 8) {
        return false;
      }

      if (pass[0].value == pass[1].value) {
        pass[1].style.borderColor = "";
        return true;
      }

      error[1].textContent = "(Wrong Password)";
      pass[1].style.borderColor = "red";
      return false;
    }
    
}