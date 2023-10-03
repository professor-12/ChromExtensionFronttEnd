import React from 'react'

const Input = ({ type, placeholder, id, name, label }) => {
      return (
            <div className='flex flex-col space-y-2  font-medium'>
                  <label className='' htmlFor={name}>{label}</label>
                  <div className='border p-1 border-black/50 rounded-lg'>
                        <input className='w-full p-1 placeholder:text-slate-600 placeholder:text-medium placeholder:text-sm focus:outline-none' type={type} placeholder={placeholder} id={id} name={name} /></div>
            </div>
      )
}

export default Input