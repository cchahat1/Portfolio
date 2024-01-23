function collapseNav() {
    let toggler = document.getElementsByClassName("navbar-toggler");
    let list = document.getElementsByClassName("navbar-collapse");

    // Check if elements were found
    if (toggler.length > 0 && list.length > 0) {
        // Loop through the elements and remove the class
        for (let i = 0; i < toggler.length; i++) {
            toggler[i].classList.add("collapsed");
        }
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove("show");
        }

    }
};
function validateForm() {
    // Reset error messages
    document.getElementById('fnameError').textContent = '';
    document.getElementById('lnameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Get form values
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var email = document.getElementById('inputEmail4').value;
  
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) && fname === '' && lname === '') {
      document.getElementById('emailError').textContent = 'Enter a valid email address';
      document.getElementById('fnameError').textContent = 'First name is required';
      document.getElementById('lnameError').textContent = 'Last name is required';
      
      return false;
    }
   
    // Form is valid, continue with submission (for demonstration, alert is used)
    alert('Form submitted successfully!');
  }
  