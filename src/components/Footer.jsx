import React, { useState } from "react";
import Section from "./Section";
import { socials } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState(""); 

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    let emails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
    emails.push(email);
    localStorage.setItem("subscribedEmails", JSON.stringify(emails));

    setMessage("Subscribed successfully!");
    setEmail(""); 
  };

  return (
    <Section crosses className="!px-0 !py-14 bg-[#0d0c13] text-gray-300">
      <div className="container max-w-7xl mx-auto px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 mb-16">
          
          <div className="md:col-span-2 pr-16">
            <h1 className="text-white text-lg font-bold">Crypto Access</h1>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Your all-in-one platform for cryptocurrency trading, market insights, and investment tools.
              Secure, reliable, and easy to use.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="hover:text-green-500 transition">Features</Link>
              </li>
              <li>
                <Link to="/how-to-use" className="hover:text-green-500 transition">How to Use</Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:text-green-500 transition">Roadmap</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/integrations" className="hover:text-green-500 transition">Integrations</Link>
              </li>
              <li>
                <Link to="/documentation" className="hover:text-green-500 transition">Documentation</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-green-500 transition">FAQs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>Email: cryptoaccess@gmail.com</li>
              <li>Phone: 022-23442342</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-16">
          <h3 className="text-white text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-sm mb-6 text-gray-400">Stay updated with the latest news and insights.</p>

          <div className="w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 text-lg rounded-md bg-gray-800 text-white focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="w-full mt-3 bg-green-600 hover:bg-green-500 text-white py-2 text-lg rounded-md transition"
            >
              Subscribe
            </button>
          </div>

          {message && <p className="text-sm mt-4 text-green-400">{message}</p>}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8 mt-16">
          <p className="text-sm">© {new Date().getFullYear()} Crypto Access. All rights reserved.</p>

          <ul className="flex gap-6 mt-4 md:mt-0">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition hover:bg-gray-700"
              >
                <img src={item.iconUrl} width={18} height={18} alt={item.title} />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
