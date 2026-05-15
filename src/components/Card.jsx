
import React from 'react'

const Card = ({ elem }) => {

  return (

    <div className='bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-all duration-300'>

      {/* Image */}
      <div className='overflow-hidden'>

        <img
          src={elem.download_url}
          alt='image'
          className='h-[220px] w-full object-cover hover:scale-110 transition-all duration-500'
        />

      </div>


      {/* Content */}
      <div className='p-4'>

        <h2 className='text-lg font-semibold truncate'>
          {elem.author}
        </h2>

        <p className='text-gray-400 text-sm mt-1'>
          Image ID : {elem.id}
        </p>


        {/* Buttons */}
        <div className='flex gap-3 mt-4'>

          <a
            href={elem.download_url}
            target='_blank'
            className='bg-amber-400 hover:bg-amber-300 text-black text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200'
          >
            View
          </a>


          <a
            href={elem.download_url}
            download
            className='bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-semibold px-4 py-2 rounded-lg border border-zinc-700 transition-all duration-200'
          >
            Download
          </a>

        </div>

      </div>

    </div>
  )
}

export default Card
