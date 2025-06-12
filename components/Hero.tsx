'use client'

import { ArrowRight, Play, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Learning Revolution
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Generate Personalized
              <span className="gradient-text block">AI Courses</span>
              in Minutes
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your learning journey with AI-generated courses tailored to your goals. 
              Track progress, master skills, and achieve your educational dreams faster than ever.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="btn-primary flex items-center group">
                Start Learning Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Your AI Course: "Advanced React Development"</h3>
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      Progress: 65%
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Module 3: State Management</span>
                      <span>8/12 lessons</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-3 animate-bounce-slow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-400 rounded-full p-3 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}