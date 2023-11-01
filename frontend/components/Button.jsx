import React from 'react'

const Button = ({children}) => {
  return (
    <div className='px-3 capitalize text-base bg-[#6637ED] h-8 rounded-md md:text-base'>{children}</div>
  )
}

export default Button