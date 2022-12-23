import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBed, faTaxi, faPlane, faCar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {
    const [active, setActive] = useState(true)

  return (
    <div className='bg-[#003580] text-white flex justify-center '>
        <div className='w-full max-w-[1024px] mt-[20px] mb-[100px] mx-0 '>
            <div className='flex gap-[40px] mb-[50px]'>
                <div className={`flex items-center gap-[10px] ${active ? 'border border-solid border-white rounded-[20px] p-[10px]' : ''}`}>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flight</span>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attraction</span>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxi</span>
                </div>
            </div>
            <h1 className='my-[20px]'>A lifetime of discounts? It's Genius.</h1>
            <p className='my-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem fugiat inventore iusto ut, officia alias magni soluta voluptatum earum?</p>
            <button className='bg-[#0071c2] text-white font-[500] border-none cursor-pointer p-[10px] '>Sign in /Register</button>
        </div>
    </div>
  )
}

export default Header