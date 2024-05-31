import React from 'react'
import ToolNavBar from '../Components/ToolNavBar.js'
import '../Assets/Styles/pjMappingWS.css'
import colors from '../Assets/Images/PJMcolors.svg'
import Sidemenu from '../Components/PlannerSidemenu.js'


const PJMWorksheet = () => {
  const navBarStyle = { position: 'fixed', top: '27px', left: '145px', width: '100%' };

  return (
    <div>
      <Sidemenu/>
      <ToolNavBar style={navBarStyle} />
      <div className='introWorksheet' style={{ position: 'fixed', top: '27px', right: '30px' }}>
        <button className='intro'>
          <span className='introTxt'>Intro</span>
        </button>
        <button className='worksheet'>
          <span className='introTxt'>Worksheet</span>
        </button>
      </div>
      <img src={colors} alt='' style={{ position: 'relative', top: '-90px', left: '30px' }} />
      <span className='title' style={{ position: 'relative' }}>Product Journey Mapping</span>
      <div style={{position: 'relative', top: '224px', left: '175px'}}>
        <li className='bulletList'>Does it return to the biosphere?</li>
        <li className='bulletList'>Get reused by someone else?</li>
        <li className='bulletList'>Get repaired?</li>
        <li className='bulletList'>Get remanufactured?</li>
        <li className='bulletList'>Get recycled?</li>
      </div>
      <span className='initialUseCycle' style={{position: 'relative', top: '154px', right: '253px'}}>HOW LONG IS THE INITIAL USE CYCLE?</span>
      <line style={{position: 'relative', top: '231px', right: '144px', width: '422px', height: '1px', background: '#000'}}></line>
      <span className='boxTxt' style={{position: 'relative', top: '371px', left: '156px'}}>WHAT HAPPENS AFTER FIRST USE?</span>
      <span className='boxTxt' style={{position: 'relative', top: '371px', left: '464px'}}>WHAT HAPPENS AFTER SECOND USE?</span>
      <span className='boxTxt' style={{position: 'relative', top: '371px', left: '773px'}}>WHAT HAPPENS AFTER THIRD USE?</span>
      <span className='boxTxt' style={{position: 'relative', top: '371px', left: '1087px'}}>WHAT HAPPENS AFTER X USE?</span>
      <div className='boxes' style={{position: 'relative', top: '397px', left: '149px'}}>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
    </div>
  )


}

export default PJMWorksheet