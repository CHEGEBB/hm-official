'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/navbar';
import "../sass/home.scss";

const AppPage = () => {
  return (
    <div className="min-h-screen text-white bg-slate-900 font-outfit">
      <Navbar />
      
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
            src="/assets/images/graphic.png"
            alt="App Page Background"
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
              Discover HealthMaster
            </h1>
            <p className="mb-8 text-lg sm:text-xl lg:text-2xl font-raleway text-white/90">
              Your ultimate healthcare management companion.
            </p>
            <a href="#demo" className="inline-block px-6 py-3 text-lg font-semibold text-white transition-all bg-emerald-500 rounded-lg hover:bg-emerald-600">
              Watch Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container px-4 mx-auto sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
              Key Features
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-raleway text-gray-300">
              Explore the powerful features that make HealthMaster your go-to healthcare app.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-slate-700 rounded-2xl"
              >
                <div className="mb-4">
                  <Image src={feature.icon} alt={feature.title} width={40} height={40} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-emerald-400 font-rubik">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-raleway">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
              App Screenshots
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-raleway text-gray-300">
              Take a look at the interface and design of HealthMaster.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl"
              >
                <Image
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Demo Section */}
<section id="demo" className="relative py-20 overflow-hidden bg-emerald-600">
  <div className="container relative z-10 px-4 mx-auto sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-14"
    >
      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-rubik">
        Experience the App
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg text-emerald-100 font-raleway">
        Watch our demo to see how HealthMaster can transform your healthcare experience.
      </p>
    </motion.div>

    <div className="flex justify-center">
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Ox81MF4VU1U?autoplay=1&mute=1&start=94&playlist=Ox81MF4VU1U&loop=1"
          title="HealthMaster Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="py-20 bg-slate-800">
        <div className="container px-4 mx-auto sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-emerald-500 sm:text-4xl lg:text-5xl font-rubik">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-gray-300 font-raleway">
              Join the HealthMaster community and take control of your health today.
            </p>
            <a 
              href="#" 
              className="inline-block px-6 py-3 text-lg font-semibold text-white transition-all bg-emerald-500 rounded-2xl hover:bg-emerald-600"
            >
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-2 text-sm text-white transition-colors rounded-2xl font-poppins bg-emerald-500 hover:bg-emerald-600"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 283"><path fill="#ea4335" d="M119.553 134.916L1.06 259.061a32.14 32.14 0 0 0 47.062 19.071l133.327-75.934z"/><path fill="#fbbc04" d="M239.37 113.814L181.715 80.79l-64.898 56.95l65.162 64.28l57.216-32.67a31.345 31.345 0 0 0 0-55.537z"/><path fill="#4285f4" d="M1.06 23.487A30.6 30.6 0 0 0 0 31.61v219.327a32.3 32.3 0 0 0 1.06 8.124l122.555-120.966z"/><path fill="#34a853" d="m120.436 141.274l61.278-60.483L48.564 4.503A32.85 32.85 0 0 0 32.051 0C17.644-.028 4.978 9.534 1.06 23.399z"/></svg>

                Coming Soon To Google playstore
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Sample data for features and screenshots
const features = [
  { title: 'Personal Health Dashboard', description: 'Track your health metrics and get personalized insights.', icon: '/assets/icons/dash.png' },
  { title: 'Medication Reminders', description: 'Never miss a dose with timely notifications.', icon: '/assets/icons/rem.png' },
  { title: 'AI-Powered Drug Interaction Alerts', description: 'Prevent harmful combinations, our system analyzes medication history to flag risky interactions instantly.', icon: '/assets/icons/message.png' },
  { title: 'Health Stats', description: 'Access your health stats anytime, anywhere with smartwatch IOT intergration.', icon: '/assets/icons/records.png' },
  { title: 'Digital Medication History', description: 'A single place to view past and current prescriptions, helping both patients and pharmacies avoid repeat errors.', icon: '/assets/icons/teleh.png' },
  { title: 'Community Support', description: 'Join forums and connect with others on similar health journeys.', icon: '/assets/icons/community.png' },
];

const screenshots = [
  '/assets/screenshots/seen1.png',
  '/assets/screenshots/seen2.png',
  '/assets/screenshots/seen3.png',
  '/assets/screenshots/seen4.png',
  '/assets/screenshots/seen5.png',
  '/assets/screenshots/seen6.png',
];

export default AppPage;