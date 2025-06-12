'use client'

import { Check, Sparkles, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for getting started with AI learning',
    features: [
      '3 AI-generated courses per month',
      'Basic progress tracking',
      'Community access',
      'Mobile app access',
      'Email support'
    ],
    popular: false,
    cta: 'Get Started Free'
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'Ideal for serious learners and professionals',
    features: [
      'Unlimited AI-generated courses',
      'Advanced progress analytics',
      'Priority community access',
      'Offline course downloads',
      'Live chat support',
      'Skill certifications',
      'Custom learning paths'
    ],
    popular: true,
    cta: 'Start Pro Trial'
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For teams and organizations',
    features: [
      'Everything in Pro',
      'Team management dashboard',
      'Custom branding',
      'API access',
      'Dedicated account manager',
      'Advanced reporting',
      'SSO integration',
      'Custom integrations'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include our core AI learning features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border-2 card-hover relative ${
                plan.popular 
                  ? 'border-primary-500 shadow-xl' 
                  : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}