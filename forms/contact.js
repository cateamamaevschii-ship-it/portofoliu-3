document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const loading = this.querySelector(".loading");
  const error = this.querySelector(".error-message");
  const sent = this.querySelector(".sent-message");

  loading.style.display = "block";
  error.style.display = "none";
  sent.style.display = "none";

  emailjs.init("gZL98lm7yLrjms1XV");

  emailjs.send("service_tbximhp","template_sr8bg0g", {
    name: this.querySelector("[name='name']").value,
    email: this.querySelector("[name='email']").value,
    subject: this.querySelector("[name='subject']").value,
    message: this.querySelector("[name='message']").value
  })
  .then(function() {
    loading.style.display = "none";
    sent.style.display = "block";
    document.getElementById("contact-form").reset();
  }, function(err) {
    loading.style.display = "none";
    error.style.display = "block";
    error.textContent = "Eroare la trimitere!";
    console.error(err);
  });
});