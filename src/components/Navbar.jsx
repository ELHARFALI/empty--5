import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[50px] bg-[#003580] flex justify-center '>
        <div className='w-full max-w-[1024px] text-white flex items-center justify-between'>
            <span className='font-semibold'>Lamabooking</span>
            <div className='navItem'>
                <button className='mr-[20px] border-none py-[5px] px-[10px] cursor-pointer bg-white text-[#003580]'>Register</button>
                <button className=' border-none py-[5px] px-[10px] cursor-pointer bg-white text-[#003580]'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar