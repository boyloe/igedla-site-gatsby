import React from 'react';

const ContactForm = () => {
  return (
    <form method="post" action="#">
      <label htmlFor="name">
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="subject">
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label htmlFor="message">
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  );
};
export default ContactForm;
