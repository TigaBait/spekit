"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:px-6 bg-white border-b">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto text-spekit-pink">
            <path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0ZM22.4 22.4H20.8V24H22.4V22.4ZM22.4 11.2H20.8V20.8H22.4V11.2ZM17.6 17.6H16V19.2H17.6V17.6ZM17.6 8H16V16H17.6V8ZM12.8 14.4H11.2V16H12.8V14.4ZM12.8 6.4H11.2V12.8H12.8V6.4Z" fill="#c12771"/>
          </svg>
          <span className="ml-2 text-lg font-semibold text-spekit-navy">Spekit</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/why_spekit" className="text-sm font-medium text-spekit-navy hover:text-spekit-pink">
            Why Spekit
          </Link>

          <div className="relative">
            <button
              className="flex items-center text-sm font-medium text-spekit-navy hover:text-spekit-pink"
              onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
            >
              Product <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {isProductMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg p-4 border">
                <div className="grid gap-2">
                  <Link href="/product-overview" className="text-sm font-medium text-spekit-navy hover:text-spekit-pink p-2 rounded hover:bg-gray-50">
                    The Platform
                  </Link>
                  <Link href="/use-cases/content-management" className="text-sm font-medium text-spekit-navy hover:text-spekit-pink p-2 rounded hover:bg-gray-50">
                    Content Management
                  </Link>
                  <Link href="/use-cases/knowledge-and-enablement" className="text-sm font-medium text-spekit-navy hover:text-spekit-pink p-2 rounded hover:bg-gray-50">
                    Just-in-time Knowledge
                  </Link>
                  <Link href="/use-cases/employee-onboarding-and-training" className="text-sm font-medium text-spekit-navy hover:text-spekit-pink p-2 rounded hover:bg-gray-50">
                    Learning & Onboarding
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/case-studies" className="text-sm font-medium text-spekit-navy hover:text-spekit-pink">
            Customers
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="https://app.spekit.co/app/dashboard" className="hidden md:inline-block text-sm font-medium text-spekit-navy hover:text-spekit-pink">
          Login
        </Link>
        <Button className="bg-spekit-pink hover:bg-opacity-90 text-white rounded-full px-4 py-2 text-sm">
          Get a demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
