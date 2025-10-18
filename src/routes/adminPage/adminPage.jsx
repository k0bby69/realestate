import { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import "./adminPage.scss";

function AdminPage() {
  const [users, setUsers] = useState([]);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("pending");
  const [loading, setLoading] = useState(true);
  const [userChecked, setUserChecked] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogExcerpt, setBlogExcerpt] = useState("");
  const [blogCategory, setBlogCategory] = useState("Market Insights");
  const [blogImage, setBlogImage] = useState(null);
  const [blogImagePreview, setBlogImagePreview] = useState("");
  const { currentUser, refreshUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // First, refresh user data once when component mounts
  useEffect(() => {
    if (refreshUser && !userChecked) {
      refreshUser().finally(() => setUserChecked(true));
    }
  }, [refreshUser, userChecked]);

  // Check admin access only after user data is refreshed
  useEffect(() => {
    if (!userChecked) return; // Wait for user data to be refreshed

    // Check if user is admin
    if (!currentUser) {
      navigate("/login");
      return;
    }
    
    if (currentUser.role !== "admin") {
      navigate("/");
      return;
    }

    fetchData();
  }, [currentUser, navigate, userChecked]);

  const fetchData = useCallback(async () => {
    if (!currentUser || currentUser.role !== "admin") return;
    
    try {
      setLoading(true);
      console.log(`📊 Fetching ${activeTab} users...`);
      
      if (activeTab === "pending") {
        const res = await apiRequest.get("/admin/users/pending");
        console.log("📊 Pending users loaded:", res.data.length);
        setPendingUsers(res.data);
      } else {
        const res = await apiRequest.get("/admin/users");
        console.log("📊 All users loaded:", res.data.length);
        setUsers(res.data);
      }
    } catch (err) {
      console.error("❌ Error fetching users:", err);
      console.error("Error details:", err.response?.data || err.message);
      
      if (err.response?.status === 403) {
        alert("Access denied. Admin privileges required.");
        navigate("/");
      } else if (err.message === "Network Error") {
        alert("Cannot connect to server. Please ensure the API server is running on port 8800.");
      }
    } finally {
      setLoading(false);
    }
  }, [activeTab, currentUser, navigate]);

  useEffect(() => {
    if (currentUser?.role === "admin" && userChecked) {
      fetchData();
    }
  }, [activeTab, fetchData, currentUser, userChecked]);

  const handleApprove = async (userId) => {
    try {
      console.log("🔄 Attempting to approve user:", userId);
      const response = await apiRequest.patch(`/admin/users/${userId}/approve`);
      console.log("✅ User approved successfully:", response.data);
      fetchData(); // Refresh the list
      alert(`User approved successfully: ${response.data.user?.username || userId}`);
    } catch (err) {
      console.error("❌ Error approving user:", err);
      console.error("Error details:", err.response?.data || err.message);
      
      let errorMessage = "Failed to approve user";
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.message === "Network Error") {
        errorMessage = "Cannot connect to server. Please ensure the API server is running on port 8800.";
      }
      
      alert(errorMessage);
    }
  };

  const handleRevoke = async (userId) => {
    try {
      await apiRequest.patch(`/admin/users/${userId}/revoke`);
      fetchData(); // Refresh the list
    } catch (err) {
      console.error("Error revoking approval:", err);
      alert("Failed to revoke approval");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlogImage(file);
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    
    if (!blogTitle || !blogExcerpt) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Use the uploaded image preview URL or default to /bg.png
      const imageUrl = blogImagePreview || "/bg.png";
      
      const blogData = {
        title: blogTitle,
        excerpt: blogExcerpt,
        category: blogCategory,
        image: imageUrl,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        readTime: "5 min read"
      };

      // Here you would normally send to an API with the image file
      // For now, we're just logging it
      console.log("Creating blog:", blogData);
      if (blogImage) {
        console.log("Blog image file:", blogImage.name);
      }
      alert("Blog post created successfully!");
      
      // Reset form
      setBlogTitle("");
      setBlogExcerpt("");
      setBlogCategory("Market Insights");
      setBlogImage(null);
      setBlogImagePreview("");
    } catch (err) {
      console.error("Error creating blog:", err);
      alert("Failed to create blog post");
    }
  };

  const handleDelete = async (userId) => {
    const userName = users.find(u => u.id === userId)?.username || 
                     pendingUsers.find(u => u.id === userId)?.username || 
                     `User ${userId}`;

    if (window.confirm(`⚠️ Are you sure you want to delete ${userName}?\n\nThis will permanently delete:\n• The user account\n• All their posts\n• All their saved posts\n• All their messages\n• All their chat history\n\nThis action cannot be undone!`)) {
      try {
        console.log("🗑️ Attempting to delete user:", userId);
        const response = await apiRequest.delete(`/admin/users/${userId}`);
        console.log("✅ User deleted successfully:", response.data);
        
        alert(`User ${userName} and all related data have been deleted successfully.`);
        fetchData(); // Refresh the list
      } catch (err) {
        console.error("❌ Error deleting user:", err);
        console.error("Error details:", err.response?.data || err.message);
        
        let errorMessage = "Failed to delete user";
        if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        } else if (err.message === "Network Error") {
          errorMessage = "Cannot connect to server. Please ensure the API server is running on port 8800.";
        }
        
        alert(`Failed to delete user: ${errorMessage}`);
      }
    }
  };

  // Show loading while checking user data
  if (!userChecked) {
    return <div className="loading">Loading...</div>;
  }

  // Show access denied only after user data is checked
  if (!currentUser || currentUser.role !== "admin") {
    return <div>Access denied. Admin privileges required.</div>;
  }

  return (
    <div className="adminPage">
      <div className="wrapper">
        <h1>Admin Dashboard</h1>
        
        <div className="tabs">
          <button 
            className={activeTab === "pending" ? "active" : ""}
            onClick={() => setActiveTab("pending")}
          >
            Pending Approvals ({pendingUsers.length})
          </button>
          <button 
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
          >
            All Users
          </button>
          <button 
            className={activeTab === "blogs" ? "active" : ""}
            onClick={() => setActiveTab("blogs")}
          >
            Create Blog Post
          </button>
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="content">
            {activeTab === "pending" ? (
              <div className="userList">
                <h2>Users Pending Approval</h2>
                {pendingUsers.length === 0 ? (
                  <p>No users pending approval.</p>
                ) : (
                  <div className="users">
                    {pendingUsers.map((user) => (
                      <div key={user.id} className="userCard">
                        <div className="userInfo">
                          <img 
                            src={user.avatar || "/noavatar.jpg"} 
                            alt="avatar" 
                          />
                          <div className="details">
                            <h3>{user.username}</h3>
                            <p>{user.email}</p>
                            <span>Registered: {new Date(user.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="actions">
                          <button 
                            className="approve"
                            onClick={() => handleApprove(user.id)}
                          >
                            Approve
                          </button>
                          <button 
                            className="delete"
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : activeTab === "blogs" ? (
              <div className="blogForm">
                <h2>Create New Blog Post</h2>
                <form onSubmit={handleCreateBlog}>
                  <div className="formGroup">
                    <label htmlFor="blogTitle">Blog Title</label>
                    <input
                      type="text"
                      id="blogTitle"
                      value={blogTitle}
                      onChange={(e) => setBlogTitle(e.target.value)}
                      placeholder="Enter blog title"
                      required
                    />
                  </div>
                  
                  <div className="formGroup">
                    <label htmlFor="blogCategory">Category</label>
                    <select
                      id="blogCategory"
                      value={blogCategory}
                      onChange={(e) => setBlogCategory(e.target.value)}
                    >
                      <option value="Market Insights">Market Insights</option>
                      <option value="Location Guides">Location Guides</option>
                      <option value="Selling Tips">Selling Tips</option>
                      <option value="Investment">Investment</option>
                      <option value="Buying Guide">Buying Guide</option>
                      <option value="Luxury">Luxury</option>
                    </select>
                  </div>
                  
                  <div className="formGroup">
                    <label htmlFor="blogExcerpt">Blog Excerpt</label>
                    <textarea
                      id="blogExcerpt"
                      value={blogExcerpt}
                      onChange={(e) => setBlogExcerpt(e.target.value)}
                      placeholder="Enter a brief description of your blog post"
                      rows="4"
                      required
                    />
                  </div>
                  
                  <div className="formGroup">
                    <label htmlFor="blogImage">Blog Image</label>
                    <input
                      type="file"
                      id="blogImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="imageInput"
                    />
                    {blogImagePreview && (
                      <div className="imagePreview">
                        <img src={blogImagePreview} alt="Blog preview" />
                        <button 
                          type="button" 
                          className="removeImage"
                          onClick={() => {
                            setBlogImage(null);
                            setBlogImagePreview("");
                          }}
                        >
                          Remove Image
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <button type="submit" className="createBlogBtn">
                    Create Blog Post
                  </button>
                </form>
              </div>
            ) : (
              <div className="userList">
                <h2>All Users</h2>
                <div className="users">
                  {users.map((user) => (
                    <div key={user.id} className="userCard">
                      <div className="userInfo">
                        <img 
                          src={user.avatar || "/noavatar.jpg"} 
                          alt="avatar" 
                        />
                        <div className="details">
                          <h3>{user.username}</h3>
                          <p>{user.email}</p>
                          <div className="status">
                            <span className={`role ${user.role}`}>{user.role}</span>
                            <span className={`approval ${user.isApproved ? 'approved' : 'pending'}`}>
                              {user.isApproved ? 'Approved' : 'Pending'}
                            </span>
                          </div>
                          <span>Posts: {user._count?.posts || 0}</span>
                          <span>Registered: {new Date(user.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      {user.role !== "admin" && (
                        <div className="actions">
                          {user.isApproved ? (
                            <button 
                              className="revoke"
                              onClick={() => handleRevoke(user.id)}
                            >
                              Revoke Approval
                            </button>
                          ) : (
                            <button 
                              className="approve"
                              onClick={() => handleApprove(user.id)}
                            >
                              Approve
                            </button>
                          )}
                          <button 
                            className="delete"
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;