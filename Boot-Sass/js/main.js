document.getElementById("form").onsubmit = function (e) {
  const firstName = document.getElementById("text").value;
  const lastName = document.getElementById("text1").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("Confirmpassword").value;

  const lettersOnlyPattern = /^[A-Za-z]+$/;

  if (firstName === "") {
    alert("Please enter your First Name.");
    e.preventDefault();
  } else if (!lettersOnlyPattern.test(firstName)) {
    alert("First Name should contain only letters.");
    e.preventDefault();
  }

  if (lastName === "") {
    alert("Please enter your Last Name.");
    e.preventDefault();
  } else if (!lettersOnlyPattern.test(lastName)) {
    alert("Last Name should contain only letters.");
    e.preventDefault();
  }

  if (email === "") {
    alert("Please enter your Email.");
    e.preventDefault();
  }

  if (password === "") {
    alert("Please enter your Password.");
    e.preventDefault();
  }

  if (confirmPassword === "") {
    alert("Please confirm your Password.");
    e.preventDefault();
  } else if (confirmPassword !== password) {
    const errorPara = document.getElementById("error");
    errorPara.textContent =
      "Sorry, the provided password does not match the required constraints.";
    e.preventDefault();
  }

  document.getElementById("email").addEventListener("blur", validateEmail);
  document
    .getElementById("password")
    .addEventListener("blur", validatePassword);
  document
    .getElementById("Confirmpassword")
    .addEventListener("blur", validateConfirmPassword);

  function validateEmail() {
    const email = document.getElementById("email").value;

    // Email validation logic
    if (email === "") {
      alert("Please enter your Email.");
    } else {
      // Your email validation logic here
    }
  }

  function validatePassword() {
    const password = document.getElementById("password").value;

    // Password validation logic
    if (password === "") {
      alert("Please enter your Password.");
    } else {
      // Your password validation logic here
    }
  }

  function validateConfirmPassword() {
    const confirmPassword = document.getElementById("Confirmpassword").value;
    const password = document.getElementById("password").value;

    // Confirm Password validation logic
    if (confirmPassword === "") {
      alert("Please confirm your Password.");
    } else if (confirmPassword !== password) {
      const errorPara = document.getElementById("error");
      errorPara.textContent =
        "Sorry, the provided password does not match the required constraints.";
    } else {
      // Clear the error message
      const errorPara = document.getElementById("error");
      errorPara.textContent = "";
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const showPasswordButtons = document.querySelectorAll(".show");
  showPasswordButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const passwordInput = this.previousElementSibling;
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        this.textContent = "Show";
      }
    });
  });

  const confirmPasswordInput = document.getElementById("Confirmpassword");
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const form = document.querySelector(".form");
  const errorElement = document.getElementById("error");
  const checkBoxInput = document.getElementById("checkbox");
  const submitButton = document.querySelector(".btn");

  emailInput.focus();
  submitButton.disabled = true;

  checkBoxInput.addEventListener("change", function () {
    submitButton.disabled = !this.checked;
  });
});
