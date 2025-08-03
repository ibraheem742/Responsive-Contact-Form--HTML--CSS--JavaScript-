document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const output = document.getElementById("output");

  if (!fullName || !email || !subject || !message) {
    output.style.color = 'red';
    output.textContent = 'Please fill in all fields.';
    return;
  }

  output.style.color = 'green';
  output.textContent = 'Thank you! Your message has been sent.';

  this.reset();
});