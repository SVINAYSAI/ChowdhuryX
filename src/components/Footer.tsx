import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    services: [
      { label: 'AI Receptionist', path: '/services' },
      { label: 'AI Chatbot', path: '/services' },
      { label: 'AI Websites', path: '/services' },
      { label: 'Custom AI', path: '/services' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Process', path: '/process' },
      { label: 'Careers', path: '#' },
      { label: 'Contact', path: '/contact' },
    ],
    connect: [
      { label: 'LinkedIn', path: '#' },
      { label: 'Twitter', path: '#' },
      { label: 'GitHub', path: '#' },
      { label: 'Email', path: 'mailto:hello@chowdhuryx.com' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@chowdhuryx.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 bg-gradient-to-t from-black/50 to-transparent pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-white">Chowdhury</span>
                <span className="text-red-500">X</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              ChowdhuryX Organization LLC is a USA-Based AI & Software Company 
              dedicated to delivering cutting-edge technology solutions that transform businesses.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-white/10 mb-8">
          <div className="flex items-center gap-3 text-gray-400">
            <MapPin className="w-5 h-5 text-purple-500" />
            <span className="text-sm">USA-Based Company</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Phone className="w-5 h-5 text-cyan-500" />
            <span className="text-sm">+1 (XXX) XXX-XXXX</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Mail className="w-5 h-5 text-pink-500" />
            <span className="text-sm">hello@chowdhuryx.com</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ChowdhuryX Organization LLC. All rights reserved. | AI Solutions | USA-Based
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
