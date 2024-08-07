import React from 'react'

export default function Header({handleChange, search, onSubmit}) {
    
  return (
    <div className='w-full bg-black text-white p-5 md:p-6 lg:p-7 flex justify-between shadow-[0px_3px_6px_0px_#555] '>
      <h1 className='text-2xl text-orange-400 font-bold'>RecipeBook</h1>
      <form onSubmit={onSubmit}>
            <input type="text" className='border rounded-lg px-3 py-1 sm:w-[300px] w-[150px] text-black font-semibold' placeholder='&#xF002; Search recipe...' onChange={handleChange} value={search}/>
      </form>
    </div>
  )
}
