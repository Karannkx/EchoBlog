import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Welcome to our Echo Blog! Our mission is to deliver engaging and informative content on a variety of topics that resonate with our readers. From in-depth articles to light-hearted stories, we aim to provide a rich and diverse experience for everyone who visits. Our team is dedicated to researching, writing, and sharing valuable insights that keep our audience informed and entertained.
        </p>
        <p>
        We pride ourselves on our commitment to quality and authenticity. Each piece of content is crafted with care to ensure it meets the highest standards. Our writers come from different backgrounds, bringing a wealth of knowledge and unique perspectives to the table. This diversity helps us cover a broad spectrum of subjects, from technology and lifestyle to health and culture.
        </p>
        <p>
        Our blog is not just a platform for us to share our thoughts; it's a space for dialogue and community. We encourage our readers to engage with our content, provide feedback, and participate in discussions. Your input is invaluable as it helps us improve and adapt to your interests and needs. We believe that through open communication and shared experiences, we can create a more connected and informed community.
        </p>
        <p>
        Thank you for visiting our blog and being a part of our journey. We are excited to continue bringing you fresh and relevant content. Stay tuned for regular updates and don't hesitate to reach out with any questions or suggestions. Your support and engagement are what drive us to keep creating and growing.
        </p>
      </div>
    </article>
  );
};

export default About;
