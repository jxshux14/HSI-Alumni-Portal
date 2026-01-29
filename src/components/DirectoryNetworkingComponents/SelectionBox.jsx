import React from 'react'

export default function SelectionBox({ test, className, value, onChange }) {
  return (
    <select 
      className={`w-full bg-gray-100 p-2 border border-gray-300 rounded-xl focus:outline focus:outline-yellow-400 h-10 ${className}`}
      value={value}
      onChange={onChange}
    >
      {test.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>  
  )
}