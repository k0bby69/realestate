import { 
  listData, 
  featuredListings, 
  userData, 
  agentsData, 
  chatsData, 
  messagesData, 
  savedPostsData, 
  userPostsData, 
  blogPostsData,
  testimonialsData,
  areaGuidesData 
} from './mockData';

// Mock API request handler to simulate backend responses
const mockApiRequest = {
  get: async (url) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 700));
    
    // Parse URL and parameters
    const [path, queryString] = url.split('?');
    const params = new URLSearchParams(queryString || '');
    
    switch (true) {
      // Posts endpoints
      case path === '/posts':
        return { data: listData };
      
      case path.startsWith('/posts/'):
        const postId = parseInt(path.split('/')[2]);
        const post = listData.find(p => p.id === postId);
        if (!post) throw new Error('Post not found');
        return { data: post };
      
      // User endpoints  
      case path === '/users/profile':
        return { data: userData };
      
      case path === '/users/profilePosts':
        return { 
          data: { 
            userPosts: userPostsData, 
            savedPosts: savedPostsData 
          } 
        };
      
      // Agents endpoints
      case path === '/agents':
        return { data: agentsData };
      
      // Chats endpoints
      case path === '/chats':
        return { data: chatsData };
      
      case path.startsWith('/messages/'):
        const chatId = path.split('/')[2];
        return { data: messagesData[chatId] || [] };
      
      // Blog endpoints
      case path === '/blogs':
        return { data: blogPostsData };
      
      case path.startsWith('/blogs/'):
        const blogId = path.split('/')[2];
        const blog = blogPostsData.find(b => b.id === blogId);
        if (!blog) throw new Error('Blog post not found');
        return { data: blog };
      
      // Testimonials
      case path === '/testimonials':
        return { data: testimonialsData };
      
      // Area guides
      case path === '/area-guides':
        return { data: areaGuidesData };
      
      case path.startsWith('/area-guides/'):
        const areaId = path.split('/')[2];
        const area = areaGuidesData.find(a => a.id === areaId);
        if (!area) throw new Error('Area guide not found');
        return { data: area };
      
      // Featured listings
      case path === '/featured':
        return { data: featuredListings };
      
      // Admin endpoints (mock empty responses)
      case path === '/admin/users/pending':
        return { data: [] };
      
      case path === '/admin/users':
        return { data: [userData] };
      
      default:
        console.warn(`Unhandled GET request: ${url}`);
        return { data: null };
    }
  },
  
  post: async (url, data) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 600));
    
    switch (url) {
      case '/auth/login':
        // Mock successful login
        if (data.username && data.password) {
          return { data: userData };
        }
        throw new Error('Invalid credentials');
      
      case '/auth/register':
        // Mock successful registration
        return { 
          data: { 
            ...userData, 
            username: data.username, 
            email: data.email 
          } 
        };
      
      case '/auth/logout':
        return { data: { message: 'Logged out successfully' } };
      
      case '/posts':
        // Mock creating a new post
        const newPost = {
          id: Math.max(...listData.map(p => p.id)) + 1,
          ...data,
          createdAt: new Date().toISOString(),
          userId: userData.id
        };
        listData.push(newPost);
        return { data: newPost };
      
      case '/users/save':
        // Mock saving/unsaving a post
        const postId = data.postId;
        const isAlreadySaved = savedPostsData.some(p => p.id === postId);
        
        if (isAlreadySaved) {
          // Remove from saved posts
          const index = savedPostsData.findIndex(p => p.id === postId);
          savedPostsData.splice(index, 1);
          return { data: { message: 'Post removed from saved' } };
        } else {
          // Add to saved posts
          const post = listData.find(p => p.id === postId);
          if (post) {
            savedPostsData.push(post);
            return { data: { message: 'Post saved successfully' } };
          }
        }
        throw new Error('Post not found');
      
      default:
        if (url.startsWith('/messages/')) {
          // Mock sending a message
          const chatId = url.split('/')[2];
          const newMessage = {
            id: `msg_${Date.now()}`,
            text: data.text,
            userId: userData.id,
            createdAt: new Date().toISOString()
          };
          
          if (!messagesData[chatId]) {
            messagesData[chatId] = [];
          }
          messagesData[chatId].push(newMessage);
          
          return { data: newMessage };
        }
        
        console.warn(`Unhandled POST request: ${url}`);
        return { data: { message: 'Success' } };
    }
  },
  
  put: async (url, data) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 400 + Math.random() * 600));
    
    switch (true) {
      case url.startsWith('/users/'):
        // Mock updating user profile
        Object.assign(userData, data);
        return { data: userData };
      
      case url.startsWith('/chats/read/'):
        // Mock marking chat as read
        const chatId = url.split('/')[3];
        const chat = chatsData.find(c => c.id === chatId);
        if (chat && !chat.seenBy.includes(userData.id)) {
          chat.seenBy.push(userData.id);
        }
        return { data: { message: 'Chat marked as read' } };
      
      default:
        console.warn(`Unhandled PUT request: ${url}`);
        return { data: { message: 'Updated successfully' } };
    }
  },
  
  delete: async (url) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));
    
    if (url.startsWith('/admin/users/')) {
      // Mock deleting a user
      return { data: { message: 'User deleted successfully' } };
    }
    
    console.warn(`Unhandled DELETE request: ${url}`);
    return { data: { message: 'Deleted successfully' } };
  }
};

export default mockApiRequest;