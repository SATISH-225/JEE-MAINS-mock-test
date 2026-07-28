const API_BASE_URL = 'http://localhost:5000/api/auth';

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";
    document.getElementById("termsError").innerHTML = "";

    let namePattern = /^[A-Za-z ]{3,}$/;
    if (fullname === "") {
      document.getElementById("nameError").innerHTML = "Full Name is required.";
      return;
    }

    if (!namePattern.test(fullname)) {
      document.getElementById("nameError").innerHTML = "Enter a valid Full Name.";
      return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      document.getElementById("emailError").innerHTML = "Email is required.";
      return;
    }

    if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerHTML = "Enter a valid Email.";
      return;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
      document.getElementById("phoneError").innerHTML = "Phone Number is required.";
      return;
    }

    if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").innerHTML = "Enter a valid 10-digit Phone Number.";
      return;
    }

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (password === "") {
      document.getElementById("passwordError").innerHTML = "Password is required.";
      return;
    }

    if (!passwordPattern.test(password)) {
      document.getElementById("passwordError").innerHTML =
        "Password must contain 8 characters, uppercase, lowercase, number and special character.";
      return;
    }

    if (confirmPassword === "") {
      document.getElementById("confirmError").innerHTML = "Confirm Password is required.";
      return;
    }

    if (password !== confirmPassword) {
      document.getElementById("confirmError").innerHTML = "Passwords do not match.";
      return;
    }

    if (!terms) {
      document.getElementById("termsError").innerHTML = "Please accept the Terms & Conditions.";
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullname,
          email,
          phone,
          password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        document.getElementById("emailError").innerHTML = data.message || 'Registration failed.';
        return;
      }

      alert('Registration Successful!');
      window.location.href = 'login.html';
    } catch (error) {
      document.getElementById("termsError").innerHTML = 'Unable to connect to the server.';
      console.error(error);
    }
  });
}