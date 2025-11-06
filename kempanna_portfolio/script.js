// Small interactive bits for the portfolio
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  alert('Thanks, ' + (name||'there') + '! This is a demo site — your message would be sent to: ' + email);
  this.reset();
});