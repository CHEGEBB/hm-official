'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/navbar';
import "../sass/home.scss";

const ServicesPage = () => {
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
            src="/assets/images/sev.jpg"
            alt="Services Page Background"
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
              Our Services
            </h1>
            <p className="mb-8 text-lg sm:text-xl lg:text-2xl font-raleway text-white/90">
              Comprehensive healthcare solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800">
        <div className="container px-4 mx-auto sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
              What We Offer
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-raleway text-gray-300">
              Explore the diverse range of services we provide to enhance your health and wellness journey.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-slate-700 rounded-2xl"
              >
                <div className="mb-4">
                  <Image src={service.icon} alt={service.title} width={60} height={60} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-emerald-400 font-rubik">
                  {service.title}
                </h3>
                <p className="text-gray-300 font-raleway">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="container px-4 mx-auto sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl font-rubik text-emerald-500">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-raleway text-gray-300">
              Hear from our satisfied clients who have benefited from our services.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-slate-700 rounded-2xl"
              >
                <h3 className="mb-3 text-xl font-bold text-emerald-400 font-rubik">
                  {testimonial.name}
                </h3>
                <p className="text-gray-300 font-raleway">{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-emerald-600">
        <div className="container relative z-10 px-4 mx-auto sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-rubik">
              Ready to Transform Your Health?
            </h2>
            <p className="mb-8 text-lg text-emerald-100 font-raleway">
              Join us today and take the first step towards better health!
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

// Sample data for services and testimonials
const services = [
  { title:'Medication Adherence', description: 'Receive reminders and track your medication intake.', icon: '/assets/icons/medication.png' },
  { title: 'AI-Powered Drug Interaction Alerts', description: 'Stay informed about potential drug interactions with our AI alerts.', icon: '/assets/icons/appointment.png' },
  { title: 'Personal Health Management', description: 'Manage your health records, appointments, and medications seamlessly', icon: '/assets/icons/personal.png' },
  { title: 'Manage all your records in one place', description: 'Effortlessly store and access your health records securely.', icon: '/assets/icons/brain.png' },
  { title: 'Health tips to stay healthy', description: 'Discover personalized health tips and wellness strategies.', icon: '/assets/icons/chronic.png' },
  { title: 'Search any medication learn about it', description:'Explore our extensive database of medications and their uses', icon: '/assets/icons/tele.png' },
];

const testimonials = [
  { name: 'Sarah Johnson', comment: 'I used to forget my pills all the time. With Health Master, I feel in control and haven’t missed a dose in months!' },
  { name: 'David Smith', comment: 'Health Master has transformed how I manage my health. The reminders and tracking features are incredibly helpful.' },
  { name: 'Emily Davis', comment: 'Health Master has been a game-changer for me. I love the personalized health tips and the ease of managing my medications.' }
];

export default ServicesPage;