import React from "react";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-15 text-gray-700 container mx-auto">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
        <div className="mx-auto">
          <img
            src={logo}
            alt="Job Track Logo"
            className="w-40 h-30 rounded-2xl"
          />
          <div className="flex space-x-5 mt-5">
            <FaFacebookF size={20} />
            <FaLinkedinIn size={20} />
            <FaTwitter size={20} />
            <FaGithub size={20} />
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-green-700 mb-2">For Clients</h4>
          <ul className="space-y-1 text-sm">
            <li>Talent Marketplace</li>
            <li>Payroll Services</li>
            <li>Direct Contracts</li>
            <li>Hire Worldwide</li>
            <li>Hire in the USA</li>
            <li>How to Hire</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-green-700 mb-2">Our Resources</h4>
          <ul className="space-y-1 text-sm">
            <li>Free Business tools</li>
            <li>Affiliate Program</li>
            <li>Success Stories</li>
            <li>Upwork Reviews</li>
            <li>Resources</li>
            <li>Help & Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-green-700 mb-2">The Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Leadership</li>
            <li>Contact Us</li>
            <li>Investor Relations</li>
            <li>Trust, Safety & Security</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-10 font-bold text-primary">
        © 2025 Job Tracks. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
