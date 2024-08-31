import React, { useContext } from "react";
import { Context } from "../../main";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const HeroSection = () => {
  const { blogs, isAuthenticated } = useContext(Context);

  const handleBlogClick = (e, id) => {
    if (!isAuthenticated) {
      e.preventDefault();
      toast.error("Please log in to view this blog.");
    }
  };

  return (
    <section className="hero">
      {blogs && blogs.length > 0 ? (
        blogs.slice(0, 2).map((element) => (
          <Link
            to={isAuthenticated ? `/blog/${element._id}` : "#"}
            className="card"
            key={element._id}
            onClick={(e) => handleBlogClick(e, element._id)}
            style={{ cursor: isAuthenticated ? 'pointer' : 'default' }}
          >
            <img src={element.mainImage.url} alt="blog" className="blogImg" />
            <div className="category">{element.category}</div>
            <h1>{element.title}</h1>
            <div className="writer_section">
              <div className="author">
                <img src={element.authorAvatar} alt="author_avatar" />
                <p>{element.authorName}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <BeatLoader color="gray" size={30} />
      )}
    </section>
  );
};

export default HeroSection;
