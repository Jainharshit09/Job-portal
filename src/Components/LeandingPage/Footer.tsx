import React from 'react';
import { IconWebhook, IconBrandInstagram, IconBrandFacebook, IconBrandX } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/signup" || location.pathname === "/login") return null;

  return (
    <div className="flex flex-col pt-10 text-xl justify-center bg-mine-shaft-900 font-[popins]">
      <div className="text-mine-shaft-300 py-10 items-center w-full">
        <div className="flex flex-wrap justify-between px-5 md:px-16 gap-10">
          {/* Left Section */}
          <div className="w-full md:w-[40%]">
            <div className="flex items-center gap-2 text-bright-sun-400 text-xl font-semibold hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">
              <IconWebhook size={24} />
              JobHook
            </div>
            <div className="mt-2 leading-6">
              Job portal with user profiles, skill updates, certifications, work experience, and admin job postings.
            </div>
            <div className="flex gap-3 mt-4">
              <IconBrandInstagram
                size={35}
                className="text-bright-sun-400 cursor-pointer bg-mine-shaft-800 p-1 rounded-full transform hover:translate-x-1 hover:text-bright-sun-400 hover:bg-mine-shaft-700"
              />
              <IconBrandFacebook
                size={35}
                className="text-bright-sun-400 cursor-pointer bg-mine-shaft-800 p-1 rounded-full transform hover:translate-x-1 hover:text-bright-sun-400 hover:bg-mine-shaft-700"
              />
              <IconBrandX
                size={35}
                className="text-bright-sun-400 cursor-pointer bg-mine-shaft-800 p-1 rounded-full transform hover:translate-x-1 hover:text-bright-sun-400 hover:bg-mine-shaft-700"
              />
            </div>
          </div>

          {/* Middle Sections */}
          <div className="w-full sm:w-auto">
            <div className="text-bright-sun-400 font-semibold mb-2">Product</div>
            <div className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">Find Job</div>
            <div className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">Find Company</div>
            <div className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">Find Employee</div>
          </div>

          <div className="w-full sm:w-auto">
            <div className="text-bright-sun-400 font-semibold mb-2">Company</div>
            <div className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">About Us</div>
            <div className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">Contact Us</div>
            <div className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">Privacy Policy</div>
            <div className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">Terms & Conditions</div>
          </div>

          <div className="w-full sm:w-auto">
            <div className="text-bright-sun-400 font-semibold mb-2">Support</div>
            <div className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">Help & Support</div>
            <div className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">Feedback</div>
            <div className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">FAQs</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-10 text-sm">
          Designed & Developed By <span className="text-bright-sun-400 hover:text-bright-sun-400 cursor-pointer transform hover:translate-x-1">Harshit Jain</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;