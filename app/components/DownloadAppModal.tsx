import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const DownloadAppModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 bg-emerald-400 text-white px-4 py-2 rounded-md shadow-lg hover:bg-emerald-300 z-50"
        onClick={handleToggle}
      >
        Download App
      </button>

      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-slate-800 text-white p-8 rounded-lg shadow-xl w-full max-w-md"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
          >
            <div className="flex justify-end">
              <button onClick={handleToggle}>
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 font-rubik">Download the HealthMaster App</h2>
            <p className="text-gray-400 mb-6 font-raleway">
              Get the app and manage your healthcare on the go.
            </p>
            <div className="flex justify-center space-x-4">
              
                href="#"
                className="bg-emerald-400 text-white px-4 py-2 rounded-md hover:bg-emerald-300 font-raleway"
              >
                App Store
              </a>
              
                href="#"
                className="bg-emerald-400 text-white px-4 py-2 rounded-md hover:bg-emerald-300 font-raleway"
              >
                Google Play
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default DownloadAppModal;