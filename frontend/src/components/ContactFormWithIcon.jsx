import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";

const ContactFormWithIcon = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnnabvyy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => {
          setFormStatus(null);
          setIsFormOpen(false);
        }, 2000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setFormStatus("error");
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setFormStatus(null);  // Clear the message when form closes
  };

  return (
    <>
      <div className="contact-icon-container" onClick={() => setIsFormOpen(true)}>
        <IoMdContact className="contact-icon" />
      </div>
      {isFormOpen && (
        <div className="contact-form-overlay">
          <div className="contact-form-container">
            <button className="close-button" onClick={closeForm}>
              &times;
            </button>
            <h3>Contact Us</h3> {/* Added header */}
            <form onSubmit={handleSubmit} className="news_letter">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button type="submit">Send</button>
              {formStatus === "success" && <p>Form Submitted Successfully! Thank you for contacting us!</p>}
              {formStatus === "error" && <p>There was an error submitting the form. Please try again.</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFormWithIcon;
