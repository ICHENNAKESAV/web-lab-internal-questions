function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
  
    // Validate username length
    if (username.length < 6) {
      alert("Username must be at least 6 characters long.");
      return false; // Prevent form submission
    }
  
    // Validate email format using regular expression
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address in the format username@domain.com.");
      return false; // Prevent form submission
    }
  
    // If all validations pass, return true to allow form submission
    return true;
  }
  
  // Attach the validation function to the form's onSubmit event
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", validateForm);