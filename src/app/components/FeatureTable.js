'use client'

import { FaCheck, FaTimes } from 'react-icons/fa'

export default function FeatureTable({ plans, features, isYearly }) {
  return (
    <div className="mt-12 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
      <table className="min-w-full text-sm text-left table-auto">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 uppercase text-xs tracking-wide">
          <tr>
            <th className="py-3 px-4 text-left">Feature</th>
            {plans.map(plan => (
              <th key={plan.name} className="py-3 px-4 text-center">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {features.map((feature, index) => (
            <tr
              key={index}
              className={`transition-transform duration-200 ease-in-out hover:scale-[1.01] hover:shadow-sm ${
                index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <td className="py-3 px-4 font-medium text-gray-700 dark:text-gray-300">
                {feature.label}
              </td>
              {plans.map(plan => {
                const available = feature.availability[plan.name]?.[isYearly ? 'yearly' : 'monthly']
                return (
                 <td key={plan.name} className="py-3 px-4">
  <div className="flex items-center justify-center">
    {available ? (
      <FaCheck className="text-green-500 text-lg" />
    ) : (
      <FaTimes className="text-red-500 text-lg" />
    )}
  </div>
</td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
