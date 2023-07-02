let register = document.getElementById("register");
register.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let pw = document.getElementById("password");


  if (email.value.trim().length == 0 && pw.value.trim().length == 0) {
    alert("Please input your email & password");
  } else if (email.value.trim().length == 0) {
    alert("Please input your email");
  } else if (pw.value.trim().length == 0) {
    alert("Please input your password");
  } else if (pw.value.trim().length < 8) {
    alert("Password must be at least 8 characters.");
  } else {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users);
      users.push({
        email: email.value.trim(),
        pw: pw.value.trim(),
      });
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            email: email.value.trim(),
            pw: pw.value.trim(),
          },
        ])
      );
    }
    location.replace("./login.html");
  }
});
