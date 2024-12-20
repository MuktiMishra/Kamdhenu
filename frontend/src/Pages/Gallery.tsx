import React from 'react'

const Gallery = () => {
  return (
    <div className='flex flex-col'>
        <div className="text-3xl md:text-4xl font-extrabold text-center mt-5 mb-10 text-[#0000FF]">
          Gallery
        </div>
        <div className="flex gap-6 justify-center items-center m-5">
            <div className="flex md:flex-col gap-6 justify-center items-center w-[30%] ">
                <div className='h-52 object-cover'>
                    <img src='./km.jpg' className='w-full h-full object-cover rounded-lg' />
                </div>
                <div className='h-52 object-cover'>
                    <img src='./km.jpg' className='w-full h-full object-cover rounded-lg' />
                </div>
            
                
            </div>
            <div className="flex flex-row md:flex-col gap-6 justify-center items-center w-[30%]">
                <div className='h-52 object-cover'>
                    <img src='./km.jpg' className='w-full h-full object-cover rounded-lg' />
                </div>
                <div className='h-52 object-cover'>
                    <img src='./km.jpg' className='w-full h-full object-cover rounded-lg' />
                </div>
                
            </div>
            <div className="flex flex-row md:flex-col gap-6 justify-center items-center w-[30%]">
                <div className='h-52 object-cover'>
                    <img src='./km.jpg' className='w-full h-full object-cover rounded-lg' />
                </div>
                <div className='h-52 object-cover'>
                    <img src='./km.jpg' className='w-full h-full object-cover rounded-lg' />
                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Gallery
