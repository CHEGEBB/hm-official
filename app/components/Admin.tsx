'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X, User } from 'lucide-react';

interface AdminAuthProps {
  onLogin: (adminId: string, password: string) => Promise<void>;
  onClose: () => void;
  isOpen: boolean;
}

const AdminAuth: React.FC<AdminAuthProps> = ({ onLogin, onClose, isOpen }) => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // We'll implement this function later with Appwrite
      await onLogin(adminId, password);
    } catch (err) {
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-md p-6 bg-slate-800 rounded-2xl shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute p-1 text-gray-400 bg-slate-700 rounded-full top-4 right-4 hover:text-white hover:bg-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-emerald-500/20 rounded-full">
                  <Lock className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white font-rubik">Admin Login</h2>
              <p className="mt-1 text-gray-400 font-raleway">Access the blog management dashboard</p>
            </div>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 mb-4 text-sm text-red-400 bg-red-400/10 rounded-lg"
              >
                {error}
              </motion.div>
            )}
            
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-300 font-raleway">
                  Admin ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full py-3 pl-10 text-white bg-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your admin ID"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-300 font-raleway">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    className="w-full py-3 pl-10 text-white bg-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 font-medium text-white transition-all bg-emerald-500 rounded-lg hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="ml-2">Logging in...</span>
                  </div>
                ) : (
                  'Login'
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdminAuth;