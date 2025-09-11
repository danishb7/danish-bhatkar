// EmailJS Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init('apyTEi8EyZyH04i-1'); // Replace with your actual public key
    
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Disable submit button and show loading state
            submitBtn.disabled = true;
            submitBtn.value = 'Sending...';
            formStatus.style.display = 'block';
            formStatus.innerHTML = '<p style="color: #4acaa8;">Sending your message...</p>';
            
            // Send email using EmailJS
            emailjs.sendForm('service_b27w4mc', 'template_lbsl1t7', contactForm)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message
                    formStatus.innerHTML = '<p style="color: #4acaa8; font-weight: bold;">✓ Message sent successfully! I\'ll get back to you soon.</p>';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Re-enable submit button
                    submitBtn.disabled = false;
                    submitBtn.value = 'Send Message';
                    
                    // Hide status message after 5 seconds
                    setTimeout(() => {
                        formStatus.style.display = 'none';
                    }, 5000);
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    formStatus.innerHTML = '<p style="color: #ff6b6b; font-weight: bold;">✗ Failed to send message. Please try again or use the direct email link below.</p>';
                    
                    // Re-enable submit button
                    submitBtn.disabled = false;
                    submitBtn.value = 'Send Message';
                    
                    // Hide status message after 8 seconds
                    setTimeout(() => {
                        formStatus.style.display = 'none';
                    }, 8000);
                });
        });
    }
});