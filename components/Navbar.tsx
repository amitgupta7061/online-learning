"use client";

import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold gradient-text">
              LearnAI
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="nav-link">Features</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#testimonials" className="nav-link">Reviews</a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {isLoaded && isSignedIn ? (
                <Link href="/workspace" className="btn-primary">
                  Workspace
                </Link>
              ) : (
                <>
                  <Link href="/sign-in?after_sign_in_url=/workspace" className="nav-link">
                    Sign In
                  </Link>
                  <Link href="/sign-up?after_sign_up_url=/workspace" className="btn-primary">
                    Get Started
                  </Link>
                </>
              )}
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
            <a href="#features" className="nav-link block">Features</a>
            <a href="#how-it-works" className="nav-link block">How It Works</a>
            <a href="#pricing" className="nav-link block">Pricing</a>
            <a href="#testimonials" className="nav-link block">Reviews</a>

            {isLoaded && isSignedIn ? (
              <Link href="/workspace">
                <Button className="w-full mt-4">Go to Workspace</Button>
              </Link>
            ) : (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link
                  href="/sign-in?after_sign_in_url=/workspace"
                  className="block w-full text-left text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up?after_sign_up_url=/workspace"
                  className="btn-primary w-full mt-2 inline-block text-center"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
