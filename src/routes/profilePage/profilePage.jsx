import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const data = useLoaderData();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const { updateUser, currentUser, refreshUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  // If user is not authenticated, redirect to login (unless we're logging out)
  useEffect(() => {
    if (!currentUser && !isLoggingOut) {
      navigate("/login");
      return;
    }
  }, [currentUser, navigate, isLoggingOut]);

  // Refresh user data when profile page loads
  useEffect(() => {
    if (refreshUser) {
      refreshUser();
    }
  }, [refreshUser]);

  const handleLogout = () => {
    if (isLoggingOut) {
      return;
    }
    
    setIsLoggingOut(true);
    
    // Call logout function and navigate immediately
    logout();
    navigate("/");
    setIsLoggingOut(false);
  };

  // Don't render anything if user is not authenticated
  if (!currentUser) {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            {currentUser.role && (
              <span>
                Role: <b className={`role ${currentUser.role}`}>{currentUser.role}</b>
              </span>
            )}
            {currentUser.role !== "admin" && (
              <span>
                Status: <b className={`status ${currentUser.isApproved ? 'approved' : 'pending'}`}>
                  {currentUser.isApproved ? 'Approved for posting' : 'Pending approval'}
                </b>
              </span>
            )}
            <button onClick={handleLogout} disabled={isLoggingOut}>
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
          {(currentUser.isApproved || currentUser.role === "admin") && (
            <>
              <div className="title">
                <h1>My List</h1>
                <Link to="/add">
                  <button>Create New Post</button>
                </Link>
              </div>
              <Suspense fallback={<p>Loading...</p>}>
                <Await
                  resolve={data.postResponse}
                  errorElement={<p>Error loading posts!</p>}
                >
                  {(postResponse) => <List posts={postResponse.data.userPosts} />}
                </Await>
              </Suspense>
            </>
          )}
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;