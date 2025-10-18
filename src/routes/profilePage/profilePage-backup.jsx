import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const data = useLoaderData();

  const { updateUser, currentUser, refreshUser } = useContext(AuthContext);

  const navigate = useNavigate();

    // Refresh user data when profile page loads
  useEffect(() => {
    if (refreshUser) {
      refreshUser();
    }
  }, [refreshUser]);

  const handleLogout = async () => {om "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const data = useLoaderData();

  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  // Fetch latest user data when component loads
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await apiRequest.get("/debug/me");
        // Update the current user with fresh data from server
        updateUser(res.data);
      } catch (err) {
        console.log("Error fetching user data:", err);
      }
    };

    if (currentUser) {
      fetchUserData();
    }
  }, []);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
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
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            {(currentUser.isApproved || currentUser.role === "admin") ? (
              <Link to="/add">
                <button>Create New Post</button>
              </Link>
            ) : (
              <div className="pending-notice">
                <p>Your account is pending approval. You cannot create posts yet.</p>
              </div>
            )}
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>
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
      <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data}/>}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
