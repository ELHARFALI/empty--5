import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBed, faTaxi, faPlane, faCar, faCalendarDay, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { addDays } from 'date-fns';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = ({type}) => {
    const [active, setActive] = useState(true)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ])
      const [openOptions, setOpenOptions] = useState(false)
      const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
      })

      const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
      }

  return (
    <div className='bg-[#003580] text-white flex justify-center relative'>
        <div className={`w-full max-w-[1024px] mt-[20px] mb-[80px] ${type === 'list' ? 'mb-0' : ''} mx-0`}>
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
            {  type !== 'list' &&
                <>
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
                            <span onClick={() => setOpenOptions(prev => !prev)} className='text-gray-400 cursor-pointer'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                        {/* //// */}
                            { openOptions && <div className='absolute top-[50px] bg-white border border-gray-500 rounded-xl shadow-xl p-[10px]'>
                                <div className='text-gray-500 w-[200px] flex justify-between items-center mb-2 '>
                                    <span>Adults</span>
                                    <div className='flex items-center gap-[10px] text-sm '>
                                        <button 
                                            disabled={options.adult <= 1 }
                                            className='w-[30px] h-[30px] border border-[#0071c2] rounded-md text-[#0071c2]  bg-gray-100 ' 
                                            onClick={() => handleOption('adult', 'd')}>-</button>
                                        <span>{options.adult}</span>
                                        <button className='w-[30px] h-[30px] border border-[#0071c2] rounded-md text-[#0071c2]  bg-gray-100 ' 
                                        onClick={() => handleOption('adult', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className='text-gray-500 w-[200px] flex justify-between items-center mb-2 '>
                                    <span>Children</span>
                                    <div className='flex items-center gap-[10px] text-sm '>
                                        <button 
                                            disabled={options.adult <= 0 }
                                            className='w-[30px] h-[30px] border border-[#0071c2] rounded-md text-[#0071c2]  bg-gray-100  ' 
                                            onClick={() => handleOption('children', 'd')}>-</button>
                                        <span>{options.children}</span>
                                        <button 
                                            className='w-[30px] h-[30px] border border-[#0071c2] rounded-md text-[#0071c2]  bg-gray-100  ' 
                                            onClick={() => handleOption('children', 'i')}>+</button>
                                    </div>
                                </div>
                                <div className='text-gray-500 w-[200px] flex justify-between items-center '>
                                    <span>Room</span>
                                    <div className='flex items-center gap-[10px] text-sm '>
                                        <button 
                                            disabled={options.adult <= 1 }
                                            className='w-[30px] h-[30px] border border-[#0071c2] rounded-md text-[#0071c2]  bg-gray-100  ' 
                                            onClick={() => handleOption('room', 'd')}>-</button>
                                        <span>{options.room}</span>
                                        <button 
                                            className='w-[30px] h-[30px] border border-[#0071c2] rounded-md text-[#0071c2]  bg-gray-100  ' 
                                            onClick={() => handleOption('room', 'i')}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className='flex items-center gap-[10px]  '>
                            <button className='bg-[#0071c2] text-white font-[500] border-none cursor-pointer p-[8px] '>Search</button>
                        </div>
                    </div>
                </>
            }

        </div>
    </div>
  )
}

export default Header