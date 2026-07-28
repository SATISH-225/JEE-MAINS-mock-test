const API_BASE_URL = 'http://localhost:5000/api/auth';

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    if (email === "") {
      emailError.innerHTML = "Please enter your email.";
      return;
    }

    if (password === "") {
      passwordError.innerHTML = "Please enter your password.";
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        passwordError.innerHTML = data.message || 'Login failed.';
        return;
      }

      alert('Login Successful!');
      window.location.href = 'dashboard.html';
    } catch (error) {
      passwordError.innerHTML = 'Unable to connect to the server.';
      console.error(error);
    }
  });
}