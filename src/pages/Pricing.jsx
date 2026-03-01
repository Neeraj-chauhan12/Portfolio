import React, { useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {
  const navigate = useNavigate()
  const [isAnnual, setIsAnnual] = useState(false)
  const [animateCards, setAnimateCards] = useState(false)

  useEffect(() => {
    setAnimateCards(true)
  }, [])

  const supportFee = 1500
  
  const pricingPlans = [
    {
      id: 1,
      name: 'Starter',
      pages: '3-4 Pages',
      price: 1999,
      basePrice: 1999,
      description: 'Perfect for small businesses and portfolios',
      features: [
        'Modern & Responsive Design',
        '3-4 Custom Pages',
        'Mobile Optimized',
        'Basic SEO Setup',
        'Contact Form Integration',
        '5 Revision Rounds',
        'Hosting Setup Assistance',
      ],
      highlighted: false,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 2,
      name: 'Professional',
      pages: '5-7 Pages + Features',
      price: 3999,
      basePrice: 3999,
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Everything in Starter +',
        '5-7 Custom Pages',
        'Blog or CMS Integration',
        'Advanced SEO Optimization',
        'Payment Gateway Integration',
        'Newsletter Setup',
        'Animation & Interactions',
        'Unlimited Revisions',
        'Email Support (30 days)',
      ],
      highlighted: true,
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 3,
      name: 'Full Stack',
      pages: '10-12 Pages + Full App',
      price: 7999,
      basePrice: 7999,
      description: 'Enterprise solutions with complete functionality',
      features: [
        'Everything in Professional +',
        '10-12 Custom Pages',
        'Full Stack Application',
        'Database Integration',
        'User Authentication System',
        'Admin Dashboard',
        'Advanced Analytics',
        'API Development',
        'Custom Integrations',
        '3 Months Support',
        'Performance Optimization',
        'Security Audit & Setup',
      ],
      highlighted: false,
      color: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-500/30'
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20'>
      {/* Header */}
      <div className='max-w-6xl mx-auto px-4 mb-20'>
        <div className='text-center'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Simple, Transparent Pricing
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto mb-10'>
            Choose the perfect plan for your project. Scale up anytime as your needs grow.
          </p>

          {/* Toggle Annual/Monthly */}
          <div className='flex justify-center items-center gap-4 mb-12'>
            <span className={`text-lg ${!isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>
              One-Time
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className='relative inline-flex h-10 w-20 items-center rounded-full bg-gradient-to-r from-gray-700 to-gray-600 transition-all duration-300 hover:from-gray-600 hover:to-gray-500'
            >
              <span
                className={`inline-block h-8 w-8 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                  isAnnual ? 'translate-x-10' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>
              With Support
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid md:grid-cols-3 gap-8 lg:gap-6'>
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative group transition-all duration-700 ${
                animateCards
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } ${
                plan.highlighted
                  ? 'md:scale-105 md:shadow-2xl'
                  : ''
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${plan.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-all duration-300`}
              />

              {/* Card */}
              <div className={`relative bg-gray-800/50 backdrop-blur-xl border ${plan.borderColor} rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-300 h-full flex flex-col`}>
                {/* Badge for highlighted plan */}
                {plan.highlighted && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-bold'>
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
                <p className='text-gray-400 text-sm mb-6'>{plan.pages}</p>
                <p className='text-gray-300 text-sm mb-8'>{plan.description}</p>

                {/* Price */}
                <div className='mb-8'>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-5xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>
                      ₹{(plan.basePrice + (isAnnual ? supportFee : 0)).toLocaleString()}
                    </span>
                    <span className='text-gray-400 text-lg'>
                      {isAnnual ? '/with support' : '/one-time'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className='text-sm text-green-400 mt-2'>+₹{supportFee} for 3 months support</p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => navigate('/Contact')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold mb-10 transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-pink-500/50'
                      : 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500'
                  }`}
                >
                  Get Started
                </button>

                {/* Features */}
                <div className='flex-1'>
                  <p className='text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider'>
                    What's Included
                  </p>
                  <ul className='space-y-4'>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className='flex items-start gap-3'>
                        <FaCheck className='text-green-400 mt-1 flex-shrink-0' />
                        <span className='text-gray-300 text-sm'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className='max-w-4xl mx-auto px-4 mt-20 pt-20 border-t border-gray-700'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          {[
            {
              q: 'Can I upgrade my plan later?',
              a: 'Absolutely! You can upgrade anytime. We\'ll calculate the difference and adjust accordingly.'
            },
            {
              q: 'Do you offer custom packages?',
              a: 'Yes! If none of these plans fit your needs, contact us for a custom quote tailored to your project.'
            },
            {
              q: 'What\'s included in the price?',
              a: 'Design, development, deployment assistance, and the features listed in your plan are all included.'
            },
            {
              q: 'How long does development take?',
              a: 'Typically 2-4 weeks depending on complexity. Rush delivery available for additional fees.'
            }
          ].map((faq, idx) => (
            <div key={idx} className='bg-gray-800/30 backdrop-blur border border-gray-700/50 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300'>
              <h3 className='text-lg font-semibold mb-3 text-blue-400'>{faq.q}</h3>
              <p className='text-gray-300'>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className='max-w-4xl mx-auto px-4 mt-20 text-center'>
        <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur'>
          <h2 className='text-3xl font-bold mb-4'>Still Have Questions?</h2>
          <p className='text-gray-300 mb-8'>
            Our team is here to help! Send us a message or schedule a consultation call to discuss your project and find the perfect solution for you.
          </p>
          <div className='flex gap-4 justify-center flex-wrap'>
            <button onClick={() => navigate('/Contact')} className='px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50'>
              Contact Us
            </button>
            <button className='px-8 py-3 border border-gray-400 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300'>
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
