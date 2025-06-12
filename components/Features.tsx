'use client'

import { Brain, Target, BarChart3, Users, Clock, Award } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Course Generation',
    description: 'Advanced AI creates personalized courses based on your learning goals, skill level, and preferred learning style.',
    color: 'text-blue-600'
  },
  {
    icon: Target,
    title: 'Personalized Learning Paths',
    description: 'Adaptive learning algorithms adjust course difficulty and content based on your progress and performance.',
    color: 'text-purple-600'
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: 'Comprehensive analytics and insights help you monitor your learning journey and identify areas for improvement.',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Community Learning',
    description: 'Connect with fellow learners, join study groups, and participate in collaborative learning experiences.',
    color: 'text-orange-600'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Learn at your own pace with flexible scheduling options that fit your busy lifestyle and commitments.',
    color: 'text-red-600'
  },
  {
    icon: Award,
    title: 'Skill Certification',
    description: 'Earn industry-recognized certificates and badges to showcase your newly acquired skills and knowledge.',
    color: 'text-indigo-600'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="gradient-text"> Modern Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of education with our comprehensive suite of AI-powered learning tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 card-hover"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gray-50 ${feature.color} mb-6`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}