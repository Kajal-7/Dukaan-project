import React from 'react'

function CountCard({title, count, className}) {
  return (
    <div style={{padding: "2.3em 1em", boxShadow: " 0px 1px 4px 1px rgba(163,163,163,0.53)"}}  className={`w-1/2 rounded overflow-hidden ${className}`}>
      <div className="text-gray-700 text-base mb-3">
         {title}
      </div>
      <div className="font-bold text-[20px] mb-2">{count}</div>
    </div>
  )
}

export default CountCard