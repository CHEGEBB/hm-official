'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
// import DownloadAppModal from '../components/DownloadAppModal';
// import ReadModeModal from '../components/ReadModeModal';

const BlogPage = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [readModeActive, setReadModeActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highlightedText, setHighlightedText] = useState('');
  const [commentText, setCommentText] = useState('');
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [loves, setLoves] = useState(0);

  const blogArticles = [
    {
      id: 1,
      title: "Revolutionizing Healthcare Management: The HealthMaster Approach",
      author: "John Doe",
      date: "May 15, 2023",
      readTime: "7 min read",
      image: "/assets/images/blog-1.jpg",
      content: `
        <p>At HealthMaster, we're on a mission to transform the way individuals manage their healthcare. Our platform is designed to empower patients, foster collaboration with healthcare providers, and revolutionize the entire healthcare ecosystem.</p>
        
        <p>Gone are the days of fragmented medical records, confusing appointment schedules, and a lack of personalized guidance. HealthMaster is here to change the game, putting the power of healthcare management directly in the hands of the people who matter most – you, the patient.</p>
        
        <p>By seamlessly integrating cutting-edge technology, data-driven insights, and personalized support, we aim to redefine the healthcare experience. Our goal is to create a centralized hub where patients, providers, and the broader healthcare community can come together to foster a more collaborative and efficient system.</p>
        
        <p>Through features like our comprehensive health dashboard, secure data sharing, and tailored recommendations, HealthMaster empowers you to take an active role in your well-being. No longer will you feel lost in the complexities of the healthcare system – with HealthMaster, you'll have the tools and resources to make informed decisions, manage your conditions effectively, and ultimately, achieve your best health.</p>
      `
    },
    {
      id: 2,
      title: "The Importance of Preventive Healthcare: How HealthMaster Can Help",
      author: "Jane Smith",
      date: "April 30, 2023",
      readTime: "9 min read",
      image: "/assets/images/blog-2.jpg",
      content: `
        <p>In today's fast-paced world, it's all too easy to overlook the importance of preventive healthcare. We often find ourselves reactive, seeking medical attention only when we're already feeling unwell or experiencing a health crisis. But what if we could shift our mindset and approach healthcare proactively?</p>
        
        <p>This is where HealthMaster comes into play. Our platform is designed to empower individuals to take a more proactive approach to their health and wellness. By providing comprehensive tools and personalized guidance, HealthMaster helps you identify potential health risks, implement preventive measures, and maintain a strong foundation of well-being.</p>
        
        <p>Through features like our personalized health assessments, tailored wellness recommendations, and seamless integration with fitness trackers and medical records, HealthMaster gives you the insights and tools you need to stay ahead of potential health issues. No longer will you feel reactive – with HealthMaster, you'll have the power to take control of your health and put prevention at the forefront.</p>
        
        <p>But the benefits of preventive healthcare go beyond just individual well-being. When we prioritize prevention, we can reduce the strain on our healthcare system, decrease the incidence of chronic diseases, and ultimately, create a healthier and more sustainable society. By empowering individuals to take charge of their health, HealthMaster is not only transforming personal lives but also contributing to a broader societal shift towards a more proactive and holistic approach to healthcare.</p>
      `
    },
    {
      id: 3,
      title: "Bridging the Gap: How HealthMaster Fosters Collaborative Care",
      author: "Michael Johnson",
      date: "April 15, 2023",
      readTime: "8 min read",
      image: "/assets/images/blog-3.jpg",
      content: `
        <p>In the complex and often fragmented healthcare landscape, one of the biggest challenges patients face is the lack of communication and collaboration between various stakeholders. Whether it's coordinating with multiple providers, sharing medical records, or aligning on treatment plans, the process can be frustrating and overwhelming.</p>
        
        <p>HealthMaster is designed to bridge this gap and foster a more collaborative healthcare experience. By providing a centralized platform for patients, healthcare providers, and even loved ones to securely share information and work together, we're revolutionizing the way care is delivered and managed.</p>
        
        <p>Through features like our shared health profiles, integrated appointment scheduling, and seamless data exchange, HealthMaster empowers patients to take an active role in their care while enabling healthcare providers to deliver more personalized and coordinated support. This collaborative approach not only improves the patient experience but also leads to better health outcomes and more efficient use of healthcare resources.</p>
        
        <p>But the benefits of collaborative care extend beyond just the individual level. When healthcare providers and patients work together as a unified team, it can lead to increased trust, better adherence to treatment plans, and a more holistic understanding of the patient's needs. This, in turn, can contribute to a more sustainable and equitable healthcare system that prioritizes the well-being of all individuals.</p>
      `
    },
    {
      id: 4,
      title: "Empowering Patients: How HealthMaster is Transforming Personal Healthcare",
      author: "Sarah Lee",
      date: "March 31, 2023",
      readTime: "10 min read",
      image: "/assets/images/blog-4.jpg",
      content: `
        <p>In the traditional healthcare system, patients often feel like passive participants in their own care. But at HealthMaster, we believe that empowering individuals to take an active role in managing their health is the key to unlocking better outcomes and a more fulfilling healthcare experience.</p>
        
        <p>Our platform is designed to put the power of healthcare management directly in the hands of the patient. Through features like our personalized health dashboard, secure data storage, and tailored recommendations, HealthMaster gives you the tools and insights you need to become an informed and engaged partner in your own well-being.</p>
        
        <p>No longer will you feel lost in the complexities of the healthcare system or overwhelmed by the fragmentation of your medical information. With HealthMaster, you'll have a centralized hub where you can access your complete health history, track your progress, and collaborate with your healthcare providers to create a care plan that truly reflects your unique needs and preferences.</p>
        
        <p>But empowerment isn't just about information and data – it's about fostering a deeper understanding of your own health and cultivating a sense of agency. By providing personalized guidance, HealthMaster helps you navigate the healthcare landscape with confidence, making informed decisions and taking an active role in your well-being. This shift in mindset can have a profound impact, not only on your physical health but also on your overall quality of life and sense of control.</p>
      `
    }
  ];

  const handleArticleClick = (articleId) => {
    setExpandedArticle(articleId === expandedArticle ? null : articleId);
  };

  const handleReadModeToggle = () => {
    setReadModeActive(!readModeActive);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleHighlightText = (text) => {
    setHighlightedText(text);
  };

  const handleCommentSubmit = () => {
    // Add logic to submit the comment
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleLove = () => {
    setLoves(loves + 1);
  };

  return (
    <div className={`min-h-screen text-white font-outfit ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-b from-emerald-950 to-slate-900'}`}>
      <Navbar />
      <section className="relative flex items-center min-h-screen px-4 pt-32 pb-16 overflow-hidden sm:px-6">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 z-0"
        >
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-slate-900/90' : 'bg-gradient-to-b from-emerald-950/50 to-slate-900/90'}`} />
          <Image
            src="/assets/images/blog-hero.jpg"
            alt="HealthMaster Blog Hero Image"
            fill
            className="object-cover opacity-30"
          />
        </motion.div>
        
        <div className="container relative z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl font-rubik">The HealthMaster Blog</h1>
            <p className="mb-8 text-lg sm:text-xl lg:text-2xl font-raleway text-white/90">
              Explore the latest insights and ideas in healthcare management.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <motion.div
                key={article.id}
                className={`p-6 bg-slate-700 rounded-2xl ${
                  expandedArticle === article.id ? 'h-auto' : 'h-96 overflow-hidden'
                }`}
                onClick={() => handleArticleClick(article.id)}
                whileHover={{
                  scale: expandedArticle === article.id ? 1 : 1.05,
                  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-emerald-400 font-rubik">
                  {article.title}
                </h3>
                <div className="flex items-center mb-4 text-gray-400 font-raleway">
                  <User className="w-4 h-4 mr-2" />
                  {article.author}
                  <span className="mx-2">•</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime}
                </div>
                {expandedArticle === article.id && (
                  <div
                    className={`text-gray-300 font-raleway ${highlightedText ? 'pb-16' : ''}`}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                    onMouseUp={(e) => handleHighlightText(e.selectedText)}
                  />
                )}
                {highlightedText && (
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-slate-800/90">
                    <textarea
                      className="w-full px-4 py-2 bg-slate-700 rounded-md text-white outline-none"
                      placeholder="Add a comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <div className="flex justify-between mt-2">
                      <div className="flex space-x-4">
                        <button
                          className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300"
                          onClick={handleLike}
                        >
                          <span>Like</span>
                          <span>{likes}</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 text-red-400 hover:text-red-300"
                          onClick={handleDislike}
                        >
                          <span>Dislike</span>
                          <span>{dislikes}</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 text-pink-400 hover:text-pink-300"
                          onClick={handleLove}
                        >
                          <span>Love</span>
                          <span>{loves}</span>
                        </button>
                      </div>
                      <button
                        className="px-4 py-2 text-white bg-emerald-400 rounded-md hover:bg-emerald-300"
                        onClick={handleCommentSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      {/* <DownloadAppModal />
      <ReadModeModal
        isActive={readModeActive}
        onToggle={handleReadModeToggle}
        isDarkMode={isDarkMode}
        onDarkModeToggle={handleDarkModeToggle}
        highlightedText={highlightedText}
        onHighlightText={handleHighlightText}
      /> */}
    </div>
  );
};

export default BlogPage;