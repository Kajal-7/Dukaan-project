import React from 'react'

const Button = ({children, content, styles}) => {
  return (
    <button style={{border: "2px solid #D9D9D9"}} className={`${styles} px-3 bg-white text-[#4D4D4D] rounded`}>
        {children}
    </button>
  )
}

export default Button