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
              href="https://drive.google.com/uc?export=download&id=14jAsVH3qv2KogL1UigwB6ft14bpt4Q4o" 
              className="inline-block px-6 py-3 text-lg font-semibold text-white transition-all bg-emerald-500 rounded-lg hover:bg-emerald-600"
            >
              Download Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Sample data for services and testimonials
const services = [
  { title: 'Personal Health Coaching', description: 'Get one-on-one coaching tailored to your health goals.', icon: '/assets/icons/personal.png' },
  { title: 'Nutritional Guidance', description: 'Receive personalized meal plans and nutrition advice.', icon: '/assets/icons/nutrition.png' },
  { title: 'Mental Health Support', description: 'Access mental health resources and counseling services.', icon: '/assets/icons/brain.png' },
  { title: 'Fitness Programs', description: 'Join our community fitness programs designed for all levels.', icon: '/assets/icons/fitness.png' },
  { title: 'Chronic Disease Management', description: 'Support and resources for managing chronic conditions.', icon: '/assets/icons/chronic.png' },
  { title: 'Telehealth Services', description: 'Consult with our healthcare professionals online.', icon: '/assets/icons/tele.png' },
];

const testimonials = [
  { name: 'Sarah Johnson', comment: 'HealthMaster has completely transformed my approach to wellness!' },
  { name: 'David Smith', comment: 'The personal coaching I received was invaluable for my health journey.' },
  { name: 'Emily Davis', comment: 'I love the supportive community and the resources available!' },
];

export default ServicesPage;