import React from 'react'
import studiopic from '../assets/main-ableton.png'

const About = () => {
  return (
      <div className='mx-auto bg-white h-screen w-4/5'>
        <ul className='flex flex-row space-x-10 p-5 font-bold cursor-pointer'>
          <li className='text-[#ff764d]'>About</li>
          <li>Jobs</li>
        </ul>
        <img 
          src={studiopic}
          className='flex justify-center mx-auto'
        />
        
        <p className='text-3xl w-1/2 mx-auto font-bold pt-32 pb-2'>We make <span className='text-[#0000ff]'>Live</span>, <span className='text-[#0000ff]'>Push</span> and <span className='text-[#0000ff]'>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things</p>

        <p className='text-lg w-1/2 mx-auto pt-2' >Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>

      </div>

  )
}

export default About
