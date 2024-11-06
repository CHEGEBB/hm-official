'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar, Clock, User, Tag, ChevronRight } from 'lucide-react';
import Navbar from '../components/navbar';

// Types
interface BlogPost {
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

// Mock data - Replace with your actual data fetching logic
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Healthcare Technology",
    excerpt: "Exploring emerging trends and innovations shaping the healthcare industry",
    content: "Full content here...",
    author: "Dr. Jane Smith",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Technology",
    tags: ["Healthcare", "Innovation", "AI", "Digital Health"],
    imageUrl: "/assets/images/tech.jpeg"
  },
  {
    id: 2,
    title: "5 Health Tips for a Balanced Lifestyle",
    excerpt: "Simple yet effective ways to improve your overall health and well-being",
    content: "Full content here...",
    author: "Dr. John Doe",
    date: "2024-02-20",
    readTime: "3 min read",
    category: "Health Tips",
    tags: ["Self-Care", "Mental Health", "Nutrition"],
    imageUrl: "/assets/images/exercise.jpeg"
  },
  {
    id: 3,
    title: "The Importance of Mental Wellness",
    excerpt: "Understanding the significance of mental health and ways to prioritize it",
    content: "Full content here...",
    author: "Dr. Mary Johnson",
    date: "2024-01-25",
    readTime: "4 min read",
    category: "Wellness",
    tags: ["Mental Health", "Self-Care", "Stress Management"],
    imageUrl: "/assets/images/mental.jpeg"
  },
  {
    id: 4,
    title: "Latest Medical Research Breakthroughs",
    excerpt: "A roundup of recent advancements in medical research and treatments",
    content: "Full content here...",
    author: "Dr. Jane Smith",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Medical Research",
    tags: ["Research", "Clinical Trials", "Public Health"],
    imageUrl: "/assets/images/break.jpeg"
  },
  {
    id: 5,
    title: "Enhancing Patient Care Experience",
    excerpt: "Strategies to improve patient satisfaction and quality of care in healthcare",
    content: "Full content here...",
    author: "Dr. John Doe",
    date: "2024-02-15",
    readTime: "5 min read",
    category: "Patient Care",
    tags: ["Patient Satisfaction", "Quality of Care", "Patient Education"],
    imageUrl: "/assets/images/patient.jpeg"
  },
  {
    id: 7,
    title: "Revolutionizing Patient Care Through Technology",
    excerpt: "A deep dive into the transformative tech advances enhancing patient experience and healthcare accessibility.",
    content: "Complete article content here...",
    author: "Dr. Alex Martinez",
    date: "2024-04-10",
    readTime: "6 min read",
    category: "HealthTech",
    tags: ["Patient Care", "Telemedicine", "Machine Learning", "Healthcare Tech"],
    imageUrl: "/assets/images/fut.jpeg"
},

];

const categories = [
  "All",
  "Technology",
  "Health Tips",
  "Wellness",
  "Medical Research",
  "Patient Care"
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
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
      transition: {
        staggerChildren: 0.1
      }
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
    <div className="min-h-screen bg-slate-900 text-white font-outfit">
      <Navbar />

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
            alt="Blog Hero"
            fill
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-rubik mb-6">
              HealthMaster Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 font-raleway">
              Insights, updates, and expert perspectives on healthcare management and wellness.
            </p>

            {/* Search Bar */}
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
            {categories.map((category, index) => (
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
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
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
                  <h3 className="text-xl font-bold mb-3 text-emerald-400 font-rubik">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 font-raleway">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-slate-700 rounded-full text-emerald-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-emerald-500 hover:text-emerald-400"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </Link>
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

      {/* Newsletter Section */}
      <section className="bg-emerald-600 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-rubik">
              Stay Updated
            </h2>
            <p className="text-emerald-100 mb-8 font-raleway">
              Subscribe to our newsletter for the latest health insights and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;