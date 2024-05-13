import React from 'react'
import '../Assets/Styles/futureScenariosWS.css'
import ToolNavBar from '../Components/ToolNavBar.js'
import Arrow from '../Assets/Images/downArrow.svg'
import colors from '../Assets/Images/PJMcolors.svg'
import graph from '../Assets/Images/graphFUWS.svg'


const FutureScenariosWorksheet = () => {
    const navBarStyle = { position: 'fixed', top: '27px', left: '145px', width: '100%' };

    return (
        <div>
            <ToolNavBar style={navBarStyle} />
            <div className='introWorksheet' style={{ position: 'fixed', top: '27px', right: '30px' }}>
                <button className='intro'>
                    <span className='introTxt'>Intro</span>
                </button>
                <button className='worksheet'>
                    <span className='introTxt'>Worksheet</span>
                </button>
            </div>
            <span className='headerText'>Future scenarios</span>
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
                </div>

        </div>
    )
}

export default FutureScenariosWorksheet