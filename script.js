document.addEventListener('DOMContentLoaded', function () {
  // Select the form and feedback div
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Listen for form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Retrieve and trim input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Initialize validation status and messages array
    let isValid = true;
    const messages = [];

    // Validate username
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Validate email format
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push("Email must include '@' and '.' characters.");
    }

    // Validate password length
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Display feedback
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // green
      feedbackDiv.style.backgroundColor = "#d4edda"; // light green
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = "#d8000c"; // red
      feedbackDiv.style.backgroundColor = "#ffbaba"; // light red
    }
  });
});
