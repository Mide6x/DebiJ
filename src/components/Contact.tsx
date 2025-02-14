import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <main>
        <div className="contact-content">
          <h1>CONTACT</h1>
          <form className="contact-form">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
              />
            </div>
          </form>
        </div>
        <p>A poet, exactly what you need right now.</p>
      </main>
    </div>
  );
};

export default Contact;
