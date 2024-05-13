import React from 'react'
import '../Assets/Styles/toolNavBar.css'
import openBook from '../Assets/Icons/openBook.svg'
import reduceScreen from '../Assets/Icons/reduceScreen.svg'
import fullscreen from '../Assets/Icons/fullscreen.svg'


const ToolNavBar = (props) => {
  return (
    <div style={props.style}>

      <div className='container'>
        <button className='button'>
          <img src={openBook} alt='' style={{
            width: '24px',
            height: '24px'
          }} />
          <span className='buttonText'>Instructions</span>
        </button>
        <button className='button'>
          <img src={reduceScreen} alt='' style={{
            width: '24px',
            height: '24px'
          }} />
          <span className='buttonText'>Condense planner</span>
        </button>
        <button className='button'>
          <img src={fullscreen} alt='' />
          <span className='buttonText'>Enlarge planner</span>
        </button>
      </div>
    </div>
  )
}
export default ToolNavBar