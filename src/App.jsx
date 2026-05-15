import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const getData = async () => {
    try {
      setLoading(true)

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=12`
      )

      setUserData(response.data)
      setFilteredData(response.data)

      setLoading(false)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [index])

  useEffect(() => {

    const filtered = userData.filter((elem) => {
      return elem.author.toLowerCase().includes(search.toLowerCase())
    })

    setFilteredData(filtered)

  }, [search, userData])

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-6'>

      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-8'>

        <div>
          <h1 className='text-4xl font-bold tracking-wide'>
            Image Gallery
          </h1>

          <p className='text-gray-400 mt-2 text-sm'>
            Explore stunning random images with React
          </p>
        </div>

        <div className='flex gap-4 items-center'>

          <input
            type='text'
            placeholder='Search by author...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-zinc-800 border border-zinc-700 outline-none px-4 py-2 rounded-xl text-sm w-[240px]'
          />

          <div className='bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-xl'>
            <h4 className='font-semibold text-sm'>
              Page {index}
            </h4>
          </div>

        </div>
      </div>


      {/* Loading */}
      {
        loading ? (
          <div className='flex justify-center items-center h-[60vh]'>
            <div className='h-14 w-14 rounded-full border-4 border-amber-400 border-t-transparent animate-spin'></div>
          </div>
        ) : (

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

            {
              filteredData.map((elem, idx) => {
                return <Card key={idx} elem={elem} />
              })
            }

          </div>
        )
      }


      {/* Buttons */}
      <div className='flex justify-center items-center gap-5 mt-10'>

        <button
          disabled={index === 1}
          className={`px-5 py-2 rounded-xl font-semibold transition-all duration-200
          ${index === 1
              ? 'bg-zinc-700 cursor-not-allowed text-gray-400'
              : 'bg-amber-400 hover:bg-amber-300 text-black active:scale-95'
            }`}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
            }
          }}
        >
          Prev
        </button>


        <button
          className='bg-amber-400 hover:bg-amber-300 text-black px-5 py-2 rounded-xl font-semibold active:scale-95 transition-all duration-200'
          onClick={() => {
            setIndex(index + 1)
          }}
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default App
