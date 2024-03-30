import React from 'react'
import imageOne from '../assets/Group1454.png'
import imageTwoFrame from '../assets/MarkGroupframe.png'
import tikTok from '../assets/Group 930.png'
import imageTwo from '../assets/Maskgroup.png'
import rectangle8 from '../assets/Rectangle 8.png'
import rectangle7 from '../assets/Rectangle7.png'
import clock from '../assets/Frame (9).png'
import homeIcon from '../assets/Group (1).png'


const SlideTwo = () => {
  return (
    <div className='mx-16'>
    <div className=''>
       <h1 className='text-2xl'>Can you figure out the definition of setting from the following examples?</h1>
       <p className='mt-2'>(take a minute to think about this)</p>
    </div>
    <div className='flex justify-center mt-3'>
    <div>
    <img src={imageOne} alt='Sunny Day' className='size-3/4 h-auto'/>
    <p>Sunny day at the beach</p>
    </div>
    <div>
    <img src={imageTwoFrame} alt='Sunny Day' className='size-3/4 h-auto relative'/>
    <img src={imageTwo} alt='Sunny Day' className='  absolute top-[23%] left-[53.5%] size-[115px]'/>
    <p>A rainy night in a haunted <br/>house in October</p>
    </div>
    </div>
    <p className=''>So, what do you think the definition of setting is?</p>

        {/* flex for input */}
        <div className='flex'>
            <p className='mt-3'>Any guesses?</p>

            <div className='relative'>
                <img src={rectangle8} alt='rectangle' className='ml-2 size-[430px] h-auto py-2'/>
                <input placeholder='_______________________________________________________________________________' 
                className='absolute top-[25%] w-[400px] ml-4 text-gray-400 font-bold outline-none'></input>
             </div>
            <div className='flex items-center ml-3'>
            <p className='mx-2'>Hint:</p>
            <img src={tikTok} alt='clocks' className='cursor-pointer'></img>
            </div>
        </div>

        <div className='relative '>
            <img src={rectangle7} alt='rectangle 7'/>
            <p className='text-white absolute top-[10%] left-3 text-lg'>Setting is the time
            <span><img src={clock} className='size-5 mx-2 inline-block'/> </span>
            and place
            <span><img src={homeIcon} className='size-5 mx-2 inline-block'/>  </span>
            of a story. It often answers the questions: when? and where?</p>
        </div>
        <p>The time of the story could be in the past, future, day, night, summer or winter.
A story may take place in a school, a mall, a desert, an airplane or in a variety
of other places.</p>
    </div>
  )
}

export default SlideTwo