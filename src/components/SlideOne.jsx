import React from 'react'
import rectangle from '../assets/Rectangle.png'
import rectangle7 from '../assets/Rectangle7.png'
import child from '../assets/Group925.png'
import cloud1 from '../assets/Frame (3).png'
import cloud2 from '../assets/Frame (4).png'
import cloud3 from '../assets/Frame (5).png'
import cloud4 from '../assets/Frame (6).png'
import cloud5 from '../assets/Frame (7).png'
import frame from '../assets/Group 926.png'
const SlideOne = () => {
  return (
    <div>
    <div className='flex justify-center '>
        <div className='relative'>
        <img src={rectangle} alt='rectangle ' className=''/>
        <h1 className='absolute top-4 left-10 text-white text-4xl'> Elements of Story Writing</h1>
        </div>
       
        
    </div>
    <div className='flex justify-center mx-14 text-lg'>
        <p className='mx-4'>Welcome to term 2 of Writers Club. Are you excited for this amazing journey?
            Over the next week, we will be practicing the different elements of story writing.Our
            aim is to make stories more interesting and exciting.</p>
    </div>
        <div className='flex justify-center'>
        <div className='relative'>
                <img src={rectangle7} alt='rectangle7 ' className= 'h-auto w-[780px]'/>
                <h1 className='absolute top-2 mx-4 pr-32  text-white text-lg font-extralight'>
                There are <span className='font-extrabold'>five </span> elements which make the foundation for story writing. 
                An element is an essential part of something and every fiction story has the same key elements:
                </h1>
                <img src={child} alt='thinking' className='size-20 absolute  top-3 right-8'/>
            </div>
        </div>
        <div className='flex justify-center mx-28 gap-5 mt-1'>
        <img src={cloud1} alt='settings' className='size-[70px] w-auto'/>
        <img src={cloud2} alt='characters'className='size-[70px] w-auto'/>
        <img src={cloud3} alt='plot'className='size-[70px] w-auto'/>
        <img src={cloud4} alt='problem or conflict'className='size-[70px] w-auto'/>
        <img src={cloud5} alt='resolution'className='size-[70px] w-auto'/>
        </div>
        <div  className='mx-14'> 
        <p className='mx-4'>
        You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.
        </p>
        </div>
        <div className='mx-14 flex justify-center'>
        <img src={frame} alt='frame' className=' w-[95%] relative'/>
        <p className='absolute px-36 text-xl'>
            For today’s lesson, we will try to understand and practice writing the setting for our stories.
            The setting is an important element of every fiction story</p>
        </div>
    </div>
  )
}

export default SlideOne