'use client'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

export default function PricingCard({ plan, isYearly }) {
  const currentPrice = isYearly ? plan.yearly : plan.monthly
  const billingCycle = isYearly ? 'year' : 'mo'

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`relative p-6 rounded-3xl border shadow-xl bg-white dark:bg-gray-900 dark:border-gray-700 text-center flex flex-col justify-between h-full
        ${
          plan.name === 'Pro'
            ? 'border-blue-600 bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-gray-900'
            : 'bg-gray-50 dark:bg-gray-800'
        }`}
    >
      {plan.name === 'Pro' && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
          Recommended
        </div>
      )}

      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h3>

        <motion.div
          key={currentPrice}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white my-3"
        >
          ${currentPrice}
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/{billingCycle}</span>
        </motion.div>
      </div>

      <ul className="text-sm text-gray-700 dark:text-gray-300 text-left mt-6 space-y-3">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className="mt-8 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-all shadow-md font-semibold text-sm"
      >
        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
      </button>
    </motion.div>
  )
}
