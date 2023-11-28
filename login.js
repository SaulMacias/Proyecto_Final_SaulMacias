function checkdata() {
  const user = document.getElementById("userl").value;
  const pass = document.getElementById("passl").value;

  if (localStorage.getItem("user") == user) {
    if (localStorage.getItem("pass") == pass) {
      var u = sessionStorage.setItem("user", user);
      window.location.assign("index.html");
    }
  }
}

function getdata() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const email = document.getElementById("email").value;

  if (localStorage.getItem("user").length != 0) {
    var u = localStorage.setItem("user", user);
    if (localStorage.getItem("pass").length != 0) {
      var p = localStorage.setItem("pass", pass);
      if (localStorage.getItem("email").length != 0) {
        var mail = localStorage.setItem("email", email);
        var u = sessionStorage.setItem("user", user);
        window.location.assign("index.html");
      }
    }
  }
}
