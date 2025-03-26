import React from 'react'

const Home = () => {
  return (
    <div className='w-full min-w-3xl h-screen overflow-y-scroll p-6'>
      <main className='w-full'>
        <div className='h-100 flex justify-evenly items-center rounded-lg bg-[url(/hero.jpg)] bg-cover bg-top'>
          <div className='w-1/3 h-full'>

          </div>
          <div className='h-full flex flex-col justify-evenly w-2/3 text-6xl text-white text-right p-5'>
            <div>
              <h1>No More</h1>
              <h1>Missed Deadlines</h1>
            </div>
            <div className='text-2xl'>Manage all your tasks on <span className='bg-white p-1 rounded-sm text-black font-bold'>task<span className='text-[#0795d7]'>root</span></span> and never ever again miss a deadline. Make your life easy.</div>
          </div>
        </div>
      </main>
      <div className='w-full flex justify-center py-7'>
        <div className=' w-full h-fit gap-4 p-4 flex text-lg justify-center items-center bg-gray-100 rounded-md'>
          <div className='w-full flex justify-center'>
            <img src="image1.jpg" alt="Girl writing on board" className=' w-full rounded-md' />
          </div>
          <div className='w-full flex flex-col justify-center gap-4'>
            <h2 className='text-xl'><span className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugit.</span> Lorem ipsum dolor sit.</h2>
            <div className='w-full text-md'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam, inventore similique cum, nihil aspernatur fugiat adipisci cumque nesciunt, sint vel! Saepe quae quia eligendi inventore, ullam dolorum temporibus beatae.
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center py-7'>
        <div className=' w-full h-fit gap-4 p-4 flex text-lg justify-center items-center bg-gray-100 rounded-md'>
          <div className='w-full flex flex-col justify-center gap-4'>
            <h2 className='text-xl'><span className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugit.</span> Lorem ipsum dolor sit.</h2>
            <div className='w-full text-md'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam, inventore similique cum, nihil aspernatur fugiat adipisci cumque nesciunt, sint vel! Saepe quae quia eligendi inventore, ullam dolorum temporibus beatae.
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <img src="image2.jpg" alt="Girl writing on board" className=' w-full rounded-md' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
