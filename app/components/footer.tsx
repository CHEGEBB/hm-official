import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold font-rubik">About HealthMaster</h3>
            <p className="text-gray-400 font-raleway">
              HealthMaster is a platform designed to empower individuals and transform the healthcare experience.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold font-rubik">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 font-raleway">
              <li><a href="#" className="hover:text-emerald-400">Home</a></li>
              <li><a href="#" className="hover:text-emerald-400">Features</a></li>
              <li><a href="#" className="hover:text-emerald-400">Pricing</a></li>
              <li><a href="#" className="hover:text-emerald-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold font-rubik">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-emerald-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-emerald-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-emerald-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-emerald-400">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 font-raleway">
          &copy; 2023 HealthMaster. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;