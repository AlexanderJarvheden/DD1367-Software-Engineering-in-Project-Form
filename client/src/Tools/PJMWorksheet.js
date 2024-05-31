import React from 'react'
import ToolNavBar from '../Components/ToolNavBar.js'
import '../Assets/Styles/pjMappingWS.css'
import colors from '../Assets/Images/PJMcolors.svg'
import Sidemenu from '../Components/PlannerSidemenu.js'
import zIndex from '@mui/material/styles/zIndex.js'


const PJMWorksheet = () => {
  const navBarStyle = { position: 'fixed', top: '27px', left: '145px' };

  return (
    <div>
      <Sidemenu />
      <ToolNavBar style={navBarStyle} />
      {/* <span className='headerText'>Future scenarios</span>
      <span className='text'>Future scenarios is about forcing decision makers to consider futures that are outside of their mental models.</span>
      <span className='diagramText' style={{ top: '271px' }}>MOST LIKELY</span>
      <img src={Arrow} alt='' style={{ position: 'absolute', top: '309px', left: '196px' }} />
      <span className='diagramText' style={{ top: '877px' }}>LEAST LIKELY</span>
      <span className='exerciseNumber' style={{ top: '281px' }}>1.</span>
      <span className='exerciseDescription' style={{ top: '337px' }}>Start with a PREMORTEM exercise</span>
      <span className='exerciseDescription' style={{ top: '360px', fontWeight: '300' }}>
        Brainstorm as many scenarios as you can, using the post-its.
        Group them and rank these ideas loosely in terms of likelihood.
        Then pick an idea that seems worth exploring further.</span>
      <span className='exerciseNumber' style={{ top: '799px' }}>2.</span>
      <span className='exerciseDescription' style={{ top: '855px' }}>Take an idea to the FUTURES WHEEL</span>
      <span className='exerciseDescription' style={{ top: '880px', fontWeight: '300' }}>
        Write the idea in the CHANGE circle, it could be an event, trend, problem, or possible solution.
        Identify the effects of this change, the direct consequences.
        Identify the secondary effects of the direct consequences, etc.</span>
      <img src={colors} alt='' style={{ position: 'fixed', top: '200px', right: '-350px' }} />
      <div className='graphContainer'>
        <img src={graph} alt='' />
      </div> */}
      {/* <img src={colors} alt='' style={{ position: 'absolute', top: '-90px', left: '60px' }} /> */}
      <span className='PJMtitle' >Product Journey Mapping</span>
      <div className='bulletList'>
        <li >Does it return to the biosphere?</li>
        <li >Get reused by someone else?</li>
        <li >Get repaired?</li>
        <li >Get remanufactured?</li>
        <li >Get recycled?</li>
      </div>
      <div>
        <span className='initialUseCycle' >HOW LONG IS THE INITIAL USE CYCLE?</span>
        <line style={{ position: 'absolute', top: '231px', right: '144px', width: '422px', height: '1px', background: '#000' }}></line>
      </div>

      <span className='boxTxt' style={{ position: 'absolute', top: '371px', left: '156px' }}>WHAT HAPPENS AFTER FIRST USE?</span>
      <span className='boxTxt' style={{ position: 'absolute', top: '371px', left: '464px' }}>WHAT HAPPENS AFTER SECOND USE?</span>
      <span className='boxTxt' style={{ position: 'absolute', top: '371px', left: '773px' }}>WHAT HAPPENS AFTER THIRD USE?</span>
      <span className='boxTxt' style={{ position: 'absolute', top: '371px', left: '1087px' }}>WHAT HAPPENS AFTER X USE?</span>
      <div className='boxes' style={{ position: 'absolute', top: '397px', left: '149px' }}>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
    </div>
  )


}

export default PJMWorksheet