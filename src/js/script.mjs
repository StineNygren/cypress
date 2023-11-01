const loginBtn = document.querySelector("#login-form");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("noe");
  localStorage.setItem("email", document.querySelector("#email").value);
  window.location.href = "./profile.html";
});

console.log("noe");
