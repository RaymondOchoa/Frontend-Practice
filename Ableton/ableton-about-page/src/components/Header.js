import React from 'react'
import menuicon from '../assets/menu-icon.png'

const Header = () => {
  return (
    <div className=''>
      <div className='mx-auto bg-white w-4/5 flex flex-row justify-between p-5 border border-bottom'>
        <div>
          <ul className='flex flex-row space-x-10 font-bold'>
            <img src={menuicon} className='cursor-pointer'/>
            <li className='cursor-pointer'>Live</li>
            <li className='cursor-pointer'>Push</li>
            <li className='cursor-pointer'>Link</li>
            <li className='cursor-pointer'>Shop</li>
            <li className='cursor-pointer'>Packs</li>
            <li className='cursor-pointer'>Help</li>
            <li className='text-[#ff764d] cursor-pointer'>More +</li>
          </ul>
        </div>

        <div>
          <ul className='flex flex-row space-x-5'>
            <li className='text-[#0000ff] font-bold cursor-pointer'>Try Live For Free</li>
            <li className='cursor-pointer'>Account</li>
            <li className='cursor-pointer'>Log Out</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Header
