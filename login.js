// Switch Tabs
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const message = document.getElementById("message");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
  message.textContent = "";
});

signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
  message.textContent = "";
});

// Toggle Password Visibility
document.getElementById("toggleLoginPassword").onclick = () => {
  const pwd = document.getElementById("loginPassword");
  pwd.type = pwd.type === "password" ? "text" : "password";
};

document.getElementById("toggleSignupPassword").onclick = () => {
  const pwd = document.getElementById("signupPassword");
  pwd.type = pwd.type === "password" ? "text" : "password";
};

// Login
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
  
    const savedUser = JSON.parse(localStorage.getItem("user"));
  
    if (!email || !password) {
      message.style.color = "red";
      message.textContent = "Please enter email and password.";
      return;
    }
  
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      // Login success
      message.style.color = "#00ffcc";
      message.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "index.html"; // or dashboard.html
      }, 1000);
    } else {
      message.style.color = "red";
      message.textContent = "Invalid email or password.";
    }
  });
  

// Signup (Basic simulation)
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
  
    if (!name || !email || !password) {
      message.style.color = "red";
      message.textContent = "All fields are required.";
      return;
    }
  
    // Store user in localStorage
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
  
    message.style.color = "#00ffcc";
    message.textContent = `Welcome ${name}, your account has been created. Please login!`;
  
    setTimeout(() => {
      loginTab.click(); // Switch to login tab
    }, 1500);
  });
  
