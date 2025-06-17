'use client'
import { useState } from 'react'
import Toggle from './Toggle'
import PricingCard from './PricingCard'
import FeatureTable from './FeatureTable'
import { plans } from '../data/plans'
import { features } from '../data/features'
import { motion, AnimatePresence } from 'framer-motion'

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="max-w-7xl mx-auto p-6 sm:p-10 text-gray-800 dark:text-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Our Pricing Plans</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Choose a plan that fits your needs. Toggle to view monthly or yearly billing.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <Toggle enabled={isYearly} setEnabled={setIsYearly} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <AnimatePresence mode="wait">
          {plans.map(plan => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PricingCard plan={plan} isYearly={isYearly} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <FeatureTable plans={plans} features={features} isYearly={isYearly} />
    </section>
  )
}
