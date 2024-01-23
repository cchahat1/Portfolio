

function validateAndSubmit(event) {
  let form = document.getElementById("myForm");
  let emailInput = document.querySelector(".email");
  let errorMessage = document.getElementById("error-message");

  // Get the email input value

  let emailValue = emailInput.value.trim();

  // Validate the email format
  if (isValidEmail(emailValue)) {
    console.log("Email is valid:", emailValue);

    window.location.href = 'sucess.html';
    event.preventDefault();    // You can also submit the form programmatically if needed
    form.submit();
  } else {
    emailInput.classList.add("invalid");
    errorMessage.textContent = "Valid email required.";
  }
}

// Function to validate email format
function isValidEmail(email) {
  return email.includes("@") && email.endsWith(".com");
}

function backtopage(){
  window.location.href = 'index.html';

}

