import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBed, faTaxi, faPlane, faCar, faCalendarDay, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { addDays } from 'date-fns';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
    const [active, setActive] = useState(true)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ])

  return (
    <div className='bg-[#003580] text-white flex justify-center relative'>
        <div className='w-full max-w-[1024px] mt-[20px] mb-[80px] mx-0 '>
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
            
            <div className='h-[30px] bg-white border-[3px] border-solid border-[#febb02] flex items-center justify-around py-[25px] rounded-[5px] absolute bottom-[-25px] w-full max-w-[1024px] '>
                <div className='flex items-center gap-[10px]  '>
                    <FontAwesomeIcon icon={faBed} className='text-gray-400' />
                    <input type="text" placeholder='Where are you going?' className='border-none outline-none text-gray-500' />
                </div>
                <div className='flex items-center gap-[10px]  '>
                    <FontAwesomeIcon icon={faCalendarDays} className='text-gray-400' />
                    <span onClick={() => setOpenDate((prev) => !prev)} className='text-gray-400 cursor-pointer'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                    {openDate && <DateRange 
                        editableDateInputs={false}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='absolute top-[55px] border border-gray-400 rounded-2xl overflow-hidden'
                    />}
                </div>
                <div className='flex items-center gap-[10px]  '>
                    <FontAwesomeIcon icon={faPerson} className='text-gray-400' />
                    <span className='text-gray-400 cursor-pointer'>2 adults 2 children 1 room</span>
                </div>
                <div className='flex items-center gap-[10px]  '>
                    <button className='bg-[#0071c2] text-white font-[500] border-none cursor-pointer p-[8px] '>Search</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Header