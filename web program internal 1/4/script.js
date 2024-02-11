function validateForm() {
    const mobile_number = document.getElementById("mobile_number").value;
    const email = document.getElementById("email").value;
  
    // Mobile number validation
    const mobileRegex = /^\d+$/;
    if (!mobileRegex.test(mobile_number)) {
      alert("Please enter a valid mobile number (digits only).");
      return false;
    }
  
    // Email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Validation successful
    return true;
  }