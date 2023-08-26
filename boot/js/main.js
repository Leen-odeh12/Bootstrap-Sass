let firstNameInput = document.getElementsByClassName("fname")[0];
let lastNameInput = document.getElementsByClassName("lname")[0];
let emailInput = document.getElementsByClassName("email")[0];
let passInput = document.getElementsByClassName("password")[0];

// let showHideButton = document.getElementById("showHideButton");

let passConfirmInput = document.getElementsByClassName("passwordconfirm")[0];

let emailError = document.getElementById("email");

let error = document.getElementById("error");

console.log(error);
let namePattern = /^[A-Za-z]+$/; // Regular expression to match only letters
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function validateEmail() {
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Invalid email address.";
    emailError.style.color = "red";
  } else {
    emailError.textContent = "";
  }
}

function validateFirstName() {
  if (!firstNameInput.value.match(namePattern)) {
    alert("First name should contain only letters.");
  }
}
function validateLastName() {
  if (!lastNameInput.value.match(namePattern)) {
    alert("Last name should contain only letters.");
  }
}
function validatePasswordConfirmation() {
  if (passInput.value !== passConfirmInput.value) {
    error.textContent =
      "Sorry, the provided password does not match the required constraints. and it will be under confirm password field";
    error.style.color = "red";
  }
}


firstNameInput.addEventListener("blur", validateFirstName);
lastNameInput.addEventListener("blur", validateLastName);
passConfirmInput.addEventListener("blur", validatePasswordConfirmation);
emailInput.addEventListener("blur", validateEmail);


document.getElementById("form").onsubmit = function (e) {
  // showHideButton.addEventListener("click", function() {
  //     if (passInput .type === "password") {
  //         passInput .type = "text";
  //         showHideButton.textContent = "Hide";
  //     } else {
  //         passInput.type = "password";
  //         showHideButton.textContent = "Show Text";
  //     }
  // });

  validateFirstName();
  validateLastName();
  validatePasswordConfirmation();

  let isFirstNameValid = firstNameInput.value.match(namePattern);
  let isLastNameValid = lastNameInput.value.match(namePattern);
  let isPasswordMatch = passInput.value === passConfirmInput.value;

  if (
    firstNameInput.value === "" ||
    lastNameInput.value === "" ||
    emailInput.value === "" ||
    passInput.value === "" ||
    passConfirmInput.value === ""
  ) {
    e.preventDefault();
    alert("All fields are required.");
  } else if (!isFirstNameValid || !isLastNameValid) {
    e.preventDefault();
    alert("First name and last name should contain only letters.");
  } else if (!isPasswordMatch) {
    e.preventDefault();
    error.textContent =
      "Sorry, the provided password does not match the required constraints. and it will be under confirm password field";
    error.style.color = "red";
  }
};
