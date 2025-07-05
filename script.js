document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  alert(`Thanks ${name}! We'll contact you soon at ${phone}.`);
  this.reset();
});
