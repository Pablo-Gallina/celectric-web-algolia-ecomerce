import React from 'react'
import { useState } from 'react'

interface DropdownCategoriesProps {
  text: string
}

export default function DropdownCategories({ text }: DropdownCategoriesProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="inline-flex">
      <button
        className="text-white font-bold text-base"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {text}
      </button>

      <div
        className={`relative ${isOpen ? '' : 'hidden'}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="absolute -right-32 z-10 w-56 mt-12 bg-white border border-gray-100 rounded-md shadow-lg">
          <div className="p-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              ReactJS Dropdown 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              ReactJS Dropdown 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              ReactJS Dropdown 3
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
