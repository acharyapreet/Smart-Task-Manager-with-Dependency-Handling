// Toggle forms
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

showSignup.addEventListener("click", () => {
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
});

showLogin.addEventListener("click", () => {
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
});

// LocalStorage helper
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Signup functionality
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const signupError = document.getElementById("signupError");
  const signupSuccess = document.getElementById("signupSuccess");

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    signupError.textContent = "User already exists!";
    signupSuccess.textContent = "";
  } else {
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    signupSuccess.textContent = "Signup successful! Redirecting to login...";
    signupError.textContent = "";
    setTimeout(() => {
      signupForm.classList.remove("active");
      loginForm.classList.add("active");
      signupSuccess.textContent = "";
    }, 2000);
  }
});

// Login functionality
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const loginError = document.getElementById("loginError");

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    loginError.textContent = "";
    alert(`Login successful! Welcome ${email}`);
  } else {
    loginError.textContent = "Invalid email or password!";
  }
});
