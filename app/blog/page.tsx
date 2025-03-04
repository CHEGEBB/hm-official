'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Calendar, Clock, User, ChevronRight, X, Bookmark, Share2, ThumbsUp, Edit, Trash, Plus, LogIn } from 'lucide-react'
import Image from 'next/image'
import AppwriteService from '../appwriteservices/AppwriteService';

const categories = ["All", "Technology", "Health Tips", "Wellness", "Medical Research", "Patient Care"];

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

// Auth Modal Component
const AuthModal = ({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await AppwriteService.login(email, password);
      localStorage.setItem('isAdmin', 'true');
      onSuccess();
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-900/80 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="bg-slate-800 rounded-2xl p-8 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-slate-700 rounded-full"
        >
          <X className="w-6 h-6 text-gray-400" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-emerald-400 mb-2">Admin Login</h2>
          <p className="text-gray-400">Enter your credentials to access admin features</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 pr-4 py-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

// Blog Editor Modal Component
const BlogEditorModal = ({
  post,
  onClose,
  onSave
}: {
  post?: Post | null;
  onClose: () => void;
  onSave: (data: any) => void;
}) => {
  const [formData, setFormData] = useState<any>(post ? { ...post } : {
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'Technology',
    tags: [],
    imageUrl: '/assets/images/tech.jpeg',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min read'
  });
  
  const [newTag, setNewTag] = useState('');
  
  const placeholderImages = [
    '/assets/images/tech.jpeg',
    '/assets/images/exercise.jpeg',
    '/assets/images/mental.jpeg',
    '/assets/images/break.jpeg',
    '/assets/images/patient.jpeg',
    '/assets/images/fut.jpeg',
    '/assets/images/blogg.jpg',
    '/assets/images/bg1.jpeg',
    '/assets/images/bg2.jpeg',
    '/assets/images/bg3.jpeg',
    '/assets/images/bg4.jpeg',
    '/assets/images/bg5.jpeg',
    '/assets/images/bg6.jpeg',
    '/assets/images/bg7.jpeg',
    '/assets/images/bg8.jpeg',
    '/assets/images/bg9.jpeg',
    '/assets/images/bg10.jpeg',
    '/assets/images/bg11.jpeg',
    '/assets/images/bg12.jpeg',
    '/assets/images/bg13.jpeg',


  ];

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, newTag.trim()] });
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag: string) => tag !== tagToRemove)
    });
  };

  const formatText = (format: string) => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    let formattedText = '';
    
    switch (format) {
      case 'bold':
        formattedText = `<strong>${selectedText}</strong>`;
        break;
      case 'italic':
        formattedText = `<em>${selectedText}</em>`;
        break;
      case 'h2':
        formattedText = `<h2>${selectedText}</h2>`;
        break;
      case 'ul':
        formattedText = `<ul>\n  <li>${selectedText}</li>\n</ul>`;
        break;
      case 'li':
        formattedText = `<li>${selectedText}</li>`;
        break;
      case 'p':
        formattedText = `<p>${selectedText}</p>`;
        break;
      default:
        formattedText = selectedText;
    }
    
    const newContent = 
      textarea.value.substring(0, start) + 
      formattedText + 
      textarea.value.substring(end);
    
    setFormData({ ...formData, content: newContent });
    
    // Set focus back to textarea after formatting
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + formattedText.length,
        start + formattedText.length
      );
    }, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-900/80 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="bg-slate-800 rounded-2xl p-6 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-slate-700 rounded-full"
        >
          <X className="w-6 h-6 text-gray-400" />
        </button>

        <h2 className="text-2xl font-bold text-emerald-400 mb-6">
          {post ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
            <input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Excerpt</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              rows={2}
              placeholder="Brief summary of the blog post"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Author</label>
              <input
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                placeholder="Author name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                {categories.filter(cat => cat !== 'All').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {['bold', 'italic', 'h2', 'p', 'ul', 'li'].map((format) => (
                <button
                  key={format}
                  type="button"
                  onClick={() => formatText(format)}
                  className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600 text-sm"
                >
                  {format}
                </button>
              ))}
            </div>
            <textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none font-mono"
              rows={10}
              placeholder="Your blog content with HTML formatting"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Featured Image</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {placeholderImages.map((img) => (
                <div
                  key={img}
                  onClick={() => setFormData({ ...formData, imageUrl: img })}
                  className={`relative h-24 cursor-pointer rounded-lg overflow-hidden border-2 ${
                    formData.imageUrl === img ? 'border-emerald-500' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-700 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-red-400"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTag()}
                className="px-4 py-2 bg-slate-700 rounded-lg text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Add tag..."
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-slate-600 rounded-lg hover:bg-slate-500"
              >
                Add
              </button>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => onSave(formData)}
              className="flex-grow px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition-colors"
            >
              {post ? 'Update Post' : 'Publish Post'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Reading Mode Component
const ReadingMode = ({ post, onClose, isAdmin, onEdit, onDelete }: { 
  post: Post; 
  onClose: () => void;
  isAdmin: boolean;
  onEdit: () => void;
  onDelete: () => void;
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-900/95 z-50 overflow-y-auto"
    >
      <div className="min-h-screen py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl shadow-xl">
          <div className="relative">
            <Image
              src={post.imageUrl} 
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={onClose}
                className="p-2 bg-slate-900/80 rounded-full hover:bg-slate-900"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            {isAdmin && (
              <div className="absolute top-4 left-4 flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onEdit}
                  className="p-2 bg-emerald-500/90 rounded-full hover:bg-emerald-500"
                >
                  <Edit className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onDelete}
                  className="p-2 bg-red-500/90 rounded-full hover:bg-red-500"
                >
                  <Trash className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            )}
          </div>

          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full ${isBookmarked ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-gray-300'}`}
              >
                <Bookmark className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLikes(likes + 1)}
                className="p-2 rounded-full bg-slate-700 text-gray-300 hover:bg-slate-600 flex items-center"
              >
                <ThumbsUp className="w-5 h-5" />
                <span className="ml-1">{likes}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-slate-700 text-gray-300 hover:bg-slate-600"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>

            <h1 className="text-3xl font-bold text-white mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-6 text-gray-400">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <div className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-slate-700 rounded-full text-emerald-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showEditorModal, setShowEditorModal] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 6;

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      try {
        await AppwriteService.getCurrentUser();
        setIsAdmin(true);
      } catch {
        setIsAdmin(false);
      }
    };
    
    // Fetch blog posts
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsData = await AppwriteService.getBlogs();
        
        // Transform data to match our Post interface
        const formattedBlogs = blogsData.map((blog: any) => ({
          id: blog.$id,
          title: blog.title,
          excerpt: blog.excerpt,
          content: blog.content,
          author: blog.author,
          date: blog.date,
          readTime: blog.readTime,
          category: blog.category,
          tags: blog.tags,
          imageUrl: blog.imageUrl
        }));
        
        setPosts(formattedBlogs);
      } catch (error) {
        console.error('Failed to fetch blogs', error);
        // Fallback to hardcoded data if API fails
        // Fallback to hardcoded data if API fails
        const fallbackPosts: Post[] = [
          {
            id: 1,
            title: 'Sample Post',
            excerpt: 'This is a sample post.',
            content: '<p>This is the content of the sample post.</p>',
            author: 'Admin',
            date: new Date().toISOString().split('T')[0],
            readTime: '5 min read',
            category: 'Technology',
            tags: ['sample', 'post'],
            imageUrl: '/assets/images/tech.jpeg'
          }
        ];
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
    fetchBlogs();
  }, []);

  const handleAdminLogin = () => {
    setShowAuthModal(true);
  };

  const handleAdminLogout = async () => {
    try {
      await AppwriteService.logout();
      setIsAdmin(false);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    setShowAuthModal(false);
  };

  const handleCreatePost = () => {
    setEditingPost(null);
    setShowEditorModal(true);
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setShowEditorModal(true);
    if (selectedPost) {
      setSelectedPost(null);
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      await AppwriteService.deleteBlog(id.toString());
      setPosts(posts.filter(post => post.id !== id));
      if (selectedPost && selectedPost.id === id) {
        setSelectedPost(null);
      }
    } catch (error) {
      console.error('Failed to delete post', error);
      alert('Failed to delete post. Please try again.');
    }
  };

  const handleSavePost = async (data: any) => {
    try {
      if (editingPost) {
        // Update existing post
        const updatedBlog = await AppwriteService.updateBlog(
          editingPost.id.toString(),
          data
        );
        
        // Format the response to match our Post interface
        const formattedBlog = {
          id: parseInt(updatedBlog.$id),
          ...data
        };
        
        setPosts(posts.map(post => 
          post.id === editingPost.id ? formattedBlog : post
        ));
        
        // If this post is currently being viewed, update the view
        if (selectedPost && selectedPost.id === editingPost.id) {
          setSelectedPost(formattedBlog);
        }
      } else {
        // Add new post
        const newBlog = await AppwriteService.createBlog(data);
        
        // Format the response to match our Post interface
        const formattedBlog = {
          id: parseInt(newBlog.$id),
          ...data
        };
        
        setPosts([...posts, formattedBlog]);
      }
      
      setShowEditorModal(false);
      setEditingPost(null);
    } catch (error) {
      console.error('Failed to save post', error);
      alert('Failed to save post. Please try again.');
    }
  };

  // Filtering posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navbar with admin button */}
      <div className="bg-slate-800 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-emerald-400">HealthMaster</h1>
            
            <div className="flex items-center gap-4">
              {isAdmin ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCreatePost}
                    className="flex items-center gap-2 bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" /> New Post
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAdminLogout}
                    className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Logout
                  </motion.button>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAdminLogin}
                  className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  <LogIn className="w-4 h-4" /> Admin
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Auth Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <AuthModal
            onClose={() => setShowAuthModal(false)}
            onSuccess={handleLoginSuccess}
          />
        )}
      </AnimatePresence>
      
      {/* Blog Editor Modal */}
      <AnimatePresence>
        {showEditorModal && (
          <BlogEditorModal
            post={editingPost}
            onClose={() => {
              setShowEditorModal(false);
              setEditingPost(null);
            }}
            onSave={handleSavePost}
          />
        )}
      </AnimatePresence>
      
      {/* Reading Mode */}
      <AnimatePresence>
        {selectedPost && (
          <ReadingMode 
            post={selectedPost} 
            onClose={() => setSelectedPost(null)}
            isAdmin={isAdmin}
            onEdit={() => handleEditPost(selectedPost)}
            onDelete={() => handleDeletePost(selectedPost.id)}
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 to-slate-900/90" />
          <Image
            src="/assets/images/blogg.jpg"
            fill
            sizes="100vw"
            alt="Blog Hero"
            className="object-cover opacity-20"
          />
        </motion.div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              HealthMaster Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Insights, updates, and expert perspectives on healthcare management and wellness.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-slate-800/90 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-slate-800 py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {isAdmin && (
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-slate-800 rounded-2xl overflow-hidden border-2 border-dashed border-emerald-500/40 cursor-pointer flex items-center justify-center min-h-[350px]"
                onClick={handleCreatePost}
              >
                <div className="text-center p-8">
                  <Plus className="w-16 h-16 text-emerald-500/40 mx-auto mb-4" />
                  <p className="text-emerald-500/60 font-medium text-lg">Add New Blog Post</p>
                </div>
              </motion.div>
            )}
            
            {currentPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-slate-800 rounded-2xl overflow-hidden transition-all duration-300 relative"
              >
                {isAdmin && (
                  <div className="absolute top-3 right-3 flex gap-2 z-10">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditPost(post);
                      }}
                      className="p-2 bg-slate-900/80 rounded-full hover:bg-emerald-500 transition-colors"
                    >
                      <Edit className="w-4 h-4 text-white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePost(post.id);
                      }}
                      className="p-2 bg-slate-900/80 rounded-full hover:bg-red-500 transition-colors"
                    >
                      <Trash className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                )}
                
                <div className="relative h-48">
                  <Image
                    src={post.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onClick={() => setSelectedPost(post)}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-emerald-400">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-slate-700 rounded-full text-emerald-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-3 py-1 text-sm bg-slate-700 rounded-full text-emerald-400">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedPost(post)}
                      className="flex items-center gap-1 text-emerald-500 hover:text-emerald-400"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full ${
                    currentPage === page
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                  }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;