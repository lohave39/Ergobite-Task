// components/Toggle.js
'use client'
import { Switch } from '@headlessui/react'

export default function Toggle({ enabled, setEnabled }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Monthly</span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-blue-600' : 'bg-gray-400'
        } relative inline-flex h-6 w-11 items-center rounded-full transition`}
      >
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <span className="text-sm">Yearly</span>
    </div>
  )
}
