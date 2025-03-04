const API_URL = 'https://hm-official.onrender.com/api';

const AppwriteService = {
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
      
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('isAdmin', 'true');
      
      return data;
    } catch (error) {
      throw error;
    }
  },
  
  getCurrentUser: async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    
    if (!token || !userId) {
      throw new Error('Not logged in');
    }
    
    return { userId };
  },
  
  logout: async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('isAdmin');
    return Promise.resolve();
  },
  
  // Blog CRUD operations
  getBlogs: async () => {
    try {
      const response = await fetch(`${API_URL}/blogs`);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  },
  
  getBlog: async (id) => {
    try {
      const response = await fetch(`${API_URL}/blogs/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  },
  
  createBlog: async (blogData) => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_URL}/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(blogData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create blog');
      }
      
      return response.json();
    } catch (error) {
      throw error;
    }
  },
  
  updateBlog: async (id, blogData) => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_URL}/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(blogData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update blog');
      }
      
      return response.json();
    } catch (error) {
      throw error;
    }
  },
  
  deleteBlog: async (id) => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_URL}/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }
      
      return true;
    } catch (error) {
      throw error;
    }
  }
};

export default AppwriteService;