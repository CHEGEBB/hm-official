'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpCircle, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Star, User, Heart, ChevronRight, ChevronLeft, HeartPulse, Pill, HeartPulseIcon, HospitalIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./sass/home.scss";

const LandingPage = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our App', path: '/ourapp' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const PhoneMockup = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-[308px] h-[720px] mx-auto mt-12 "
      >
        <div className="absolute w-full h-full">
          {/* Phone frame using mockup.png */}
          <div className="absolute w-full h-full">
            {/* Phone frame image */}
            <Image
              src="/assets/images/mockup.png"
              alt="Phone mockup"
              width={606}
              height={1280}
              className="object-contain w-full h-full"
            />
            
            {/* Screen Content - positioned inside the mockup */}
            <div className="absolute top-[7%] left-[6.5%] right-[7%] bottom-[9%] overflow-hidden rounded-[20px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Ox81MF4VU1U?autoplay=1&mute=1&start=94&playlist=Ox81MF4VU1U&loop=1"
                title="HealthMaster Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="bg-black"
                ref={videoRef}
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const features = [
    {
      icon: <HeartPulseIcon className="w-12 h-12 text-emerald-500" />,
      title: "AI-Powered Interaction Checker",
      description: " Instantly detect drug-to-drug interaction, keeping yourself safe with every dose."
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
      icon: <Pill className="w-12 h-12 text-emerald-500" />,
      title: "Smart Medication Tracking",
      description: "Stay on top of your medication schedule with intelligent reminders."
    },
    {
      icon: <Star className="w-12 h-12 text-emerald-500" />,
      title: "Personalized Drug Information",
      description: " Access simple, reliable information about each medication you take, dosage, usage, and side effects."
    },
    {
      icon: <HospitalIcon className="w-12 h-12 text-emerald-500" />,
      title: "Tools for Pharmacies and Providers (Coming Soon)",
      description: " Interaction alerts, refill tracking, and analytics to serve customers better and build loyalty."
    }
  ];

  return (
    <div className="min-h-screen text-white bg-slate-900 font-outfit">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container flex items-center justify-between px-4 py-4 mx-auto sm:px-6">
          <Link href="/" className="flex items-center gap-4">
          <Image
            src="/assets/icons/1.png"
            width={150}
            height={150}
            alt="HealthMaster logo"
            className="rounded-full border border-slate-400 p-1
            w-10 h-10
             sm:w-10 sm:h-10 
             md:w-12 md:h-12 
             lg:w-16 lg:h-16
             hover:scale-110 transition-transform duration-300 ease-in-out"
          />
            <span className="text-lg font-bold sm:text-xl font-sora text-emerald-500">
              Health Master
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
            <a href="#">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-2 text-sm text-white transition-colors rounded-full font-poppins bg-emerald-500 hover:bg-emerald-600"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 283"><path fill="#ea4335" d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"/><path fill="#fbbc04" d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"/><path fill="#4285f4" d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"/><path fill="#34a853" d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"/></svg>

                Coming Soon
              </motion.button>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="/doctors-portal">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-2 text-sm text-white transition-colors rounded-full font-poppins bg-emerald-500 hover:bg-emerald-600"
              >
              <HeartPulse  className="w-4 h-4 mr-2"/>
                Doctors Portal
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
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 283"><path fill="#ea4335" d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"/><path fill="#fbbc04" d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"/><path fill="#4285f4" d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"/><path fill="#34a853" d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"/></svg>
                Coming Soon
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative flex items-center min-h-screen px-4 pt-32 pb-16 overflow-hidden sm:px-6">
        {/* Parallax background */}
        <motion.div
          animate={{ 
            y: [-20, 0, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 to-slate-900/90" />
          <Image
            src="/assets/images/healthbg3.jpg"
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
              <h1 className="mb-6 text-4xl font-bold sm:text-3xl lg:text-4xl font-rubik">
                Your Personal Health Companion
              </h1>
              <p className="mb-8 text-lg sm:text-xl lg:text-xl  text-white/90 leading-normal">
                Take control of your health journey with HealthMaster. Manage medications, 
                check drug interactions, Learn about your meds and store your medical records- all in one place.
              </p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 text-lg font-poppins text-white transition-colors rounded-full bg-emerald-500 hover:bg-emerald-600"
                href='#'
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 283"><path fill="#ea4335" d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"/><path fill="#fbbc04" d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"/><path fill="#4285f4" d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"/><path fill="#34a853" d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"/></svg>
              
                Coming Soon on Google Play
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
              Discover What&apos;s Inside
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-raleway text-gray-300">
              A comprehensive suite of tools designed to enhance your healthcare experience
            </p>
          </motion.div>

          <div className="relative">
            {/* Custom navigation buttons positioned outside cards */}
            <div className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 hidden md:block">
              <button className="swiper-button-prev-custom bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-2 shadow-lg">
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 hidden md:block">
              <button className="swiper-button-next-custom bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-2 shadow-lg">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
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
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-emerald-500">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "120+", label: "Beta Users" },
              { number: "25+", label: "Healthcare Providers" },
              { number: "100%", label: "Accuracy in detecting drug interactions" },
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

      {/* App Showcase Section */}
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
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center px-8 py-3 text-lg font-poppins text-emerald-600 transition-colors rounded-full bg-white hover:bg-emerald-100"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 283"><path fill="#ea4335" d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"/><path fill="#fbbc04" d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"/><path fill="#4285f4" d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"/><path fill="#34a853" d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"/></svg>

                Coming Soon on Google Play
              </motion.a>
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
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <motion.div
                      key={index}
                      className="relative flex-none w-52 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src={`/assets/screenshots/screen${index}.png`}
                        width={300}
                        height={600}
                        quality={100}
                        alt={`App Screenshot ${index}`}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <motion.div
                      key={`dup-${index}`}
                      className="relative flex-none w-52 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src={`/assets/screenshots/screen${index}.png`}
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
                  {[9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
                    <motion.div
                      key={index}
                      className="relative flex-none w-48 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src={`/assets/screenshots/screen${index}.png`}
                        width={300}
                        height={600}
                        quality={100}
                        alt={`App Screenshot ${index}`}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[9, 10, 11, 12, 13, 14, 15, 16].map((index) => (
                    <motion.div
                      key={`dup-${index}`}
                      className="relative flex-none w-48 aspect-[9/16] rounded-2xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src={`/assets/screenshots/screen${index}.png`}
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

          <div className="relative">
            {/* Custom navigation buttons positioned outside cards */}
            <div className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 hidden md:block">
              <button className="swiper-button-prev-testimonial bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-2 shadow-lg">
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 hidden md:block">
              <button className="swiper-button-next-testimonial bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-2 shadow-lg">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-testimonial',
                nextEl: '.swiper-button-next-testimonial',
              }}
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
                  name: "Bianca Grey",
                  role: "Beta Tester",
                  image: "/assets/images/12.jpeg",
                  content: "Health Master has made managing my medications so much easier. Adding my prescriptions and checking for interactions is a breeze. I feel more in control of my health than ever before."
                },
                {
                  name: "Sarah Williams",
                  role: "Early Access User",
                  image: "/assets/images/ab5.jpeg",
                  content: "Health Master has completely transformed how I manage my health. The AI interaction checker is a game changer for me."
                },
                {
                  name: "Michael Brown",
                  role: "Beta Program",
                  image: "/assets/images/54.jpg",
                  content: "I love how HealthMaster keeps all my medical records in one place. It's so convenient to have everything I need at my fingertips."
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
              Stay informed about Health Master&apos;s development and healthcare insights
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "HealthMaster Beta Launch",
                excerpt: "Introducing our innovative healthcare management platform",
                image: "/assets/images/graphic.png",
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
                image: "/assets/screenshots/screen15.png",
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
                  <p className="text-gray-300">info@healthmasterco.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-lg bg-emerald-500/20">
                  <Phone className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400">Call Us</h4>
                  <p className="text-gray-300">+250789399765</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-lg bg-emerald-500/20">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-400">Visit Us</h4>
                  <p className="text-gray-300">
                  Norrsken House Kigali, 1 KN 78 St, Kigali
                  </p>
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

      {/* Footer */}
      <footer className="py-12 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center mb-6">
                <Image 
                  src="/assets/icons/1.png" 
                  width={40} 
                  height={40}
                  alt="HealthMaster logo" 
                  className="w-8 h-8 mr-2 rounded-full" 
                />
                <span className="text-xl font-bold text-emerald-500">Health Master</span>
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

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 right-6 p-3 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUpCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

export default LandingPage;