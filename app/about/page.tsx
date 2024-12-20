'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {  User, Users, Heart, Clock, Clipboard, Linkedin } from 'lucide-react';
import Navbar from '../components/navbar';
import "../sass/home.scss"

const AboutPage = () => {

  return (
    <div className="min-h-screen text-white bg-slate-900 font-outfit">
      <div className="nav">
        <Navbar />
      </div>
      {/* Hero Section */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/50 to-slate-900/90" />
          <Image
            src="/assets/images/bg.jpg"
            alt="About Page Background"
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
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl font-rubik">
              Health Master
            </h1>
            <p className="mb-8 text-lg sm:text-xl lg:text-2xl font-raleway text-white/90">
              Empowering individuals to take control of their healthcare journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-800">
        <div className="container px-4 mx-auto sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
                Our Mission
              </h2>
              <p className="mb-6 text-lg font-raleway text-gray-300">
                At Health Master, our mission is to revolutionize the way individuals manage their healthcare. We believe that by empowering people with the right tools and information, we can help them make more informed decisions, improve their overall well-being, and achieve better health outcomes.
              </p>
              <p className="mb-6 text-lg font-raleway text-gray-300">
                Through our comprehensive platform, we aim to bridge the gap between patients and healthcare providers, fostering a more collaborative and transparent healthcare ecosystem. Our goal is to put the power of healthcare management in the hands of the people, enabling them to take control of their journey and achieve their best health.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
                Our Vision
              </h2>
              <p className="mb-6 text-lg font-raleway text-gray-300">
                Our vision for HealthMaster is to become the premier healthcare management platform that empowers individuals to take control of their health and wellness. We envision a future where everyone has access to the tools, resources, and support they need to make informed decisions, manage their conditions effectively, and ultimately, lead healthier and more fulfilling lives.
              </p>
              <p className="mb-6 text-lg font-raleway text-gray-300">
                By seamlessly integrating cutting-edge technology, data-driven insights, and personalized guidance, we aim to redefine the healthcare experience. Our platform will serve as a centralized hub, connecting patients, healthcare providers, and the broader healthcare ecosystem to foster a more collaborative and efficient system.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
              Our Core Values
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-raleway text-gray-300">
              HealthMaster is guided by a set of core values that shape our culture and drive our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-slate-800 rounded-2xl"
            >
              <div className="p-4 mb-4 rounded-lg bg-slate-700/50">
                <User className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-emerald-400 font-rubik">
                Patient-Centric
              </h3>
              <p className="text-gray-300 font-raleway">
                We prioritize the needs and well-being of our users, placing them at the heart of our decision-making.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-slate-800 rounded-2xl"
            >
              <div className="p-4 mb-4 rounded-lg bg-slate-700/50">
                <Users className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-emerald-400 font-rubik">
                Collaboration
              </h3>
              <p className="text-gray-300 font-raleway">
                We believe in fostering strong partnerships and open communication with healthcare providers and industry stakeholders.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-slate-800 rounded-2xl"
            >
              <div className="p-4 mb-4 rounded-lg bg-slate-700/50">
                <Heart className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-emerald-400 font-rubik">
                Empathy
              </h3>
              <p className="text-gray-300 font-raleway">
                We approach our work with genuine care and understanding, striving to create a supportive and empowering environment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-slate-800 rounded-2xl"
            >
              <div className="p-4 mb-4 rounded-lg bg-slate-700/50">
                <Clock className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-emerald-400 font-rubik">
                Timeliness
              </h3>
              <p className="text-gray-300 font-raleway">
                We are committed to providing timely and responsive support, ensuring our users can seamlessly manage their healthcare needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 bg-slate-800 rounded-2xl"
            >
              <div className="p-4 mb-4 rounded-lg bg-slate-700/50">
                <Clipboard className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-emerald-400 font-rubik">
                Transparency
              </h3>
              <p className="text-gray-300 font-raleway">
                We believe in open and honest communication, empowering our users with clear and transparent information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
<section className="py-20 bg-slate-800">
  <div className="container px-4 mx-auto sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-14"
    >
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
        Our Team
      </h2>
      <p className="max-w-2xl mx-auto text-lg font-raleway text-gray-300">
        Meet the passionate individuals behind HealthMaster, dedicated to transforming the healthcare experience.
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Irenee Dushime Uwineza */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-6 bg-slate-700 rounded-2xl"
      >
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src="/assets/images/irenee.jpg"
            alt="Irenee Dushime Uwineza"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="mb-2 text-xl font-bold text-emerald-400 font-rubik">Irenee Dushime Uwineza</h3>
        <p className="mb-4 text-gray-300 font-raleway">Founder & CEO</p>
        <p className="text-gray-400 font-raleway">
          A resilient medical student from Rwanda, Irenee is passionate about driving HealthMaster as a healthcare startup, showing unwavering commitment to improve healthcare through technology and innovation.
        </p>
        <motion.a
          href="http://www.linkedin.com/in/irenee-dushime-uwineza-"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300"
          whileHover={{ scale: 1.1 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Linkedin className="w-5 h-5 mr-2" />
          Connect with Irenee 👋
        </motion.a>
      </motion.div>

      {/* Brian Chege Mwangi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 bg-slate-700 rounded-2xl"
      >
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src="/assets/images/brian.jpg"
            alt="Brian Chege Mwangi"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="mb-2 text-xl font-bold text-emerald-400 font-rubik">Brian Chege Mwangi</h3>
        <p className="mb-4 text-gray-300 font-raleway">Co-Founder & CTO</p>
        <p className="text-gray-400 font-raleway">
           Brian, a computer scientist from Kenya specializes in full-stack web and app development and software engineering. His strong coding skills, creativity, and problem-solving mindset drive HealthMaster technical innovations. 
           <span className="block mt-4">
           <a href="https://github.com/CHEGEBB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-blue-600 font-bold"
          >Follow Github</a>
            </span> 
        </p>
      </motion.div>

      {/* Bonheur Dishimimana */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-6 bg-slate-700 rounded-2xl"
      >
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src="/assets/images/bonheur.jpg"
            alt="Bonheur Dishimimana"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="mb-2 text-xl font-bold text-emerald-400 font-rubik">Bonheur Dishimimana</h3>
        <p className="mb-4 text-gray-300 font-raleway">COO & Co-Founder</p>
        <p className="text-gray-400 font-raleway">
          Bonheur, a passionate medical student from Rwanda, co-founded HealthMaster with a deep commitment to improving healthcare access and delivery. Known for his go-getter attitude, Bonheur excels in connecting with people, fostering a positive environment, and working effectively with others.
        </p>
        <motion.a
          href="https://rw.linkedin.com/in/bonheur-dushimimana-6893b9224"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300"
          whileHover={{ scale: 1.1 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Linkedin className="w-5 h-5 mr-2" />
          Connect with Bonheur 👋
        </motion.a>
      </motion.div>

      {/* Francis Muhirwa */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-6 bg-slate-700 rounded-2xl"
      >
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src="/assets/images/francis.jpg"
            alt="Francis Muhirwa"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="mb-2 text-xl font-bold text-emerald-400 font-rubik">Francis Muhirwa</h3>
        <p className="mb-4 text-gray-300 font-raleway">UI/UX Designer</p>
        <p className="text-gray-400 font-raleway">
          A talented designer from Rwanda, Francis is efficient, flexible, and consistently delivers top-quality work on time. His keen eye for detail and ability to adapt to any design challenge make him an invaluable member of the HealthMaster team, ensuring that the user experience is both intuitive and engaging.
        </p>
        <motion.a
          href="https://www.linkedin.com/in/francis-muhirwa-674786253/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300"
          whileHover={{ scale: 1.1 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Linkedin className="w-5 h-5 mr-2" />
          Connect with Francis 👋
        </motion.a>
      </motion.div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden bg-emerald-600">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-pattern opacity-10" />
        </motion.div>

        <div className="container relative z-10 px-4 mx-auto sm:px-6">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-rubik"
            >
              Join the HealthMaster Community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8 text-lg text-emerald-100 font-raleway"
            >
              Be a part of our mission to transform healthcare management.
            </motion.p>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=14jAsVH3qv2KogL1UigwB6ft14bpt4Q4o"
              whileHover={{ scale: 1.1 }}
              className="inline-block px-6 py-3 text-lg font-semibold text-white transition-all bg-emerald-500 rounded-lg hover:bg-emerald-600"
            >
              Download Now
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;