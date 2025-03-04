'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Calendar, Clock, User, ChevronRight, X, Bookmark, Share2, ThumbsUp, Edit, Trash, Plus, LogIn } from 'lucide-react'
import Navbar from "../components/navbar"
import Image from 'next/image'

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Healthcare Technology",
    excerpt: "Exploring emerging trends and innovations shaping the healthcare industry",
    content: `
      <h2>The Digital Revolution in Healthcare</h2>
      <p>The healthcare industry is undergoing a digital transformation, with technology paving the way for new possibilities in patient care, diagnosis, and treatment. As we look toward the future, we can expect that many traditional practices will evolve, benefiting both healthcare providers and patients alike. This comprehensive guide will walk you through some of the most significant trends and innovations in healthcare technology today.</p>

      <h2>Artificial Intelligence: Changing the Game</h2>
      <p>Artificial Intelligence (AI) is making a powerful impact on healthcare by assisting doctors with diagnostic precision, supporting personalized medicine, and optimizing treatment plans. Machine learning algorithms can now analyze vast datasets from medical imaging to detect diseases with accuracy comparable to human specialists, and AI-driven predictive analytics can identify at-risk patients, suggesting preventive care measures tailored to individual needs.</p>

      <h2>The Rise of Telemedicine and Remote Care</h2>
      <p>The pandemic accelerated the adoption of telemedicine, allowing patients to consult with doctors from the comfort of their homes. This shift has particularly benefited rural communities by improving access to healthcare services and reducing costs associated with travel and wait times. Telemedicine also enables ongoing management of chronic conditions through continuous remote monitoring, fostering better patient engagement and compliance.</p>

      <h2>Wearable Technology and the Internet of Things (IoT)</h2>
      <p>Wearable devices, such as smartwatches and fitness trackers, are increasingly used for real-time health monitoring. These devices allow users to track heart rates, monitor sleep quality, and even detect irregularities early. This kind of proactive monitoring is enabling individuals to stay ahead of potential health issues and receive timely, personalized health recommendations.</p>

      <h2>Looking to the Future</h2>
      <p>The future holds exciting possibilities, from personalized medicine based on genetic information to the integration of virtual reality in medical training and rehabilitation. We may also see the widespread use of blockchain technology for secure medical records, and robotic systems assisting in surgeries and patient care. As healthcare continues to embrace these advancements, patients will benefit from faster, more accurate, and highly personalized care.</p>
    `,
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
      <p>Finding balance in today's hectic world can be a challenge, but there are practical steps you can take to foster a healthy lifestyle. Achieving overall wellness is about consistency, focusing on simple, sustainable habits that help you feel your best every day.</p>

      <h2>1. Nourish Your Body with Mindful Nutrition</h2>
      <p>Eating well doesn't have to be complicated. Focus on whole, unprocessed foods, such as fresh fruits, vegetables, lean proteins, and whole grains. Stay hydrated by drinking plenty of water, and consider practicing mindful eating -- that means savoring each bite, eating slowly, and listening to your body's hunger and fullness cues.</p>

      <h2>2. Prioritize Quality Sleep</h2>
      <p>Good sleep is vital for mental and physical recovery. Aim for 7-9 hours of sleep each night, and maintain a regular sleep schedule. Create a calming pre-sleep routine, limit screen time before bed, and make your bedroom an inviting space for rest.</p>

      <h2>3. Stay Active with Regular Exercise</h2>
      <p>Exercise not only boosts your physical health but also enhances your mental well-being. Aim for at least 30 minutes of moderate exercise each day. This can include a mix of cardio, strength training, and flexibility exercises. Find activities that you enjoy, as you'll be more likely to stick with them over the long term.</p>

      <h2>4. Manage Stress Effectively</h2>
      <p>Managing stress is a cornerstone of a balanced lifestyle. Regularly practice techniques such as deep breathing exercises, mindfulness, or yoga. Engaging in hobbies, spending time outdoors, and maintaining strong social connections are also effective ways to alleviate stress.</p>

      <h2>5. Schedule Regular Health Check-ups</h2>
      <p>Preventive care is essential for long-term health. Schedule regular medical check-ups to monitor key health indicators and stay up-to-date with vaccinations. Early detection and intervention are critical, so don't overlook routine health visits.</p>
    `,
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
      <h2>What is Mental Wellness?</h2>
      <p>Mental wellness encompasses emotional, psychological, and social well-being. It affects how we think, feel, and act, impacting our relationships, decisions, and stress resilience. Maintaining mental wellness is as important as physical health, and prioritizing it can help us lead balanced, fulfilling lives.</p>

      <h2>Signs of Good Mental Health</h2>
      <p>Good mental health is often reflected in our ability to cope with daily stresses, maintain healthy relationships, and experience a sense of purpose. Positive mental health enables us to work productively, make meaningful connections, and adapt to changes.</p>

      <h2>Common Mental Health Challenges</h2>
      <p>Mental health challenges like anxiety, depression, and stress can disrupt daily life and well-being. Recognizing these challenges and knowing when to seek help is crucial. Early intervention can provide relief and help individuals develop coping strategies to manage symptoms effectively.</p>

      <h2>Strategies to Enhance Mental Wellness</h2>
      <p>Practices such as regular physical activity, mindfulness, and maintaining social support networks can improve mental well-being. Setting healthy boundaries and prioritizing self-care are equally important. Don't hesitate to seek professional support if needed -- therapy and counseling can be invaluable tools for mental health.</p>

      <h2>Building Resilience for a Fulfilling Life</h2>
      <p>Resilience is the ability to recover from setbacks and challenges. Developing a resilient mindset involves cultivating positive thinking, honing problem-solving skills, and nurturing strong support systems. Embracing a growth-oriented mindset can empower us to navigate life's ups and downs with confidence and grace.</p>
    `,
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
      <h2>Groundbreaking Discoveries in Medicine</h2>
      <p>The field of medical research is constantly evolving, and recent breakthroughs are redefining how we understand and treat diseases. From gene editing to revolutionary cancer therapies, these advancements are opening up new possibilities for patient care.</p>

      <h2>Gene Editing: A New Frontier</h2>
      <p>Gene editing tools like CRISPR are transforming medicine by enabling precise genetic modifications. This technology holds promise for treating genetic disorders and even developing personalized cancer therapies with minimal side effects.</p>

      <h2>Innovative Cancer Treatments</h2>
      <p>Oncology is seeing rapid advancements with immunotherapy and targeted treatments. These therapies work by enhancing the body's natural defenses against cancer cells, making treatment less invasive and more effective.</p>

      <h2>Neurological Research and Brain Health</h2>
      <p>Research into brain health is yielding exciting results, from new Alzheimer's treatments to brain-computer interfaces that restore mobility. These discoveries are paving the way for a deeper understanding of the brain and potential treatments for neurological conditions.</p>

      <h2>The Future of Medicine</h2>
      <p>The ongoing innovation in medical research suggests a future where personalized medicine, early disease detection, and accessible advanced treatments become the norm, ultimately transforming healthcare on a global scale.</p>
    `,
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
      <p>In today's healthcare landscape, patient experience is not only a reflection of the care quality but also a critical component of patient satisfaction and retention. With healthcare increasingly focusing on individualized care and holistic treatment, enhancing patient experience has become a core objective for healthcare providers. This guide delves into practical strategies for creating a patient-centric environment that fosters trust, satisfaction, and improved health outcomes.</p>

      <h2>Communication Excellence</h2>
      <p>Communication is the cornerstone of patient satisfaction and involves more than merely conveying medical information. Effective patient communication requires:</p>
      <ul>
        <li><strong>Clear Medical Information Delivery:</strong> Ensuring patients fully understand their diagnoses, treatments, and follow-up care reduces anxiety and helps patients feel more in control.</li>
        <li><strong>Active Listening Techniques:</strong> Actively listening to patients' concerns, validating their experiences, and responding thoughtfully can build rapport and trust.</li>
        <li><strong>Cultural Competency:</strong> Recognizing and respecting cultural differences allows healthcare providers to cater to diverse populations effectively, reducing barriers to care.</li>
        <li><strong>Empathy in Interactions:</strong> Empathy allows providers to connect with patients on a personal level, contributing to a more positive overall experience.</li>
      </ul>

      <h2>Technology Integration</h2>
      <p>Technology has revolutionized patient care, enabling more efficient and accessible healthcare services. Strategic tech integration includes:</p>
      <ul>
        <li><strong>Patient Portals and Apps:</strong> These platforms allow patients to easily access their health information, schedule appointments, and communicate with their providers.</li>
        <li><strong>Telemedicine Services:</strong> Virtual consultations make healthcare accessible to those in remote areas or with mobility limitations, ensuring timely care.</li>
        <li><strong>Electronic Health Records (EHR):</strong> EHRs provide a comprehensive, real-time record of patient history, ensuring continuity of care across various providers.</li>
        <li><strong>Automated Appointment Reminders:</strong> Automated systems reduce missed appointments and empower patients to better manage their health.</li>
      </ul>

      <h2>Environment and Comfort</h2>
      <p>Creating a supportive and comfortable healthcare environment enhances the patient experience and reduces stress. Key elements include:</p>
      <ul>
        <li><strong>Comfortable Waiting Areas:</strong> Spacious, clean, and welcoming areas with comfortable seating can significantly ease patient anxiety.</li>
        <li><strong>Privacy Considerations:</strong> Ensuring patients feel secure and respected during consultations builds trust.</li>
        <li><strong>Noise Reduction Strategies:</strong> Reducing background noise helps create a calming atmosphere, important in high-stress settings like hospitals.</li>
        <li><strong>Natural Light Incorporation:</strong> Natural light has been shown to reduce stress and improve well-being, aiding in a more positive experience.</li>
      </ul>

      <h2>Staff Training and Development</h2>
      <p>Staff are a healthcare facility's most valuable asset, and investing in their development is crucial for patient satisfaction. Effective staff training includes:</p>
      <ul>
        <li><strong>Customer Service Training:</strong> Enhancing interpersonal skills equips staff to better meet patients' needs.</li>
        <li><strong>Cultural Sensitivity Education:</strong> By understanding diverse backgrounds, staff can provide care that respects all patients.</li>
        <li><strong>Communication Skills Development:</strong> Clear, compassionate communication fosters positive interactions and builds patient trust.</li>
        <li><strong>Stress Management Techniques:</strong> Equipping staff with stress management skills enhances their resilience, leading to improved care quality.</li>
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
      <p>Technology continues to shape modern healthcare, bridging gaps in patient care, increasing efficiency, and making healthcare more accessible and effective. From AI to IoT, each technology brings a unique advantage that helps hospitals, clinics, and patients navigate healthcare with enhanced precision and ease. This article explores the most impactful advancements that are reshaping patient care.</p>

      <h2>Artificial Intelligence Applications</h2>
      <p>AI has been a game-changer in healthcare, transforming patient care in multiple ways:</p>
      <ul>
        <li><strong>Automated Diagnosis Assistance:</strong> AI-powered diagnostic tools enable quicker, more accurate diagnoses, especially in radiology and pathology.</li>
        <li><strong>Treatment Planning Optimization:</strong> AI algorithms analyze vast amounts of data to identify the most effective treatment plans tailored to individual patients.</li>
        <li><strong>Patient Monitoring Systems:</strong> AI in monitoring systems helps detect early signs of complications, allowing for proactive intervention.</li>
        <li><strong>Predictive Analytics for Health Outcomes:</strong> AI models predict patient outcomes based on historical data, supporting more informed healthcare decisions.</li>
      </ul>

      <h2>Telemedicine Evolution</h2>
      <p>Telemedicine has moved beyond simple video calls to offer a complete virtual healthcare experience. This evolution includes:</p>
      <ul>
        <li><strong>Virtual Consultations:</strong> Patients can receive real-time advice, diagnoses, and prescriptions from the comfort of their home.</li>
        <li><strong>Remote Monitoring Devices:</strong> Devices that track vital signs remotely allow continuous care without frequent hospital visits.</li>
        <li><strong>Digital Health Platforms:</strong> These platforms connect patients and providers for ongoing communication and management of chronic conditions.</li>
        <li><strong>Mobile Health Applications:</strong> Apps track everything from medication adherence to symptom monitoring, improving patient engagement.</li>
      </ul>

      <h2>Data-Driven Healthcare</h2>
      <p>Data is at the heart of modern healthcare, enabling personalized treatment and informed decision-making. Data-driven approaches include:</p>
      <ul>
        <li><strong>Personalized Treatment Plans:</strong> Using patient-specific data, providers can tailor treatments for better outcomes and patient satisfaction.</li>
        <li><strong>Population Health Management:</strong> Big data helps identify health trends within populations, aiding in public health planning and resource allocation.</li>
        <li><strong>Resource Optimization:</strong> Data insights improve resource management, ensuring equipment and staff are where they're needed most.</li>
        <li><strong>Quality Improvement Initiatives:</strong> Analyzing data helps hospitals identify areas for improvement, enhancing patient care standards.</li>
      </ul>

      <h2>Future Developments</h2>
      <p>Emerging technologies are set to further transform patient care. Some exciting areas include:</p>
      <ul>
        <li><strong>5G Enabled Healthcare:</strong> Faster connectivity allows for instant data sharing, real-time monitoring, and seamless telemedicine experiences.</li>
        <li><strong>IoT Medical Devices:</strong> IoT connects various medical devices, creating an integrated care ecosystem that enhances monitoring and diagnostics.</li>
        <li><strong>Blockchain Health Records:</strong> Blockchain secures patient data, ensuring privacy while enabling seamless data sharing among authorized providers.</li>
        <li><strong>Augmented Reality in Medicine:</strong> AR enhances medical training, diagnostics, and even surgery by providing real-time information overlays.</li>
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

// Appwrite Service
const AppwriteService = {
  login: async (email: string, password: string) => {
    // This is a mock implementation. In a real app, this would connect to Appwrite.
    return new Promise((resolve, reject) => {
      // For demo purposes, accept any credentials with valid format
      if (email.includes('@') && password.length >= 6) {
        setTimeout(() => resolve({ userId: 'admin-123' }), 1000);
      } else {
        setTimeout(() => reject(new Error('Invalid credentials')), 1000);
      }
    });
  },
  
  getCurrentUser: async () => {
    // Mock implementation
    return new Promise((resolve, reject) => {
      const isLoggedIn = localStorage.getItem('isAdmin') === 'true';
      if (isLoggedIn) {
        setTimeout(() => resolve({ userId: 'admin-123' }), 500);
      } else {
        setTimeout(() => reject(new Error('Not logged in')), 500);
      }
    });
  },
  
  logout: async () => {
    localStorage.removeItem('isAdmin');
    return Promise.resolve();
  }
};

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
  post?: Post;
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
    '/assets/images/blogg.jpg'
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

// Main Blog Page Component
const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showEditorModal, setShowEditorModal] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>(blogPosts);
  const postsPerPage = 6;

  useEffect(() => {
    // Check if user is already logged in (using localStorage for demo)
    const checkAuth = async () => {
      try {
        await AppwriteService.getCurrentUser();
        setIsAdmin(true);
      } catch {
        setIsAdmin(false);
      }
    };
    
    checkAuth();
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

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
    if (selectedPost && selectedPost.id === id) {
      setSelectedPost(null);
    }
  };

  const handleSavePost = (data: any) => {
    if (editingPost) {
      // Update existing post
      setPosts(posts.map(post => 
        post.id === editingPost.id ? { ...data, id: post.id } : post
      ));
      
      // If this post is currently being viewed, update the view
      if (selectedPost && selectedPost.id === editingPost.id) {
        setSelectedPost({ ...data, id: editingPost.id });
      }
    } else {
      // Add new post with a new ID
      const newId = Math.max(...posts.map(post => post.id), 0) + 1;
      const newPost = { ...data, id: newId };
      setPosts([...posts, newPost]);
    }
    
    setShowEditorModal(false);
    setEditingPost(null);
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