import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
  
    const response = await fetch('https://formspree.io/f/mnndnakp', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });
  
    if (response.ok) {
      setFormStatus('Message sent successfully!');
      form.reset();
    } else {
      setFormStatus('Oops! Something went wrong.');
    }
  };

  return (
    <div className="contact-page">
      <h1>Let's Connect</h1>
      <p>Have a question, collaboration idea, or project in mind? I’d love to hear from you!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject (Optional)" />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </form>

      <div className="contact-info">
        <h2>Contact Details</h2>
        <p><strong>📞 Phone:</strong> <a href="tel:+917219801439">+91 7219801439</a></p>
        <p><strong>📧 Email:</strong> <a href="mailto:mars200m9@gmail.com">mars200m9@gmail.com</a></p>
        <p><strong>📍 Location:</strong> Ambarnath (East), Thane</p>
      </div>

      <div className="social-links">
        <h2>Find me on</h2>
        <a href="https://www.linkedin.com/in/nikhil-mishra-65a717287/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;
