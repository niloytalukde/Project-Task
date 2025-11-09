"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, Search, ShoppingCart, User, Menu, X } from "lucide-react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2d4b15] text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-3 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
      
        <h1 className="font-semibold text-lg">TriGardening</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 sm:space-x-10 lg:space-x-16 xl:space-x-20 text-sm lg:text-base font-medium">
        <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link href="/products" className="hover:text-gray-200">Products</Link></li>
        <li><Link href="/blog" className="hover:text-gray-200">Blog</Link></li>
        <li><Link href="/plant-clinic" className="hover:text-gray-200">Plant Clinic</Link></li>
      </ul>

      {/* Right Section - Desktop */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Call Button */}
        <button className="bg-[#c4731a] flex items-center gap-2 px-4 py-1.5 rounded-md hover:bg-[#a55d14] transition">
          <Phone size={16} />
          <span>Call Now</span>
        </button>

        {/* Search */}
        <div className="flex items-center bg-transparent border border-white/40 rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search plants, tools"
            className="bg-transparent text-white placeholder-white/70 outline-none text-sm w-40"
          />
          <Search size={18} className="ml-2" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-2 bg-orange-500 text-xs px-1 rounded-full">3</span>
          </div>
          <User size={20} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex items-center"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu*/}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#2d4b15] border-t border-white/20 flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-50">
          <ul className="flex flex-col space-y-3 w-full text-base font-medium">
            <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link href="/products" className="hover:text-gray-200">Products</Link></li>
            <li><Link href="/blog" className="hover:text-gray-200">Blog</Link></li>
            <li><Link href="/plant-clinic" className="hover:text-gray-200">Plant Clinic</Link></li>
          </ul>

          <div className="flex items-center justify-between w-full mt-4">
            <button className="bg-[#c4731a] flex items-center gap-2 px-4 py-1.5 rounded-md hover:bg-[#a55d14] transition">
              <Phone size={16} />
              <span>Call Now</span>
            </button>

            <div className="flex items-center gap-4">
              <ShoppingCart size={22} />
              <User size={22} />
            </div>
          </div>

          {/* Mobile Search */}
          <div className="flex items-center bg-transparent border border-white/40 rounded-full px-3 py-1 w-full mt-3">
            <input
              type="text"
              placeholder="Search plants, tools"
              className="bg-transparent text-white placeholder-white/70 outline-none text-sm flex-1"
            />
            <Search size={18} className="ml-2" />
          </div>
        </div>
      )}
    </nav>
  );
}
