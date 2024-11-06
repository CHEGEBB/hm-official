'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/navbar';

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
            src="/assets/images/design.png"
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
            <div className="relative w-64 h-128 bg-slate-800 rounded-lg shadow-lg overflow-hidden">
              <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                <source src="/assets/videos/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="/demo" 
                  className="px-4 py-2 text-lg font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600"
                >
                  View Full Demo
                </a>
              </div>
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
              href="/signup" 
              className="inline-block px-6 py-3 text-lg font-semibold text-white transition-all bg-emerald-500 rounded-lg hover:bg-emerald-600"
            >
              Sign Up Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Sample data for features and screenshots
const features = [
  { title: 'Personal Health Dashboard', description: 'Track your health metrics and get personalized insights.', icon: '/assets/icons/dashboard.svg' },
  { title: 'Medication Reminders', description: 'Never miss a dose with timely notifications.', icon: '/assets/icons/reminders.svg' },
  { title: 'Secure Messaging', description: 'Communicate with your healthcare providers securely.', icon: '/assets/icons/messaging.svg' },
  { title: 'Health Records', description: 'Access your medical history anytime, anywhere.', icon: '/assets/icons/records.svg' },
  { title: 'Telehealth Services', description: 'Consult with doctors through video calls.', icon: '/assets/icons/telehealth.svg' },
  { title: 'Community Support', description: 'Join forums and connect with others on similar health journeys.', icon: '/assets/icons/community.svg' },
];

const screenshots = [
  '/assets/images/screenshot1.jpg',
  '/assets/images/screenshot2.jpg',
  '/assets/images/screenshot3.jpg',
  '/assets/images/screenshot4.jpg',
];

export default AppPage;