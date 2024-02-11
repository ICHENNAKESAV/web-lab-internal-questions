function validateForm() {
    const username = document.getElementById("username").value;
    const mobileNumber = document.getElementById("mobile_number").value;
  
    // Username validation
    if (username.length < 6) {
      alert("Username must be at least 6 characters long.");
      return false;
    }
  
    // Mobile number validation
    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
      alert("Mobile number must be 10 digits and contain only numbers.");
      return false;
    }
  
    // If all validations pass, allow form submission
    return true;
  }