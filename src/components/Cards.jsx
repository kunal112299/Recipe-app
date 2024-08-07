import React from 'react'

export default function Cards({data}) {

  return (
    <div className='flex flex-wrap gap-4 justify-center items-center py-10 px-10'>
        {data.map((recipe, idx) => (
            <div className='w-[220px] border  shadow-[0px_3px_6px_0px_#aaa]'>
                <div className="m-2">
                        <img src={recipe.recipe.images.SMALL.url} alt="" srcset="" className='w-[100%] h-[150px]'/>
                        <h2  className='text-xl font-bold'>Paneer</h2>
                </div>
                <div className='flex flex-col '>
                    <button type="button" className='p-2 m-2 border border-green-400 font-semibold text-green-400'>Ingredients</button>
                    <button type="button" className='p-2 m-2 border border-red-400 font-semibold text-red-400'>See Complete Recipe</button>
                </div>
            </div>
        ))}
    </div>
  )
}
