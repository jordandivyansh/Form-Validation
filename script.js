const form = document.getElementById('form');
const password1El = document.getElementById('password');
const password2El = document.getElementById('cpassword');
const messageContainer = document.querySelector('.response');
const message = document.getElementById('message');
const phone = document.getElementById('phone');

let isValid = false;
let passwordsMatch = false;
let contactNumber = false;

function validateForm() {
  // Use HTML constraint API to check form validity
  isValid = form.checkValidity();
  // If the form isn't valid
  if (!isValid) {
    // Style main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // Check to see if both password fields match
  if (password1El.value === password2El.value) {
    // If they match, set value to true and borders to green
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    // If they don't match, border color of input to red, change message
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  //  Check for phone number length
  if(phone.value.length === 10){
      contactNumber = true;
      phone.style.borderColor = 'green';
      phone.style.borderColor = 'green';
  }
  else{
    contactNumber = false;
    message.textContent = 'Make sure to enter complete phone number.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    phone.style.borderColor = 'red';
    phone.style.borderColor = 'red';
  }

  // If form is valid and passwords match
  if (isValid && passwordsMatch && contactNumber) {
    // Style main message for success
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }

}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.web.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit Form if Valid
  if (isValid && passwordsMatch && contactNumber) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener('submit', processFormData);
