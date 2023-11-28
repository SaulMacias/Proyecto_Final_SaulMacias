if (sessionStorage.getItem("user") === null) {
  txtout = "Login";
} else if (sessionStorage.getItem("user").length === 0) {
  txtout = "Login";
} else {
  txtout = sessionStorage.getItem("user");
}
document.getElementById("output").innerHTML = txtout;
