import React, { useState } from 'react'
import backgroundImage from './assets/background.png';
import funFox from './assets/funFox.png'
import weekOne from './assets/week1.png'
import userIcon from './assets/Group36.png'
import leftArrow from './assets/Layer_8.png'
import rightArrow from './assets/Layer7.png'
import sliderNumber from './assets/Group33.png'
import infoIcon from './assets/Group37.png'
import bagPack from './assets/Group1460.png'
import book from './assets/Group1458.png'
import pencil from './assets/Group 1462.png'
import ruler from './assets/Group 61.png'
import hat from './assets/Group 1459.png'
import questionBox from './assets/Group 53.png'
import openBook from './assets/Group 1461.png'
import sliderNumber2 from './assets/Group 332.png'

import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo';

const App = () => {
  // change component
  const [slide, setslide] = useState(1)
  const slideChange = (value)=>{
    
   return()=> {
    setslide(value)
    if(value===2){
      setrightIcon(questionBox)
      setWeekIcon("")
      setSlideNum(sliderNumber2)
    }
    else{
      setrightIcon(book)
      setWeekIcon(weekOne)
      setSlideNum(sliderNumber)
    }
    }
  }
  // change icons based on slides
  const [rightIcon, setrightIcon]= useState(book)
  const [weekIcon, setWeekIcon]= useState(weekOne)
  const [slideNum, setSlideNum]= useState(sliderNumber)
  

  return (
    // Background
    <div className=" h-screen relative bg-contain bg-center bg-no-repeat sm:mx-60" style={{backgroundImage: `url(${backgroundImage})`}}>
      {/* all border icons */}
      <img src={bagPack} alt='bag' className=' top-[50%] absolute size-10'/>
      <img src={rightIcon} alt='book' className='right-0 top-[50%] absolute size-16'/>
      <img src={pencil} alt='pencil' className='top-[17%] absolute'/>
      <img src={ruler} alt='ruler' className='right-0 top-[10%] absolute'/>
      <img src={openBook} alt='openBook' className=' bottom-[17%] absolute size-12'/>
      <img src={hat} alt='hat' className='right-0 bottom-[17%] absolute size-12'/>
      <img src={funFox} alt='funFox' className='absolute'></img>
      <img src={weekIcon}  className='absolute left-[20%] '></img>
      
      {/* conditionally rendered components */}
      <div className='absolute top-[10%]'>
        {slide===1&&<SlideOne/>}
        {slide===2&&<SlideTwo/>}
      </div>
        {/* bottom buttons */}
          <div className='flex justify-between gap-80 absolute bottom-0 w-auto mb-2'>
              <img src={userIcon} alt='icon' className='size-11 ml-8 cursor-pointer  hover:scale-110 translate-y-1'/>
              <div className='flex justify-center'>
              <img src={leftArrow} alt='icon' className='size-11 cursor-pointer hover:scale-110 translate-y-1'onClick={slideChange(1)}/>
              <img src={slideNum} alt='icon' className='size-11 cursor-pointer  hover:scale-110 translate-y-1'/>
              <img src={rightArrow} alt='icon' className='size-11 cursor-pointer  hover:scale-110 translate-y-1' onClick={slideChange(2)}/>
          </div>
      <img src={infoIcon} alt='icon' className='size-11 mr-8 cursor-pointer  hover:scale-110 translate-y-1'/>
      </div>
    </div>
  )
}

export default App