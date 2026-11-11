'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const submit = document.getElementById('submit-btn');
  const status = document.getElementById('form-status');
  if (window.emailjs) emailjs.init('apyTEi8EyZyH04i-1');
  function setStatus(message, state) {
    status.hidden = false;
    status.dataset.state = state;
    status.textContent = message;
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!window.emailjs) {
      setStatus('The message service is unavailable. Please use the Email Me link below.', 'error');
      return;
    }
    submit.disabled = true;
    submit.value = 'Sending…';
    setStatus('Sending your message…', 'pending');
    try {
      await emailjs.sendForm('service_b27w4mc', 'template_lbsl1t7', form);
      form.reset();
      setStatus('Message sent. Thanks for reaching out!', 'success');
    } catch (_) {
      setStatus('Your message could not be sent. Please try again or use the Email Me link below.', 'error');
    } finally {
      submit.disabled = false;
      submit.value = 'Send Message';
    }
  });
  form.addEventListener('reset', () => { status.hidden = true; });
});
