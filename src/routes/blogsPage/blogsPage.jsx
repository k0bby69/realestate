import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPostsData } from "../../lib/mockData";
import "./blogsPage.scss";

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Use the blog posts from mock data
    setBlogs(blogPostsData);
  }, []);

  return (
    <div className="blogsPage">
      <div className="container">
        <div className="pageHeader">
          <h1>Real Estate Insights & News</h1>
          <p>Stay informed with the latest trends, tips, and expert advice on Ghana's real estate market</p>
        </div>

        <div className="blogsGrid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blogCard">
              <div className="blogImage">
                <img src={blog.image} alt={blog.title} />
                <span className="category">{blog.category}</span>
              </div>
              <div className="blogContent">
                <div className="blogMeta">
                  <span className="date">
                    <i className="far fa-calendar"></i> {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                  <span className="readTime">
                    <i className="far fa-clock"></i> {blog.readTime}
                  </span>
                </div>
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
                <div className="readMore">
                  Read Full Article <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blogsCTA">
          <h2>Want to Share Your Real Estate Story?</h2>
          <p>We'd love to hear from you. Contact us to contribute or suggest topics.</p>
          <a href="mailto:info@OARealty.com?subject=Blog Contribution" className="ctaButton">
            <i className="fas fa-envelope"></i> Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
