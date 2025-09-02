import React from "react";
import { Phone, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="w-full bg-slate-300 py-4">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
            <span className="text-sm text-gray-700 font-sans font-medium">Let's Connect:</span>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-gray-600" />
              <span className="text-sm text-gray-700 font-sans">+44 7985152844</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-gray-600" />
              <span className="text-sm text-gray-700 font-sans">tom@synaite.com</span>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-200 py-0">
            <p className="text-xs text-gray-600 font-sans py-[10px]">
              © 2025 Synaite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;