'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpCircle, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Download, Star, Calendar, Clock, User, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./sass/home.scss"

const LandingPage = () => {
  // const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const downloadUrl = "https://drive.google.com/uc?export=download&id=14jAsVH3qv2KogL1UigwB6ft14bpt4Q4o";
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    //these pages tell people baout healthmaster what we do and how we do it,features,
    { name: 'About', path: '/about' },
    {name :'Our App', path: '/ourapp'},
    {name :'Services', path: '/services'},
    {name :'Blog', path: '/blog'},
    {name :'Contact', path: '/contact'},
  ];

  const PhoneMockup = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-[300px] h-[600px] mx-auto mt-12"
      >
        <div className="absolute w-full h-full">
          {/* Phone frame */}
          <div className="absolute w-full h-full border-[14px] border-gray-800 rounded-[45px] overflow-hidden shadow-xl bg-black">
            {/* Screen Content */}
            <div className="relative w-full h-full overflow-hidden bg-black">
              {/* Dynamic notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[20px] z-20">
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-gray-800 rounded-full" />
                <div className="absolute top-[8px] left-[25px] w-[8px] h-[8px] bg-gray-700 rounded-full" />
                <div className="absolute top-[8px] right-[25px] w-[8px] h-[8px] bg-gray-700 rounded-full" />
              </div>
              
              {/* Video content */}
              <video
                className="object-cover w-full h-full"
                playsInline
                loop
                muted
                autoPlay
              >
                <source src="/assets/videos/app-demo.mp4" type="video/mp4" />
              </video>
            </div>
  
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 w-32 h-1 -translate-x-1/2 bg-gray-300 rounded-full" />
          </div>
  
          {/* Side buttons */}
          <div className="absolute -left-[2px] top-[120px] w-[4px] h-16 bg-gray-700 rounded-l-lg" /> {/* Volume up */}
          <div className="absolute -left-[2px] top-[170px] w-[4px] h-16 bg-gray-700 rounded-l-lg" /> {/* Volume down */}
          <div className="absolute -right-[2px] top-[140px] w-[4px] h-20 bg-gray-700 rounded-r-lg" /> {/* Power button */}
  
          {/* Silent switch */}
          <div className="absolute -left-[2px] top-[80px] w-[4px] h-6 bg-gray-700 rounded-l-lg" />
  
          {/* Top and bottom speaker grills */}
          <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-16 h-[4px] bg-gray-700 rounded-full" />
          <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-16 h-[4px] bg-gray-700 rounded-full" />
        </div>
      </motion.div>
    );
  };

  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-emerald-500" />,
      title: "Quick Scheduling",
      description: "Book and manage appointments with healthcare providers seamlessly."
    },
    {
      icon: <Heart className="w-12 h-12 text-emerald-500" />,
      title: "Health Insights",
      description: "Monitor vital signs, medications, and symptoms in real-time."
    },
    {
      icon: <User className="w-12 h-12 text-emerald-500" />,
      title: "Medical Records",
      description: "Access and share your medical history securely."
    },
    {
      icon: <Clock className="w-12 h-12 text-emerald-500" />,
      title: "Reminders",
      description: "Never miss your medications or appointments with smart alerts."
    },
    {
      icon: <Mail className="w-12 h-12 text-emerald-500" />,
      title: "Secure Messaging",
      description: "Communicate with your healthcare team efficiently."
    },
    {
      icon: <Star className="w-12 h-12 text-emerald-500" />,
      title: "Progress Tracking",
      description: "Visualize your health journey with detailed analytics."
    }
  ];

  return (
    <div className="min-h-screen text-white bg-slate-900 font-outfit">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container flex items-center justify-between px-4 py-4 mx-auto sm:px-6">
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/icons/logo.png" 
              width={80} 
              height={80}
              alt="HealthMaster logo" 
              className="w-8 h-8 mr-2 sm:w-10 sm:h-10" 
            />
            <span className="text-lg font-bold sm:text-xl font-sora text-emerald-500">
              HealthMaster
            </span>
          </Link>

          <div className="hidden space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`transition-colors hover:text-emerald-500 font-poppins ${
                  pathname === item.path ? 'text-emerald-500' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
      <a href={downloadUrl} download>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-2 text-sm text-white transition-colors rounded-full font-poppins bg-emerald-500 hover:bg-emerald-600"
        >
          <Download className="w-4 h-4 mr-2" />
          Download App
        </motion.button>
      </a>
    </div>

          <button 
            className="text-emerald-500 md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/90 backdrop-blur-md"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block w-full px-6 py-2 text-left hover:bg-emerald-500/20 font-poppins ${
                    pathname === item.path ? 'text-emerald-500' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-2 mt-2 text-left bg-emerald-500 hover:bg-emerald-600 font-poppins"
              >
                <Download className="inline w-4 h-4 mr-2" />
                Download App
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative flex items-center min-h-screen px-4 pt-32 pb-16 overflow-hidden sm:px-6">
        {/* Animated background */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 to-slate-900/90" />
          <Image
            src="/assets/images/1.jpg"
            alt="Medical background"
            fill
            className="object-cover opacity-30"
          />
        </motion.div>

        {/* Content */}
        <div className="container relative z-10 mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl font-rubik">
                Your Personal Health Companion
              </h1>
              <p className="mb-8 text-lg sm:text-xl lg:text-2xl font-raleway text-white/90">
                Take control of your health journey with HealthMaster. Manage medications, 
                track appointments, and connect with healthcare professionals - all in one place.
              </p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 text-lg font-poppins text-white transition-colors rounded-full bg-emerald-500 hover:bg-emerald-600"
                href={downloadUrl} download
              >
                <Download className="w-5 h-5 mr-2" />
                Download Beta Version
              </motion.a>
            </motion.div>

            <div className="relative">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container px-4 mx-auto sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
              Discover Whats Inside
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-raleway text-gray-300">
              A comprehensive suite of tools designed to enhance your healthcare experience
            </p>
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={70}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-12"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.title}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="p-6 h-full transition-transform bg-slate-700 rounded-2xl"
                >
                  <div className="p-4 mb-4 rounded-lg bg-slate-600/50 w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold font-rubik text-emerald-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-raleway">
                    {feature.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Statistics Section */}
<section className="py-16 bg-emerald-500">
  <div className="container px-4 mx-auto sm:px-6">
    <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
      {[
        { number: "2.5K+", label: "Beta Users" },
        { number: "100+", label: "Healthcare Providers" },
        { number: "5K+", label: "Appointments Booked" },
        { number: "95%", label: "Beta Satisfaction" }
      ].map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h4 className="mb-2 text-4xl font-bold text-white font-rubik">{stat.number}</h4>
          <p className="text-emerald-100 font-poppins">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="relative py-20 overflow-hidden bg-emerald-600">
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 0.1, scale: 1 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 z-0"
  >
    <div className="absolute inset-0 bg-pattern opacity-10" />
  </motion.div>

  <div className="container relative z-10 px-4 mx-auto sm:px-6">
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <div className="text-center lg:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-rubik"
        >
          Get Early Access
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 text-lg text-emerald-100 font-raleway"
        >
          Be among the first to experience the future of healthcare management
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-3 text-emerald-600 bg-emerald-300 rounded-full hover:bg-emerald-50 font-poppins"
        >
          <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 text-lg font-poppins text-white transition-colors rounded-full bg-emerald-500 hover:bg-emerald-600"
                href={downloadUrl} download
              >
                <Download className="w-5 h-5 mr-2" />
                Download Beta Version
              </motion.a>
        </motion.button>
      </div>

      <div className="overflow-hidden">
        <div className="flex flex-col gap-4">
          {/* First row - scrolling right */}
          <motion.div 
            className="flex gap-4 pb-4"
            animate={{
              x: [0, -1400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <motion.div
                key={index}
                className="relative flex-none w-52 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={`/assets/images/screen${index}.jpg`}
                  width={300}
                  height={600}
                  quality={100}
                  alt={`App Screenshot ${index}`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
            {/* Duplicate for seamless loop */}
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <motion.div
                key={`dup-${index}`}
                className="relative flex-none w-52 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg "
              >
                <Image
                  src={`/assets/images/screen${index}.jpg`}
                  width={300}
                  height={600}
                  quality={100}
                  alt={`App Screenshot ${index}`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Second row - scrolling left */}
          <motion.div 
            className="flex gap-4"
            animate={{
              x: [-1400, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[8, 9, 10, 11, 12, 13, 14].map((index) => (
              <motion.div
                key={index}
                className="relative flex-none w-48 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={`/assets/images/screen${index}.jpg`}
                  width={300}
                  height={600}
                  quality={100}
                  alt={`App Screenshot ${index}`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
            {/* Duplicate for seamless loop */}
            {[8, 9, 10, 11, 12, 13, 14].map((index) => (
              <motion.div
                key={`dup-${index}`}
                className="relative flex-none w-48 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={`/assets/images/screen${index}.jpg`}
                  width={300}
                  height={600}
                  quality={100}
                  alt={`App Screenshot ${index}`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="py-20 bg-slate-900">
  <div className="container px-4 mx-auto sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-14"
    >
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
        Early User Feedback
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-300 font-raleway">
        Here is what our beta testers are saying about HealthMaster
      </p>
    </motion.div>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="!pb-14"
    >
      {[
        {
          name: "Bianca grey",
          role: "Beta Tester",
          image: "/assets/images/12.jpeg",
          content: "As someone who just started using HealthMaster two weeks ago, I'm impressed by how intuitive the medication tracking is."
        },
        {
          name: "Sarah Williams",
          role: "Early Access User",
          image: "/assets/images/ab5.jpeg",
          content: "The appointment scheduling feature has already saved me so much time. Looking forward to seeing what's next!"
        },
        {
          name: "Michael Brown",
          role: "Beta Program",
          image: "/assets/images/54.jpg",
          content: "Just completed my first week with HealthMaster. The health metrics tracking is exactly what I've been looking for."
        }
      ].map((testimonial, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 h-full bg-slate-800 rounded-2xl"
          >
            <div className="flex items-center mb-4 space-x-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="font-bold text-emerald-400 font-sora">{testimonial.name}</h4>
                <p className="text-sm text-gray-400 font-poppins">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300 font-raleway">{testimonial.content}</p>
            <div className="flex mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-emerald-500 fill-current" />
              ))}
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

{/* Blog Section */}
<section className="py-20 bg-slate-800">
  <div className="container px-4 mx-auto sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-14"
    >
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
        Latest Updates
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-300 font-raleway">
        Stay informed about Health Masters development and healthcare insights
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "HealthMaster Beta Launch",
          excerpt: "Introducing our innovative healthcare management platform",
          image: "/assets/images/land1.png",
          date: "2 weeks ago"
        },
        {
          title: "Early User Success Stories",
          excerpt: "How our beta users are transforming their healthcare experience",
          image: "/assets/images/user.jpeg",
          date: "1 week ago"
        },
        {
          title: "What's Next for HealthMaster",
          excerpt: "Upcoming features and improvements based on user feedback",
          image: "/assets/images/im.jpeg",
          date: "3 days ago"
        }
      ].map((post, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="overflow-hidden bg-slate-700 rounded-2xl"
        >
          <div className="relative h-48">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <p className="mb-2 text-sm text-emerald-400 font-poppins">{post.date}</p>
            <h3 className="mb-2 text-xl font-bold text-white font-rubik">{post.title}</h3>
            <p className="mb-4 text-gray-300 font-raleway">{post.excerpt}</p>
            <Link
              href="/blog"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-poppins"
            >
              Read More
              <ArrowUpCircle className="w-4 h-4 ml-2 rotate-90" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="container px-4 mx-auto sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
              Get in Touch
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-lg bg-emerald-500/20">
                  <Mail className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400">Email Us</h4>
                  <p className="text-gray-300">support@healthmaster.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-lg bg-emerald-500/20">
                  <Phone className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400">Call Us</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-lg bg-emerald-500/20">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400">Visit Us</h4>
                  <p className="text-gray-300">123 Health Street, Medical District</p>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 text-white rounded-lg bg-emerald-500 hover:bg-emerald-600"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
      <footer className="py-12 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center mb-6">
                <Image 
                  src="/assets/icons/logo.png" 
                  width={40} 
                  height={40}
                  alt="HealthMaster logo" 
                  className="w-8 h-8 mr-2" 
                />
                <span className="text-xl font-bold text-emerald-500">HealthMaster</span>
              </Link>
              <p className="text-gray-400">
                Revolutionizing healthcare management through technology and innovation.
              </p>
            </div>
            <div>
              <h5 className="mb-4 text-lg font-semibold text-white">Quick Links</h5>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path}
                      className="text-gray-400 hover:text-emerald-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="mb-4 text-lg font-semibold text-white">Legal</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-emerald-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-emerald-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="text-gray-400 hover:text-emerald-500">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-gray-400 hover:text-emerald-500">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 text-lg font-semibold text-white">Connect</h5>
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="p-2 text-gray-400 transition-colors rounded-full hover:bg-emerald-500/20 hover:text-emerald-500"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link 
                  href="#"
                  className="p-2 text-gray-400 transition-colors rounded-full hover:bg-emerald-500/20 hover:text-emerald-500"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://www.instagram.com/healthmaster.app/"
                  className="p-2 text-gray-400 transition-colors rounded-full hover:bg-emerald-500/20 hover:text-emerald-500"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/healthmasterco/?viewAsMember=true"
                  className="p-2 text-gray-400 transition-colors rounded-full hover:bg-emerald-500/20 hover:text-emerald-500"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
              <div className="mt-6">
                <h6 className="mb-2 text-sm font-semibold text-white">Newsletter</h6>
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button className="px-4 py-2 text-white rounded-r-lg bg-emerald-500 hover:bg-emerald-600">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-slate-800">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} HealthMaster. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Image 
                  src="/assets/images/hipaa.png" 
                  alt="HIPAA Compliant" 
                  width={60} 
                  height={60} 
                  className="h-12 w-auto"
                />
                <Image 
                  src="/assets/images/sec.png" 
                  alt="Security Certified" 
                  width={60} 
                  height={60} 
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;