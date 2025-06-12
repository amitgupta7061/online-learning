'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Join 50,000+ Learners Worldwide
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Learning Journey?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Start generating personalized AI courses today and unlock your full potential. 
            Join thousands of learners who are already advancing their careers with LearnAI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white hover:text-gray-200 font-semibold py-4 px-8 rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-200">
              Schedule a Demo
            </button>
          </div>
          
          <p className="text-white/80 text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}