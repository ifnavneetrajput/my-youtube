import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <button className='bg-gray-300 rounded-lg px-5 mx-5'>{ title}</button>
    </div>
  )
}

export default Button