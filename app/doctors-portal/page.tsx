'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Stethoscope, Mail, User, Hospital, ArrowRight, Shield } from 'lucide-react';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    doctorId: '',
    name: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (formData.doctorId === "DOC123" && 
        formData.name === "Smith" && 
        formData.email === "dr.smith@hospital.com") {
      setTimeout(() => {
        router.push('/doctors-portal/dashboard');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen relative bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/assets/videos/doc.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-emerald-900/50" />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-slate-400/10 rounded-full"
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-lg p-8 mx-4"
      >
        <div className="bg-slate-500/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-slate-700">
          {/* Header */}
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-center mb-8"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-4 rounded-full bg-emerald-500/20 mb-4"
            >
              <Stethoscope className="w-8 h-8 text-emerald-500" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2 font-rubik">Doctors Portal</h1>
            <p className="text-slate-400 font-raleway">Access your healthcare dashboard</p>
          </motion.div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative">
                <Hospital className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Doctor ID"
                  value={formData.doctorId}
                  onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 rounded-lg border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder:text-slate-400 transition-all"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 rounded-lg border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder:text-slate-400 transition-all"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 rounded-lg border border-slate-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder:text-slate-400 transition-all"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg bg-emerald-500 text-white font-semibold flex items-center justify-center space-x-2 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-emerald-600'
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <span>Access Portal</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center justify-center text-sm text-slate-400"
          >
            <Shield className="w-4 h-4 mr-2" />
            <span>Secure, encrypted login portal</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;