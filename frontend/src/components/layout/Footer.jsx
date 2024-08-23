import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import { Context } from "../../main";

const Footer = () => {
  const location = useLocation();
  const { mode } = useContext(Context);
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
        setTimeout(() => setFormStatus(null), 2000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus(null), 2000);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 2000);
    }
  };

  return (
    <footer
      className={
        location.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            Discover insightful articles, crafted to inspire and inform.
            Dive into technology, lifestyle, and more! Join our community,
            stay curious, and elevate your knowledge with fresh content 
            designed for the modern reader.
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/blogs"}>Blogs</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
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
          </form>
          {formStatus === "success" && (
            <p>Form Submitted Successfully! Thank you for contacting us!</p>
          )}
          {formStatus === "error" && (
            <p>There was an error submitting the form. Please try again.</p>
          )}
        </div>
      </div>
      <div className="container">
        <div className="logo">
          &copy; 2024 <a href="https://www.linkedin.com/in/karannkx" target="_blank" rel="noopener noreferrer" className="link">Karan Kumar</a>. All rights reserved.
        </div>
        <div className="links">
          <Link to={"https://www.instagram.com/karannkx"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://www.github.com/karannkx"} target="_blank">
            <AiFillGithub />
          </Link>
          <Link to={"https://www.youtube.com/@Karannkx"} target="_blank">
            <AiFillYoutube />
          </Link>
          <Link to={"https://www.linkedin.com/in/karannkx"} target="_blank">
            <AiFillLinkedin />
          </Link>
          <Link to="mailto:kkumar04600@gmail.com?subject=Echo%20Blogs%20Reader/Author&body=Hey%20Karan,%0A%0AI%20Am%20Your%20Website%20(Echo%20Blog)%20Reader/Author.%20I%20want%20to%20Say%20That%20..." target="_blank">
            <MdMarkEmailUnread />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
