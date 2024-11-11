import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import "../sass/navbar.scss";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between px-4 py-4 mx-auto sm:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/icons/logo.png"
            width={80}
            height={80}
            alt="HealthMaster logo"
            className="w-8 h-8 mr-2 sm:w-10 sm:h-10"
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
          <Link
            href="/doctors-portal"
            className="inline-flex items-center px-6 py-2 text-sm text-white transition-colors rounded-full font-poppins bg-emerald-500 hover:bg-emerald-600"
          >
            Doctors Portal
          </Link>
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
            <Link
              href="/doctors-portal"
              className="w-full px-6 py-2 mt-2 text-left bg-emerald-500 hover:bg-emerald-600 font-poppins"
            >
              Doctors Portal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;