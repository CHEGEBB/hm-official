'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  X, Save, Image, Bold, Italic, Heading1, Heading2, 
  ListOrdered, ListX, Trash2, Calendar, Clock, Upload
} from 'lucide-react';

const BlogEditor = ({ blog = null, onSave, onCancel, onDelete }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [readTime, setReadTime] = useState('5 min read');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Predefined images to choose from if upload isn't possible
  const predefinedImages = [
    '/assets/images/blog-1.jpg',
    '/assets/images/blog-2.jpg',
    '/assets/images/blog-3.jpg',
    '/assets/images/blog-4.jpg',
    '/assets/images/blog-hero.jpg',
  ];

  useEffect(() => {
    // If editing an existing blog, populate the form
    if (blog) {
      setTitle(blog.title || '');
      setAuthor(blog.author || '');
      setReadTime(blog.readTime || '5 min read');
      setContent(blog.content || '');
      setPreviewImage(blog.image || '');
    }
  }, [blog]);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const selectPredefinedImage = (imagePath) => {
    setPreviewImage(imagePath);
    setSelectedImage(null);
  };

  const insertFormatting = (formatType) => {
    const textarea = document.getElementById('blog-content');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    let formattedText = '';
    
    switch (formatType) {
      case 'bold':
        formattedText = `<strong>${selectedText}</strong>`;
        break;
      case 'italic':
        formattedText = `<em>${selectedText}</em>`;
        break;
      case 'h1':
        formattedText = `<h1>${selectedText}</h1>`;
        break;
      case 'h2':
        formattedText = `<h2>${selectedText}</h2>`;
        break;
      case 'ol':
        formattedText = `<ol>\n  <li>${selectedText}</li>\n</ol>`;
        break;
      case 'ul':
        formattedText = `<ul>\n  <li>${selectedText}</li>\n</ul>`;
        break;
      case 'p':
        formattedText = `<p>${selectedText}</p>`;
        break;
      default:
        formattedText = selectedText;
    }
    
    const newContent = content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);
    
    // Re-focus and set cursor position after the inserted formatting
    setTimeout(() => {
      textarea.focus();
      const newPosition = start + formattedText.length;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !author || !content || !previewImage) {
      setError('Please fill in all required fields and select an image.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const blogData = {
        id: blog?.id || Date.now(), // Use existing ID or generate new one
        title,
        author,
        date: blog?.date || new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        readTime,
        image: previewImage,
        content: content.trim().startsWith('<p') ? content : `<p>${content}</p>`,
      };
      
      await onSave(blogData, selectedImage);
    } catch (err) {
      setError(err.message || 'Failed to save blog post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-900/80"
    >
      <div className="relative w-full max-w-4xl p-6 bg-slate-800 rounded-2xl shadow-xl">
        <button
          onClick={onCancel}
          className="absolute p-1 text-gray-400 bg-slate-700 rounded-full top-4 right-4 hover:text-white hover:bg-slate-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="mb-6 text-2xl font-bold text-white font-rubik">
          {blog ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h2>
        
        {error && (
          <div className="p-3 mb-4 text-sm text-red-400 bg-red-400/10 rounded-lg">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300 font-raleway">
                Blog Title *
              </label>
              <input
                type="text"
                className="w-full py-3 px-4 text-white bg-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300 font-raleway">
                Author Name *
              </label>
              <input
                type="text"
                className="w-full py-3 px-4 text-white bg-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300 font-raleway">
                Read Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full py-3 pl-10 px-4 text-white bg-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. 5 min read"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300 font-raleway">
                Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full py-3 pl-10 px-4 text-white bg-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Auto-generated date"
                  value={blog?.date || "Will be auto-generated"}
                  disabled
                />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-300 font-raleway">
              Blog Image *
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="relative h-40 mb-2 bg-slate-700 rounded-lg overflow-hidden">
                  {previewImage ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={previewImage} 
                        alt="Blog preview" 
                        className="object-cover w-full h-full"
                      />
                      <button
                        type="button"
                        onClick={() => setPreviewImage('')}
                        className="absolute p-1 text-white bg-red-500 rounded-full top-2 right-2 hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <Image className="w-10 h-10 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-400">No image selected</p>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block w-full py-2 px-4 text-center text-white bg-emerald-500 rounded-lg cursor-pointer hover:bg-emerald-600">
                    <Upload className="inline-block w-4 h-4 mr-2" />
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              
              <div>
                <p className="mb-2 text-sm font-medium text-gray-300">Or select from library:</p>
                <div className="grid grid-cols-3 gap-2">
                  {predefinedImages.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => selectPredefinedImage(img)}
                      className={`relative h-16 bg-slate-700 rounded-md overflow-hidden border-2 ${
                        previewImage === img ? 'border-emerald-500' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Predefined image ${index + 1}`} 
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-300 font-raleway">
              Blog Content *
            </label>
            <div className="mb-2 flex items-center space-x-2 p-2 bg-slate-700 rounded-t-lg">
              <button 
                type="button" 
                onClick={() => insertFormatting('bold')}
                className="p-1.5 text-gray-300 hover:bg-slate-600 rounded-md"
                title="Bold"
              >
                <Bold className="w-5 h-5" />
              </button>
              <button 
                type="button" 
                onClick={() => insertFormatting('italic')}
                className="p-1.5 text-gray-300 hover:bg-slate-600 rounded-md"
                title="Italic"
              >
                <Italic className="w-5 h-5" />
              </button>
              <button 
                type="button" 
                onClick={() => insertFormatting('h1')}
                className="p-1.5 text-gray-300 hover:bg-slate-600 rounded-md"
                title="Heading 1"
              >
                <Heading1 className="w-5 h-5" />
              </button>
              <button 
                type="button" 
                onClick={() => insertFormatting('h2')}
                className="p-1.5 text-gray-300 hover:bg-slate-600 rounded-md"
                title="Heading 2"
              >
                <Heading2 className="w-5 h-5" />
              </button>
              <button 
                type="button" 
                onClick={() => insertFormatting('p')}
                className="p-1.5 text-gray-300 hover:bg-slate-600 rounded-md"
                title="Paragraph"
              >
                <span className="font-medium text-lg">P</span>
              </button>
              <button 
                type="button" 
                onClick={() => insertFormatting('ul')}
                className="p-1.5 text-gray-300 hover:bg-slate-600 rounded-md"
                title="Unordered List"
              >
                <ListX className="w-5 h-5" />
              </button>
              <button 
                type="button" 
                onClick={() => insertFormatting('ol')}
                className="p-1.5 text-gray-300 hover:bg-slate-600 rounded-md"
                title="Ordered List"
              >
                <ListOrdered className="w-5 h-5" />
              </button>
            </div>
            <textarea
              id="blog-content"
              rows="10"
              className="w-full py-3 px-4 text-white bg-slate-700 rounded-b-lg outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
              placeholder="Write your blog content here... You can use the formatting tools above or write HTML directly."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          
          <div className="flex items-center justify-between gap-4">
            {blog && (
              <button
                type="button"
                onClick={() => onDelete?.(blog.id)}
                className="py-3 px-6 font-medium text-white transition-all bg-red-500 rounded-lg hover:bg-red-600 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
              >
                <Trash2 className="w-5 h-5 mr-2" />
                Delete Blog
              </button>
            )}
            
            <div className="flex items-center gap-4 ml-auto">
              <button
                type="button"
                onClick={onCancel}
                className="py-3 px-6 font-medium text-white transition-all bg-slate-600 rounded-lg hover:bg-slate-500 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={isLoading}
                className="py-3 px-6 font-medium text-white transition-all bg-emerald-500 rounded-lg hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    <span>Save Blog</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default BlogEditor;