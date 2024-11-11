'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, User, ChevronRight, X, Bookmark, Share2, ThumbsUp } from 'lucide-react';
const blogPosts = [
  {
    id: 1,
    title: "The Future of Healthcare Technology",
    excerpt: "Exploring emerging trends and innovations shaping the healthcare industry",
    content: `
      <h2>The Digital Revolution in Healthcare</h2>
      <p>As we stand on the cusp of a new era in healthcare, technological innovations are fundamentally transforming how we approach patient care, diagnosis, and treatment. This comprehensive overview explores the most significant developments shaping the future of healthcare.</p>

      <h2>Artificial Intelligence in Healthcare</h2>
      <p>AI is revolutionizing healthcare in numerous ways:</p>
      <ul>
        <li>Diagnostic Accuracy: Machine learning algorithms can now detect diseases from medical imaging with accuracy rivaling human experts</li>
        <li>Predictive Analytics: AI systems predict patient risks and recommend preventive measures</li>
        <li>Drug Discovery: Accelerating the development of new medications through complex data analysis</li>
      </ul>

      <h2>Telemedicine and Remote Care</h2>
      <p>The pandemic has accelerated the adoption of telemedicine, bringing healthcare directly to patients' homes. Benefits include:</p>
      <ul>
        <li>Improved access to healthcare for rural communities</li>
        <li>Reduced waiting times and healthcare costs</li>
        <li>Better management of chronic conditions through continuous monitoring</li>
      </ul>

      <h2>Wearable Technology and IoT</h2>
      <p>Smart devices are becoming integral to preventive healthcare:</p>
      <ul>
        <li>Real-time health monitoring</li>
        <li>Early detection of health issues</li>
        <li>Personalized health recommendations</li>
      </ul>

      <h2>The Future Landscape</h2>
      <p>Looking ahead, we can expect to see:</p>
      <ul>
        <li>Personalized medicine based on genetic profiles</li>
        <li>Virtual reality in medical training and therapy</li>
        <li>Blockchain for secure medical records</li>
        <li>Robotics in surgery and patient care</li>
      </ul>`,
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
    content: `
      <h2>Building a Foundation for Wellness</h2>
      <p>In today's fast-paced world, maintaining a balanced lifestyle can seem challenging. However, these five evidence-based strategies can help you achieve optimal health and well-being.</p>

      <h2>1. Mindful Nutrition</h2>
      <p>The foundation of good health starts with what we eat:</p>
      <ul>
        <li>Focus on whole, unprocessed foods</li>
        <li>Include a rainbow of fruits and vegetables</li>
        <li>Stay hydrated with 8-10 glasses of water daily</li>
        <li>Practice mindful eating - slow down and enjoy your meals</li>
      </ul>

      <h2>2. Quality Sleep</h2>
      <p>Sleep is crucial for physical and mental recovery:</p>
      <ul>
        <li>Aim for 7-9 hours of quality sleep</li>
        <li>Maintain a consistent sleep schedule</li>
        <li>Create a relaxing bedtime routine</li>
        <li>Limit screen time before bed</li>
      </ul>

      <h2>3. Regular Exercise</h2>
      <p>Physical activity is essential for overall health:</p>
      <ul>
        <li>30 minutes of moderate exercise daily</li>
        <li>Mix cardio with strength training</li>
        <li>Include flexibility exercises</li>
        <li>Find activities you enjoy</li>
      </ul>

      <h2>4. Stress Management</h2>
      <p>Effective stress management techniques:</p>
      <ul>
        <li>Practice daily meditation or deep breathing</li>
        <li>Regular outdoor activities</li>
        <li>Maintain social connections</li>
        <li>Set boundaries between work and personal life</li>
      </ul>

      <h2>5. Regular Health Check-ups</h2>
      <p>Preventive care is key to long-term health:</p>
      <ul>
        <li>Schedule regular medical check-ups</li>
        <li>Keep vaccinations up to date</li>
        <li>Monitor vital health metrics</li>
        <li>Address health concerns early</li>
      </ul>`,
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
    content: `
      <h2>Understanding Mental Wellness</h2>
      <p>Mental wellness is a crucial component of overall health that affects how we think, feel, and act. It influences our daily decisions, relationships, and ability to handle stress.</p>

      <h2>Signs of Good Mental Health</h2>
      <ul>
        <li>Ability to cope with daily stress</li>
        <li>Maintaining healthy relationships</li>
        <li>Positive self-image</li>
        <li>Sense of purpose and meaning</li>
      </ul>

      <h2>Common Mental Health Challenges</h2>
      <p>Understanding common challenges helps in early recognition:</p>
      <ul>
        <li>Anxiety and depression symptoms</li>
        <li>Work-related stress</li>
        <li>Relationship difficulties</li>
        <li>Sleep problems</li>
      </ul>

      <h2>Strategies for Mental Wellness</h2>
      <p>Practical steps to maintain mental health:</p>
      <ul>
        <li>Regular exercise and physical activity</li>
        <li>Mindfulness and meditation practices</li>
        <li>Maintaining social connections</li>
        <li>Setting healthy boundaries</li>
        <li>Seeking professional help when needed</li>
      </ul>

      <h2>Building Resilience</h2>
      <p>Developing mental strength through:</p>
      <ul>
        <li>Positive thinking patterns</li>
        <li>Problem-solving skills</li>
        <li>Emotional regulation</li>
        <li>Support network development</li>
      </ul>`,
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
    content: `
      <h2>Revolutionary Discoveries in Medicine</h2>
      <p>Recent medical breakthroughs are transforming our understanding of diseases and treatment approaches. Here are the most significant developments.</p>

      <h2>Gene Editing Advances</h2>
      <p>CRISPR technology developments:</p>
      <ul>
        <li>More precise genetic modifications</li>
        <li>Treatment of genetic disorders</li>
        <li>Cancer therapy applications</li>
        <li>Reduced off-target effects</li>
      </ul>

      <h2>Cancer Treatment Innovations</h2>
      <p>New approaches in oncology:</p>
      <ul>
        <li>Immunotherapy breakthroughs</li>
        <li>Targeted therapy advances</li>
        <li>Early detection methods</li>
        <li>Personalized treatment protocols</li>
      </ul>

      <h2>Neurological Discoveries</h2>
      <p>Understanding brain function:</p>
      <ul>
        <li>New insights into consciousness</li>
        <li>Alzheimer's treatment progress</li>
        <li>Brain-computer interfaces</li>
        <li>Neural regeneration techniques</li>
      </ul>

      <h2>Future Implications</h2>
      <p>Impact on healthcare:</p>
      <ul>
        <li>Personalized medicine advancement</li>
        <li>Improved treatment outcomes</li>
        <li>Cost reduction in healthcare</li>
        <li>Accessible advanced treatments</li>
      </ul>`,
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
    content: `
      <h2>The Evolution of Patient Care</h2>
      <p>Modern healthcare is increasingly focused on patient experience as a key quality metric. This comprehensive guide explores effective strategies for enhancing patient care.</p>

      <h2>Communication Excellence</h2>
      <p>Key aspects of patient communication:</p>
      <ul>
        <li>Clear medical information delivery</li>
        <li>Active listening techniques</li>
        <li>Cultural competency</li>
        <li>Empathy in patient interactions</li>
      </ul>

      <h2>Technology Integration</h2>
      <p>Leveraging technology for better care:</p>
      <ul>
        <li>Patient portals and apps</li>
        <li>Telemedicine services</li>
        <li>Electronic health records</li>
        <li>Automated appointment reminders</li>
      </ul>

      <h2>Environment and Comfort</h2>
      <p>Creating healing spaces:</p>
      <ul>
        <li>Comfortable waiting areas</li>
        <li>Privacy considerations</li>
        <li>Noise reduction strategies</li>
        <li>Natural light incorporation</li>
      </ul>

      <h2>Staff Training and Development</h2>
      <p>Investing in healthcare providers:</p>
      <ul>
        <li>Customer service training</li>
        <li>Cultural sensitivity education</li>
        <li>Communication skills development</li>
        <li>Stress management techniques</li>
      </ul>`,
    author: "Dr. John Doe",
    date: "2024-02-15",
    readTime: "5 min read",
    category: "Patient Care",
    tags: ["Patient Satisfaction", "Quality of Care", "Patient Education"],
    imageUrl: "/assets/images/patient.jpeg"
  },
  {
    id: 6,
    title: "Revolutionizing Patient Care Through Technology",
    excerpt: "A deep dive into the transformative tech advances enhancing patient experience and healthcare accessibility",
    content: `
      <h2>Digital Transformation in Healthcare</h2>
      <p>Technology is reshaping how healthcare is delivered and experienced. This comprehensive overview explores the latest technological innovations revolutionizing patient care.</p>

      <h2>Artificial Intelligence Applications</h2>
      <p>AI is transforming patient care through:</p>
      <ul>
        <li>Automated diagnosis assistance</li>
        <li>Treatment planning optimization</li>
        <li>Patient monitoring systems</li>
        <li>Predictive analytics for health outcomes</li>
      </ul>

      <h2>Telemedicine Evolution</h2>
      <p>Advanced remote care solutions:</p>
      <ul>
        <li>Virtual consultations</li>
        <li>Remote monitoring devices</li>
        <li>Digital health platforms</li>
        <li>Mobile health applications</li>
      </ul>

      <h2>Data-Driven Healthcare</h2>
      <p>Leveraging big data for better care:</p>
      <ul>
        <li>Personalized treatment plans</li>
        <li>Population health management</li>
        <li>Resource optimization</li>
        <li>Quality improvement initiatives</li>
      </ul>

      <h2>Future Developments</h2>
      <p>Emerging technologies:</p>
      <ul>
        <li>5G enabled healthcare</li>
        <li>IoT medical devices</li>
        <li>Blockchain health records</li>
        <li>Augmented reality in medicine</li>
      </ul>`,
    author: "Dr. Alex Martinez",
    date: "2024-04-10",
    readTime: "6 min read",
    category: "HealthTech",
    tags: ["Patient Care", "Telemedicine", "Machine Learning", "Healthcare Tech"],
    imageUrl: "/assets/images/fut.jpeg"
  }
];

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

const ReadingMode = ({ post, onClose }: { post: Post; onClose: () => void }) => {
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
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-full hover:bg-slate-900"
            >
              <X className="w-6 h-6 text-white" />
            </button>
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
                className="p-2 rounded-full bg-slate-700 text-gray-300 hover:bg-slate-600"
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

            <h1 className="text-3xl font-bold text-white mb-4 font-rubik">
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
  const [selectedPost, setSelectedPost] = useState(null);
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

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
      <AnimatePresence>
        {selectedPost && (
          <ReadingMode 
            post={selectedPost} 
            onClose={() => setSelectedPost(null)} 
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
          <img
            src="/assets/images/blogg.jpg"
            alt="Blog Hero"
            className="object-cover w-full h-full opacity-20"
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
            {currentPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-slate-800 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
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