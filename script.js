// script.js - minimal interactions
document.addEventListener('DOMContentLoaded', function(){
  // Simple fake order flow
  document.querySelectorAll('.order-btn').forEach(btn=>{
    btn.addEventListener('click', function(e){
      const dish = this.dataset.dish || 'Meal';
      alert('Order placed for: ' + dish + '\n(This is a demo. Connect to backend to process real orders.)');
    });
  });

  // Chef apply form
  const chefForm = document.getElementById('chef-form');
  if(chefForm){
    chefForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Application received! We will contact you for verification. (Demo submission)');
      chefForm.reset();
    });
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks for reaching out! We will respond shortly. (Demo submission)');
      contactForm.reset();
    });
  }
});
