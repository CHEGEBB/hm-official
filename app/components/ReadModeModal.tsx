import React from 'react';
import { motion } from 'framer-motion';
import { X, Moon, Sun } from 'lucide-react';

const ReadModeModal = ({
  isActive,
  onToggle,
  isDarkMode,
  onDarkModeToggle,
  highlightedText,
  onHighlightText,
}) => {
  return (
    <motion.div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        isActive ? 'block' : 'hidden'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`bg-white dark:bg-slate-800 text-black dark:text-white p-8 rounded-lg shadow-xl w-full max-w-4xl ${
          isDarkMode ? 'dark' : ''
        }`}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
      >
        <div className="flex justify-end mb-4">
          <button onClick={onToggle}>
            <X className="w-6 h-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
          </button>
        </div>
        <div className="flex justify-end mb-4">
          <button
            className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            onClick={onDarkModeToggle}
          >
            {isDarkMode ? (
              <>
                <Moon className="w-5 h-5" />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <Sun className="w-5 h-5" />
                <span>Light Mode</span>
              </>
            )}
          </button>
        </div>
        {highlightedText && (
          <div className="bg-emerald-400/20 p-4 rounded-md mb-4">
            <p>Highlighted text: {highlightedText}</p>
            <div className="flex justify-end mt-2">
              <button
                className="bg-emerald-400 text-white px-4 py-2 rounded-md hover:bg-emerald-300"
                onClick={() => onHighlightText('')}
              >
                Clear Highlight
              </button>
            </div>
          </div>
        )}
        <div className="prose dark:prose-invert max-w-none">
          {/* Content goes here */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReadModeModal;