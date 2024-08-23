import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../main";
import toast from "react-hot-toast";

const LatestBlogs = ({ heading, newClass, blogs }) => {
  const { isAuthenticated } = useContext(Context);

  const handleBlogClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      toast.error("Please log in to view this blog.");
    }
  };

  return (
    <section className={newClass ? "dashboard-blogs blogs" : "blogs"}>
      <h3>{heading}</h3>
      <div className="container">
        {blogs && blogs.map((element) => (
          <Link
            to={isAuthenticated ? `/blog/${element._id}` : "#"}
            className="card"
            key={element._id}
            onClick={(e) => handleBlogClick(e)}
            style={{ cursor: isAuthenticated ? 'pointer' : 'default' }}
          >
            <img src={element.mainImage.url} alt="blog" />
            <span className="category">{element.category}</span>
            <h4>{element.title}</h4>
            <div className="writer_section">
              <div className="author">
                <img src={element.authorAvatar} alt="author_avatar" />
                <p>{element.authorName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
