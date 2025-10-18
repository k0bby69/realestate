import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest.get("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest.get("/posts?" + (query || ''));
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  const postPromise = apiRequest.get("/users/profilePosts").catch(err => {
    console.error("❌ Error loading posts:", err);
    // Return empty response for auth errors instead of throwing
    return { data: { userPosts: [], savedPosts: [] } };
  });
  
  return defer({
    postResponse: postPromise,
  });
};
