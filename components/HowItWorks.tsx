'use client'

import { MessageSquare, Cpu, BookOpen, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Tell Us Your Goals',
    description: 'Share what you want to learn, your current skill level, and your preferred learning style.',
    step: '01'
  },
  {
    icon: Cpu,
    title: 'AI Creates Your Course',
    description: 'Our advanced AI analyzes your requirements and generates a personalized learning curriculum.',
    step: '02'
  },
  {
    icon: BookOpen,
    title: 'Start Learning',
    description: 'Begin your journey with interactive lessons, quizzes, and hands-on projects tailored to you.',
    step: '03'
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Monitor your advancement with detailed analytics and receive AI-powered recommendations.',
    step: '04'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with personalized AI learning in just four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}