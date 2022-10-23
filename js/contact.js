


// Event listeners
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const contactName = document.getElementById("contact-name");
  const contactEmail = document.getElementById("contact-email");
  const contactMessage = document.getElementById("contact-message");
  const successSubmit = document.getElementById("contact-submit-success");
  const errorSubmit = document.getElementById("contact-submit-error");

  let required = checkRequired([contactName, contactEmail, contactMessage]);
  let nameLength = checkLength(contactName, 3, 15);
  let messageLength = checkLength(contactMessage, 10, 100);
  let validEmail = checkEmail(contactEmail);
  if (required && nameLength && messageLength && validEmail) {
    successSubmit.style.display = "block";
    setTimeout(() => {
        contactName.value = '';
        contactEmail.value = '';
        contactMessage.value = '';
    }, 2000);
  } else {
    errorSubmit.style.display = 'block';
  }

  setTimeout(() => {
    errorSubmit.style.display = "none";
    successSubmit.style.display = "none";
  }, 7000);
});
