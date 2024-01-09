import React from 'react'

const Button = ({children, content, styles}) => {
  return (
    <button className={`${styles} px-3 bg-white text-[#4D4D4D]`}>
        {children}
    </button>
  )
}

export default Button