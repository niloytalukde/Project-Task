
"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-green-700 pb-10">
        {/* Title And description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">TriGardening</h2>
          <p className="text-gray-300">Your Slogan goes here</p>
        </div>

        {/* Footer Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Shippings</Link></li>
            <li><Link href="#">Referral Program</Link></li>
          </ul>
        </div>

         {/* Categories  */}
        <div>
          <h3 className="font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Plants</Link></li>
            <li><Link href="#">Tools</Link></li>
            <li><Link href="#">Fertilizers</Link></li>
            <li><Link href="#">Pesticides</Link></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <Link href="#"><Facebook className="w-5 h-5 text-gray-300 hover:text-white" /></Link>
            <Link href="#"><Instagram className="w-5 h-5 text-gray-300 hover:text-white" /></Link>
            <Link href="#"><Twitter className="w-5 h-5 text-gray-300 hover:text-white" /></Link>
            <Link href="#"><Youtube className="w-5 h-5 text-gray-300 hover:text-white" /></Link>
          </div>
          <p className="text-gray-300">support@trigardening.com</p>
          <p className="mt-3 font-semibold text-white">Call Now</p>
          <p className="text-gray-300">+8801234567890</p>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} TriGardening. All Rights Reserved
      </div>
    </footer>
  );
}
