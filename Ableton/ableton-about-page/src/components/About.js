import React from 'react'
import studiopic from '../assets/main-ableton.png'
import beatmachine from '../assets/beatmachine.png'
import walking from '../assets/walking.png'
import Youtube from 'react-youtube'

const About = () => {
  const videoId = 'https://www.youtube.com/watch?v=9SbnhgjeyXA&t=1s'
  
  const opts = {
    height:'480',
    width:'854',
    playerVars: {
      autoplay: 1
    }
  }

  return (
      <div className='mx-auto bg-white h-100% w-4/5'>
        <ul className='flex flex-row space-x-10 p-5 font-semibold cursor-pointer'>
          <li className='text-[#ff764d]'>About</li>
          <li>Jobs</li>
          <li>Apprenticeships</li>
        </ul>
        <img 
          src={studiopic}
          className='flex justify-center mx-auto'
        />
       
        <p className='text-2xl w-7/12 mx-auto font-semibold pt-32 pb-2'>We make <span className='text-[#0000ff]'>Live</span>, <span className='text-[#0000ff]'>Push</span> and <span className='text-[#0000ff]'>Link</span> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</p>

        <p className='text-md w-7/12 mx-auto pt-2' >Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>


        <div className='grid pt-20'>
          <img 
            src={beatmachine}
            className=''
          />
          <div className='w-[800px] h-[900px] bg-[#fbffa7] col-end-3 '>
            <img src={walking}
              className='t-[200px] col-span-3'
            />
          </div>
        </div>

        <div>
          <p className='text-3xl w-7/12 mx-auto font-semibold pt-32 pb-2'>Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</p>
          <p className='text-lg w-7/12 mx-auto pt-5'>We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
        </div>

        <div>
          <Youtube 
            videoId='{videoId}'
            opts={opts}
            className='w-1/2 mx-auto pt-24'
          >
          </Youtube>
          <p className='flex pt-2 w-1/2 mx-auto justify-start'>Why Ableton - Juanpe Bolivar</p>
        </div>

        <div className=''>
          <p className='text-3xl w-3/5 mx-auto font-semibold pt-32 pb-2'>We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</p>
        </div>
        <p className='text-lg w-7/12 mx-auto pt-5'>Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>

      </div>

  )
}

export default About
