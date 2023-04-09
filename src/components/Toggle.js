import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-red-900' : 'bg-red-300'}
        relative inline-flex h-6 w-11 items-center shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
          inline-block h-5 w-5 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  )
}