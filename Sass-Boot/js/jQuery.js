$(document).ready(function() {
    const form = $(".form");
    const firstNameInput = $(".text1");
    const lastNameInput = $(".text2");
    const emailInput = $(".email");
    const passwordInput = $("#passsLogin");
    const confirmPasswordInput = $("#passLoginconfirm");
    const togglePasswordLink = $("#togglePassword");
    const toggleConfirmPasswordLink = $("#toggleConfirmPassword");
  
    togglePasswordLink.click(function(event) {
      event.preventDefault();
      togglePasswordVisibility(passwordInput[0], togglePasswordLink);
    });
  
    const checkbox = $("#check2");
    const createAccountButton = $(".button");
  
    checkbox.change(function() {
      createAccountButton.prop("disabled", !checkbox.prop("checked"));
    });
  
    function validateInput(inputElement, errorElement, errorMessage, regex) {
      if (inputElement.val().trim() === "") {
        errorElement.text(`Please enter your ${inputElement.attr("placeholder")}.`);
        errorElement.css("color", "red");
        inputElement.css("borderColor", "red");
        return false;
      } else if (regex && !regex.test(inputElement.val())) {
        errorElement.text(errorMessage);
        errorElement.css("color", "red");
        inputElement.css("borderColor", "red");
        return false;
      } else {
        errorElement.text("");
        inputElement.css("borderColor", "");
        return true;
      }
    }
  
    firstNameInput.blur(function() {
      validateInput(
        firstNameInput,
        $(".fname"),
        "First Name should only contain letters.",
        /^[A-Za-z]+$/
      );
    });
  
    lastNameInput.blur(function() {
      validateInput(
        lastNameInput,
        $(".lname"),
        "Last Name should only contain letters.",
        /^[A-Za-z]+$/
      );
    });
  
    emailInput.blur(function() {
      validateInput(
        emailInput,
        $(".email-error"),
        "Please enter a valid Email.",
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
      );
    });
  
    passwordInput.blur(function() {
      validateInput(passwordInput, $(".des"), "Please enter a Password.");
    });
  
    confirmPasswordInput.blur(function() {
      if (
        confirmPasswordInput.val().trim() !== "" &&
        confirmPasswordInput.val() !== passwordInput.val()
      ) {
        $(".confirm").text(
          "Sorry, the provided password does not match the required constraints."
        );
        $(".confirm").css("color", "red");
        confirmPasswordInput.css("borderColor", "red");
      } else {
        $(".confirm").text("");
        confirmPasswordInput.css("borderColor", "");
      }
    });
  
    form.submit(function(event) {
      let hasError = false;
  
      if (firstNameInput.val().trim() === "") {
        event.preventDefault();
        $(".fname").text("Please enter your First Name.");
        $(".fname").css("color", "red");
        firstNameInput.css("borderColor", "red");
        hasError = true;
      } else {
        $(".fname").text("");
        firstNameInput.css("borderColor", "");
        if (!/^[A-Za-z]+$/.test(firstNameInput.val())) {
          event.preventDefault();
          $(".fname").text("First Name should only contain letters.");
          $(".fname").css("color", "red");
          firstNameInput.css("borderColor", "red");
          hasError = true;
        }
      }
  
      if (lastNameInput.val().trim() === "") {
        event.preventDefault();
        $(".lname").text("Please enter your Last Name.");
        $(".lname").css("color", "red");
        lastNameInput.css("borderColor", "red");
        hasError = true;
      } else {
        $(".lname").text("");
        lastNameInput.css("borderColor", "");
        if (!/^[A-Za-z]+$/.test(lastNameInput.val())) {
          event.preventDefault();
          $(".lname").text("Last Name should only contain letters.");
          $(".lname").css("color", "red");
          lastNameInput.css("borderColor", "red");
          hasError = true;
        }
      }
  
      if (emailInput.val().trim() === "") {
        event.preventDefault();
        $(".email-error").text("Please enter your Email.");
        $(".email-error").css("color", "red");
        emailInput.css("borderColor", "red");
        hasError = true;
      } else {
        $(".email").text("");
        emailInput.css("borderColor", "");
      }
  
      if (passwordInput.val().trim() === "") {
        event.preventDefault();
        $(".des").text("Please enter a Password.");
        $(".des").css("color", "red");
        passwordInput.css("borderColor", "red");
        hasError = true;
      }
  
      if (confirmPasswordInput.val().trim() === "") {
        event.preventDefault();
        $(".confirm").text("Please confirm your Password.");
        $(".confirm").css("color", "red");
        confirmPasswordInput.css("borderColor", "red");
        hasError = true;
      } else if (confirmPasswordInput.val() !== passwordInput.val()) {
        event.preventDefault();
        $(".confirm").text(
          "Sorry, the provided password does not match the required constraints."
        );
        $(".confirm").css("color", "red");
        confirmPasswordInput.css("borderColor", "red");
        hasError = true;
      } else {
        $(".confirm").text("");
        confirmPasswordInput.css("borderColor", "");
      }
  
      if (hasError) {
        event.preventDefault();
      }
    });
  
    passwordInput.blur(function() {
      const password = passwordInput.val().trim();
      const errorElement = $(".des");
  
      if (password === "") {
        errorElement.text("Please enter a Password.");
        errorElement.css("color", "red");
      } else if (password.length < 8) {
        errorElement.text("Password must be at least 8 characters long.");
        errorElement.css("color", "red");
      } else if (!/[A-Z]/.test(password)) {
        errorElement.text("Password must include at least 1 uppercase letter.");
        errorElement.css("color", "red");
      } else if (!/[0-9]/.test(password)) {
        errorElement.text("Password must include at least 1 number.");
        errorElement.css("color", "red");
      } else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
        errorElement.text("Password must include at least 1 special character.");
        errorElement.css("color", "red");
      } else {
        errorElement.text("");
      }
    });
  });
  