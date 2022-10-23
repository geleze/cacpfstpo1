// Event listeners
document.getElementById("subscribe-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const subscribeEmail = document.getElementById("subscribe-email");

    const successSubmit = document.getElementById("subscribe-submit-success");
    const errorSubmit = document.getElementById("subscribe-submit-error");
  
    let required = checkRequired([subscribeEmail]);
    let validEmail = checkEmail(subscribeEmail);
    if (required && validEmail) {
      successSubmit.style.display = "block";
      setTimeout(() => {
          subscribeEmail.value = '';
      }, 2000);


      
    } else {
      errorSubmit.style.display = 'block';
    }
  
    setTimeout(() => {
      errorSubmit.style.display = "none";
      successSubmit.style.display = "none";
    }, 7000);
  });