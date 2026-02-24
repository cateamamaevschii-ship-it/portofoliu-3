
  emailjs.init("gZL98lm7yLrjms1XV"); 

  // Handle form submission
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const loading = this.querySelector(".loading");
    const error = this.querySelector(".error-message");
    const sent = this.querySelector(".sent-message");

    // Show loading, hide messages
    loading.style.display = "block";
    error.style.display = "none";
    sent.style.display = "none";

    // Send email via EmailJS
    emailjs.send("service_tbximhp", "template_s23qf6g", {
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