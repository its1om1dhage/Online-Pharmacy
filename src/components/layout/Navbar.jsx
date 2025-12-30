import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  return (
    <nav className="bg-white backdrop-blur-lg bg-opacity-95 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 mr-8">
            <img 
              src="/MediEase_logo.png" 
              alt="MediEase" 
              className="h-14 w-auto object-contain transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto px-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search medicines, healthcare products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 flex-shrink-0 ml-8">
            {/* Location */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-11 pl-9 pr-9 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 font-medium cursor-pointer appearance-none hover:bg-gray-100 focus:outline-none focus:border-primary-red transition-all"
              >
                <option value="">Location</option>
                <option value="ny">New York</option>
                <option value="la">Los Angeles</option>
                <option value="chicago">Chicago</option>
                <option value="houston">Houston</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Cart */}
            <Link to="/cart">
              <button className="relative h-11 px-4 flex items-center gap-2 rounded-xl hover:bg-gray-50 transition-all group">
                <div className="relative">
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-primary-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-br from-red-500 to-red-700 text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-red transition-colors">Cart</span>
              </button>
            </Link>

            {/* Login */}
            <Link to="/login">
              <button className="h-11 px-7 bg-gradient-to-r from-[#FF7B7B] via-[#FF3333] via-[#DD0000] via-[#AA0000] to-[#660000] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
