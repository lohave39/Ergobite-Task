// app/page.js
'use client'
import PricingTable from './components/PricingTable'


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white text-center">
        Choose Your Plan
      </h1>

      <PricingTable />
    </main>
  )
}
