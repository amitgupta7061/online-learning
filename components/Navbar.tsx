'use client'

import { useState } from 'react'
import { Menu, X, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold gradient-text">LearnAI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Reviews
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href={'sign-in'} className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Sign In
              </Link>
              <Link href={'/sign-up'} className="btn-primary">
                Get Started
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a href="#features" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Reviews
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <button className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left">
                Sign In
              </button>
              <button className="btn-primary w-full mt-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}