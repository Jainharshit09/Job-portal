import React from 'react';
import { IconWebhook, IconBrandInstagram, IconBrandFacebook, IconBrandX } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/signup" || location.pathname === "/login") return null;

  return (
    <div className="flex flex-col pt-10 text-base sm:text-lg justify-center bg-mine-shaft-900 font-[popins] bg-mine-shaft-950">
      <div className="text-mine-shaft-300 py-10 items-center w-full">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between px-4 sm:px-8 md:px-16 gap-8 sm:gap-10">
          {/* Left Section */}
          <div className="w-full sm:w-[60%] md:w-[40%] mb-6 sm:mb-0">
            <div className="flex items-center gap-2 text-bright-sun-400 text-xl font-semibold cursor-pointer transform hover:translate-x-1">
              <IconWebhook size={24} />
              JobHook
            </div>
            <div className="mt-2 leading-6 text-sm sm:text-base">
              Job portal with user profiles, skill updates, certifications, work experience, and admin job postings.
            </div>
            <div className="flex gap-3 mt-4">
              <IconBrandInstagram
                size={30}
                className="text-bright-sun-400 cursor-pointer bg-mine-shaft-800 p-1 rounded-full transform hover:translate-x-1 hover:text-bright-sun-400 hover:bg-mine-shaft-700"
              />
              <IconBrandFacebook
                size={30}
                className="text-bright-sun-400 cursor-pointer bg-mine-shaft-800 p-1 rounded-full transform hover:translate-x-1 hover:text-bright-sun-400 hover:bg-mine-shaft-700"
              />
              <IconBrandX
                size={30}
                className="text-bright-sun-400 cursor-pointer bg-mine-shaft-800 p-1 rounded-full transform hover:translate-x-1 hover:text-bright-sun-400 hover:bg-mine-shaft-700"
              />
            </div>
          </div>

          {/* Middle Sections */}
          <div className="w-full sm:w-auto flex flex-col mb-4 sm:mb-0">
            <div className="text-bright-sun-400 font-semibold mb-2">Product</div>
            <div className="text-mine-shaft-300 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">Find Job</div>
            <div className="text-mine-shaft-300 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">Find Company</div>
            <div className="text-mine-shaft-300 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">Find Employee</div>
          </div>

          <div className="w-full sm:w-auto flex flex-col mb-4 sm:mb-0">
            <div className="text-bright-sun-400 font-semibold mb-2">Company</div>
            <div className="text-mine-shaft-300 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">About Us</div>
            <div className="text-mine-shaft-300 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">Contact Us</div>
            <div className="text-mine-shaft-300 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">Privacy Policy</div>
            <div className="text-mine-shaft-300 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">Terms & Conditions</div>
          </div>

          <div className="w-full sm:w-auto flex flex-col">
            <div className="text-bright-sun-400 font-semibold mb-2">Support</div>
            <div className="text-mine-shaft-300 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">Help & Support</div>
            <div className="text-mine-shaft-300 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">Feedback</div>
            <div className="text-mine-shaft-300 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">FAQs</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-10 text-xs sm:text-sm px-2">
          Designed & Developed By <span className="text-bright-sun-400 cursor-pointer transform hover:translate-x-1 hover:text-bright-sun-400">Harshit Jain</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;