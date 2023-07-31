import React from 'react'

const Button = ({children, addedStyle, type, handleClick}) => {
  return (
    <button type={type} onClick={handleClick} className={`${addedStyle} px-4 py-3 rounded-lg hover:translate-y-2 font-openSans font-medium text-lg`}>
        {children}
    </button>
  )
}

export default Button