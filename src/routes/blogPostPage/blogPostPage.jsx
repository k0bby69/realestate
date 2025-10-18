import { useParams, Link, useNavigate } from "react-router-dom";import { useParams, Link, useNavigate } from "react-router-dom";import { useParams, Link, useNavigate } from "react-router-dom";import { useParams, Link, useNavigate } from "react-router-dom";import { useParams, Link, useNavigate } from "react-router-dom";import { useParams, Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { blogPostsData } from "../../lib/mockData";import { useState, useEffect } from "react";

import "./blogPostPage.scss";

import { blogPostsData } from "../../lib/mockData";import { useState, useEffect } from "react";

function BlogPostPage() {

  const { id } = useParams();import "./blogPostPage.scss";

  const navigate = useNavigate();

  const [post, setPost] = useState(null);import { blogPostsData } from "../../lib/mockData";import { useState, useEffect } from "react";



  useEffect(() => {function BlogPostPage() {

    const foundPost = blogPostsData.find(p => p.id === id);

    if (foundPost) {  const { id } = useParams();import "./blogPostPage.scss";

      setPost(foundPost);

    } else {  const navigate = useNavigate();

      navigate('/blogs');

    }  const [post, setPost] = useState(null);import { blogPostsData } from "../../lib/mockData";import { useState, useEffect } from "react";import { useState, useEffect } from "react";

  }, [id, navigate]);



  if (!post) {

    return (  useEffect(() => {function BlogPostPage() {

      <div className="blogPostPage">

        <div className="container">    const foundPost = blogPostsData.find(p => p.id === id);

          <div className="notFound">

            <h2>Blog Post Not Found</h2>    if (foundPost) {  const { id } = useParams();import "./blogPostPage.scss";

            <Link to="/blogs" className="backButton">

              Back to All Blogs      setPost(foundPost);

            </Link>

          </div>    } else {  const navigate = useNavigate();

        </div>

      </div>      navigate('/blogs');

    );

  }    }  const [post, setPost] = useState(null);import { blogPostsData } from "../../lib/mockData";import { blogPostsData } from "../../lib/mockData";



  return (  }, [id, navigate]);

    <div className="blogPostPage">

      <div className="container">

        <Link to="/blogs" className="backButton">

          Back to All Blogs  if (!post) {

        </Link>

    return (  useEffect(() => {function BlogPostPage() {

        <article className="blogPost">

          <div className="postHeader">      <div className="blogPostPage">

            <span className="category">{post.category}</span>

            <h1>{post.title}</h1>        <div className="container">    const foundPost = blogPostsData.find(p => p.id === id);

            <div className="postMeta">

              <div className="authorInfo">          <div className="notFound">

                <img src={post.authorAvatar} alt={post.author} className="authorAvatar" />

                <span className="author">{post.author}</span>            <h2>Blog Post Not Found</h2>    if (foundPost) {  const { id } = useParams();import "./blogPostPage.scss";import "./blogPostPage.scss";

              </div>

              <span className="date">            <Link to="/blogs" className="backButton">

                {new Date(post.publishedAt).toLocaleDateString()}

              </span>              Back to All Blogs      setPost(foundPost);

              <span className="readTime">{post.readTime}</span>

            </div>            </Link>

          </div>

          </div>    } else {  const navigate = useNavigate();

          <div className="postImage">

            <img src={post.image} alt={post.title} />        </div>

          </div>

      </div>      navigate('/blogs');

          <div 

            className="postContent"    );

            dangerouslySetInnerHTML={{ __html: post.content }}

          />  }    }  const [post, setPost] = useState(null);

        </article>



        <div className="navigation">

          <Link to="/blogs" className="allBlogsBtn">  return (  }, [id, navigate]);

            View All Articles

          </Link>    <div className="blogPostPage">

        </div>

      </div>      <div className="container">

    </div>

  );        <Link to="/blogs" className="backButton">

}

          Back to All Blogs  if (!post) {

export default BlogPostPage;
        </Link>

    return (  useEffect(() => {function BlogPostPage() {function BlogPostPage() {

        <article className="blogPost">

          <div className="postHeader">      <div className="blogPostPage">

            <span className="category">{post.category}</span>

            <h1>{post.title}</h1>        <div className="container">    const foundPost = blogPostsData.find(p => p.id === id);

            <div className="postMeta">

              <div className="authorInfo">          <div className="notFound">

                <img src={post.authorAvatar} alt={post.author} className="authorAvatar" />

                <span className="author">{post.author}</span>            <h2>Blog Post Not Found</h2>    if (foundPost) {  const { id } = useParams();  const { id } = useParams();

              </div>

              <span className="date">            <Link to="/blogs" className="backButton">

                {new Date(post.publishedAt).toLocaleDateString()}

              </span>              <i className="fas fa-arrow-left"></i> Back to All Blogs      setPost(foundPost);

              <span className="readTime">{post.readTime}</span>

            </div>            </Link>

          </div>

          </div>    } else {  const navigate = useNavigate();  const navigate = useNavigate();

          <div className="postImage">

            <img src={post.image} alt={post.title} />        </div>

          </div>

      </div>      navigate('/blogs');

          <div 

            className="postContent"    );

            dangerouslySetInnerHTML={{ __html: post.content }}

          />  }    }  const [post, setPost] = useState(null);  const [post, setPost] = useState(null);



          <div className="postFooter">

            <div className="socialShare">

              <h4>Share this article</h4>  return (  }, [id, navigate]);

              <div className="shareButtons">

                <button className="shareBtn facebook">    <div className="blogPostPage">

                  Facebook

                </button>      <div className="container">

                <button className="shareBtn twitter">

                  Twitter        <Link to="/blogs" className="backButton">

                </button>

                <button className="shareBtn linkedin">          <i className="fas fa-arrow-left"></i> Back to All Blogs  if (!post) {

                  LinkedIn

                </button>        </Link>

                <button className="shareBtn email">

                  Email    return (  useEffect(() => {  useEffect(() => {

                </button>

              </div>        <article className="blogPost">

            </div>

          </div>          <div className="postHeader">      <div className="blogPostPage">

        </article>

            <span className="category">{post.category}</span>

        <div className="relatedPosts">

          <h3>Related Articles</h3>            <h1>{post.title}</h1>        <div className="container">    // Find the blog post by ID    // Find the blog post by ID

          <div className="relatedGrid">

            {blogPostsData            <div className="postMeta">

              .filter(relatedPost => relatedPost.id !== post.id && relatedPost.category === post.category)

              .slice(0, 2)              <div className="authorInfo">          <div className="notFound">

              .map(relatedPost => (

                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="relatedCard">                <img src={post.authorAvatar} alt={post.author} className="authorAvatar" />

                  <img src={relatedPost.image} alt={relatedPost.title} />

                  <div className="relatedContent">                <span className="author">            <h2>Blog Post Not Found</h2>    const foundPost = blogPostsData.find(p => p.id === id);    const foundPost = blogPostsData.find(p => p.id === id);

                    <span className="relatedCategory">{relatedPost.category}</span>

                    <h4>{relatedPost.title}</h4>                  <i className="fas fa-user"></i> {post.author}

                    <p>{relatedPost.excerpt}</p>

                  </div>                </span>            <Link to="/blogs" className="backButton">

                </Link>

              ))}              </div>

          </div>

        </div>              <span className="date">              Back to All Blogs    if (foundPost) {    if (foundPost) {



        <div className="navigation">                <i className="far fa-calendar"></i> {new Date(post.publishedAt).toLocaleDateString()}

          <Link to="/blogs" className="allBlogsBtn">

            View All Articles              </span>            </Link>

          </Link>

        </div>              <span className="readTime">

      </div>

    </div>                <i className="far fa-clock"></i> {post.readTime}          </div>      setPost(foundPost);      setPost(foundPost);

  );

}              </span>



export default BlogPostPage;            </div>        </div>

          </div>

      </div>    } else {    } else {

          <div className="postImage">

            <img src={post.image} alt={post.title} />    );

          </div>

  }      // Post not found, redirect to blogs page      // Post not found, redirect to blogs page

          <div 

            className="postContent"

            dangerouslySetInnerHTML={{ __html: post.content }}

          />  return (      navigate('/blogs');      navigate('/blogs');



          <div className="postFooter">    <div className="blogPostPage">

            <div className="socialShare">

              <h4>Share this article</h4>      <div className="container">    }    }

              <div className="shareButtons">

                <button className="shareBtn facebook">        <Link to="/blogs" className="backButton">

                  <i className="fab fa-facebook-f"></i> Facebook

                </button>          Back to All Blogs  }, [id, navigate]);  }, [id, navigate]);

                <button className="shareBtn twitter">

                  <i className="fab fa-twitter"></i> Twitter        </Link>

                </button>

                <button className="shareBtn linkedin">

                  <i className="fab fa-linkedin-in"></i> LinkedIn

                </button>        <article className="blogPost">

                <button className="shareBtn email">

                  <i className="fas fa-envelope"></i> Email          <div className="postHeader">  if (!post) {  if (!post) {

                </button>

              </div>            <span className="category">{post.category}</span>

            </div>

          </div>            <h1>{post.title}</h1>    return (        <p>Ghana's real estate market has shown remarkable growth in 2025, with increasing demand for both residential and commercial properties. The market is characterized by steady appreciation rates and expanding opportunities for investors.</p>

        </article>

            <div className="postMeta">

        <div className="relatedPosts">

          <h3>Related Articles</h3>              <div className="authorInfo">      <div className="blogPostPage">        

          <div className="relatedGrid">

            {blogPostsData                <img src={post.authorAvatar} alt={post.author} className="authorAvatar" />

              .filter(relatedPost => relatedPost.id !== post.id && relatedPost.category === post.category)

              .slice(0, 2)                <span className="author">{post.author}</span>        <div className="container">        <h3>Key Trends</h3>

              .map(relatedPost => (

                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="relatedCard">              </div>

                  <img src={relatedPost.image} alt={relatedPost.title} />

                  <div className="relatedContent">              <span className="date">          <div className="notFound">        <ul>

                    <span className="relatedCategory">{relatedPost.category}</span>

                    <h4>{relatedPost.title}</h4>                {new Date(post.publishedAt).toLocaleDateString()}

                    <p>{relatedPost.excerpt}</p>

                  </div>              </span>            <h2>Blog Post Not Found</h2>          <li><strong>Urban Development:</strong> Major cities like Accra, Kumasi, and Takoradi are experiencing rapid urbanization with new residential and commercial projects.</li>

                </Link>

              ))}              <span className="readTime">{post.readTime}</span>

          </div>

        </div>            </div>            <Link to="/blogs" className="backButton">          <li><strong>Affordable Housing:</strong> Government initiatives have spurred growth in the affordable housing sector, making homeownership more accessible.</li>



        <div className="navigation">          </div>

          <Link to="/blogs" className="allBlogsBtn">

            <i className="fas fa-th-large"></i> View All Articles              <i className="fas fa-arrow-left"></i> Back to All Blogs          <li><strong>Foreign Investment:</strong> Increased interest from diaspora and international investors is driving market growth.</li>

          </Link>

        </div>          <div className="postImage">

      </div>

    </div>            <img src={post.image} alt={post.title} />            </Link>          <li><strong>Technology Integration:</strong> PropTech solutions are making property search and transactions more efficient.</li>

  );

}          </div>



export default BlogPostPage;          </div>        </ul>

          <div 

            className="postContent"        </div>

            dangerouslySetInnerHTML={{ __html: post.content }}

          />      </div>        <h3>Market Performance</h3>

        </article>

    );        <p>Property values in prime locations have appreciated by 8-12% year-over-year, while emerging neighborhoods show even higher growth potential. Rental yields remain attractive, typically ranging from 6% to 10% annually.</p>

        <div className="navigation">

          <Link to="/blogs" className="allBlogsBtn">  }

            View All Articles

          </Link>        <h3>Investment Opportunities</h3>

        </div>

      </div>  return (        <p>Investors should consider:</p>

    </div>

  );    <div className="blogPostPage">        <ul>

}

      <div className="container">          <li>Mixed-use developments in commercial hubs</li>

export default BlogPostPage;
        <Link to="/blogs" className="backButton">          <li>Gated residential communities</li>

          <i className="fas fa-arrow-left"></i> Back to All Blogs          <li>Student housing near universities</li>

        </Link>          <li>Hospitality properties in tourist areas</li>

        </ul>

        <article className="blogPost">

          <div className="postHeader">        <h3>Looking Ahead</h3>

            <span className="category">{post.category}</span>        <p>The outlook for Ghana's real estate market remains positive, with continued infrastructure development and economic growth expected to drive demand. Strategic location selection and thorough market research will be key to successful investments.</p>

            <h1>{post.title}</h1>      `

            <div className="postMeta">    },

              <div className="authorInfo">    2: {

                <img src={post.authorAvatar} alt={post.author} className="authorAvatar" />      id: 2,

                <span className="author">      title: "Top 5 Neighborhoods in Accra for Young Professionals",

                  <i className="fas fa-user"></i> {post.author}      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop",

                </span>      date: "March 10, 2025",

              </div>      category: "Location Guides",

              <span className="date">      readTime: "7 min read",

                <i className="far fa-calendar"></i> {new Date(post.publishedAt).toLocaleDateString()}      author: "OA Realty Team",

              </span>      content: `

              <span className="readTime">        <h2>Finding Your Perfect Neighborhood</h2>

                <i className="far fa-clock"></i> {post.readTime}        <p>Accra offers diverse neighborhoods, each with unique characteristics. Here are the top 5 areas ideal for young professionals.</p>

              </span>

            </div>        <h3>1. Cantonments</h3>

          </div>        <p>A prestigious residential area known for its embassies, upscale restaurants, and proximity to business districts. Perfect for professionals seeking a blend of work-life balance and urban convenience.</p>

        <ul>

          <div className="postImage">          <li>Average Rent: $800-1,500/month</li>

            <img src={post.image} alt={post.title} />          <li>Commute: 10-15 minutes to city center</li>

          </div>          <li>Amenities: High-end restaurants, gyms, shopping</li>

        </ul>

          <div 

            className="postContent"        <h3>2. East Legon</h3>

            dangerouslySetInnerHTML={{ __html: post.content }}        <p>A vibrant neighborhood with excellent nightlife, modern apartments, and co-working spaces. Ideal for young professionals who value connectivity and entertainment.</p>

          />        <ul>

          <li>Average Rent: $600-1,200/month</li>

          <div className="postFooter">          <li>Commute: 20 minutes to Airport area</li>

            <div className="socialShare">          <li>Amenities: Cafes, bars, fitness centers</li>

              <h4>Share this article</h4>        </ul>

              <div className="shareButtons">

                <button className="shareBtn facebook">        <h3>3. Airport Residential</h3>

                  <i className="fab fa-facebook-f"></i> Facebook        <p>Close to Kotoka International Airport with excellent security and modern infrastructure. Great for professionals with frequent travel needs.</p>

                </button>        <ul>

                <button className="shareBtn twitter">          <li>Average Rent: $900-1,600/month</li>

                  <i className="fab fa-twitter"></i> Twitter          <li>Commute: 5 minutes to airport, 15 to CBD</li>

                </button>          <li>Amenities: Hotels, business centers, restaurants</li>

                <button className="shareBtn linkedin">        </ul>

                  <i className="fab fa-linkedin-in"></i> LinkedIn

                </button>        <h3>4. Labone</h3>

                <button className="shareBtn email">        <p>A trendy area with a mix of traditional and modern housing. Known for its artistic community and cultural attractions.</p>

                  <i className="fas fa-envelope"></i> Email        <ul>

                </button>          <li>Average Rent: $500-1,000/month</li>

              </div>          <li>Commute: 15 minutes to business districts</li>

            </div>          <li>Amenities: Art galleries, boutiques, cafes</li>

          </div>        </ul>

        </article>

        <h3>5. Dzorwulu</h3>

        <div className="relatedPosts">        <p>An emerging neighborhood offering good value with improving infrastructure. Perfect for budget-conscious professionals.</p>

          <h3>Related Articles</h3>        <ul>

          <div className="relatedGrid">          <li>Average Rent: $400-800/month</li>

            {blogPostsData          <li>Commute: 20 minutes to central areas</li>

              .filter(relatedPost => relatedPost.id !== post.id && relatedPost.category === post.category)          <li>Amenities: Local markets, gyms, schools</li>

              .slice(0, 2)        </ul>

              .map(relatedPost => (

                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="relatedCard">        <h3>Making Your Decision</h3>

                  <img src={relatedPost.image} alt={relatedPost.title} />        <p>Consider your priorities: proximity to work, lifestyle preferences, budget, and long-term goals. Visit neighborhoods at different times to get a feel for the community before making your choice.</p>

                  <div className="relatedContent">      `

                    <span className="relatedCategory">{relatedPost.category}</span>    },

                    <h4>{relatedPost.title}</h4>    3: {

                    <p>{relatedPost.excerpt}</p>      id: 3,

                  </div>      title: "How to Sell Your Property Fast in Ghana",

                </Link>      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1200&h=600&fit=crop",

              ))}      date: "March 5, 2025",

          </div>      category: "Selling Tips",

        </div>      readTime: "6 min read",

      author: "OA Realty Team",

        <div className="navigation">      content: `

          <Link to="/blogs" className="allBlogsBtn">        <h2>Maximize Your Property's Appeal</h2>

            <i className="fas fa-th-large"></i> View All Articles        <p>Selling your property quickly requires strategic planning and execution. Follow these proven tips to attract serious buyers.</p>

          </Link>

        </div>        <h3>1. Price It Right</h3>

      </div>        <p>Competitive pricing is crucial. Research comparable properties in your area and consider getting a professional valuation. Overpricing can lead to extended time on market.</p>

    </div>

  );        <h3>2. Enhance Curb Appeal</h3>

}        <ul>

          <li>Fresh paint on exterior walls</li>

export default BlogPostPage;          <li>Well-maintained lawn and garden</li>
          <li>Clean and repaired gates/fences</li>
          <li>Proper outdoor lighting</li>
        </ul>

        <h3>3. Stage Your Property</h3>
        <p>Present your property in its best light:</p>
        <ul>
          <li>Declutter all rooms</li>
          <li>Deep clean thoroughly</li>
          <li>Remove personal items</li>
          <li>Arrange furniture to maximize space</li>
          <li>Add fresh flowers or plants</li>
        </ul>

        <h3>4. Professional Photography</h3>
        <p>High-quality photos are essential for online listings. Consider hiring a professional photographer to showcase your property's best features.</p>

        <h3>5. Market Effectively</h3>
        <ul>
          <li>List on multiple platforms</li>
          <li>Use social media promotion</li>
          <li>Create virtual tours</li>
          <li>Network with real estate agents</li>
        </ul>

        <h3>6. Be Flexible with Showings</h3>
        <p>Accommodate viewing requests promptly. The more people who see your property, the faster it will sell.</p>

        <h3>7. Highlight Unique Features</h3>
        <p>Emphasize what makes your property special: security features, proximity to amenities, recent renovations, or energy-efficient installations.</p>

        <h3>Legal Preparations</h3>
        <p>Ensure all documentation is in order: land title, building permits, and property tax receipts. This speeds up the transaction process.</p>
      `
    }
  };

  useEffect(() => {
    const foundPost = blogPosts[id];
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="blogPostPage">
        <div className="container">
          <div className="notFound">
            <h2>Blog Post Not Found</h2>
            <Link to="/blogs" className="backButton">
              <i className="fas fa-arrow-left"></i> Back to All Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blogPostPage">
      <div className="container">
        <Link to="/blogs" className="backButton">
          <i className="fas fa-arrow-left"></i> Back to All Blogs
        </Link>

        <article className="blogPost">
          <div className="postHeader">
            <span className="category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="postMeta">
              <span className="author">
                <i className="fas fa-user"></i> {post.author}
              </span>
              <span className="date">
                <i className="far fa-calendar"></i> {post.date}
              </span>
              <span className="readTime">
                <i className="far fa-clock"></i> {post.readTime}
              </span>
            </div>
          </div>

          <div className="postImage">
            <img src={post.image} alt={post.title} />
          </div>

          <div 
            className="postContent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="postFooter">
            <div className="shareSection">
              <h3>Share This Article</h3>
              <div className="socialShare">
                <a href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="shareButton facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="shareButton twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={`https://linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="shareButton linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={`mailto:?subject=${post.title}&body=Check out this article: ${window.location.href}`} className="shareButton email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="contactCTA">
              <h3>Need More Information?</h3>
              <p>Contact our team for personalized advice and assistance.</p>
              <a href="mailto:info@OARealty.com?subject=Inquiry about blog post" className="ctaButton">
                <i className="fas fa-envelope"></i> Get in Touch
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPostPage;
