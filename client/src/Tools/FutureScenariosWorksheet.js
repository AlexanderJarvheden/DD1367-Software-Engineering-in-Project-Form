import React, { useState } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import '../Assets/Styles/futureScenariosWS.css';
import ToolNavBar from '../Components/ToolNavBar.js';
import Arrow from '../Assets/Images/downArrow.svg';
import colors from '../Assets/Images/PJMcolors.svg';
import graph from '../Assets/Images/graphFUWS.svg';

import Sidemenu from '../Components/PlannerSidemenu.js'

const FutureScenariosWorksheet = () => {
    const navBarStyle = { position: 'fixed', top: '27px', left: '145px' };

    return (
        <div>
            <Sidemenu/>
            <ToolNavBar style={navBarStyle} />
            <span className='headerText'>Future scenarios</span>
            <span className='text'>Future scenarios is about forcing decision makers to consider futures that are outside of their mental models.</span>
            <span className='diagramText' style={{ top: '271px' }}>MOST LIKELY</span>
            <img src={Arrow} alt='' style={{ position: 'absolute', top: '309px', left: '196px', height: '400px' }} />
            <span className='diagramText' style={{ top: '727px' }}>LEAST LIKELY</span>
            <span className='exerciseNumber' style={{ top: '181px' }}>1.</span>
            <span className='exerciseDescription' style={{ top: '237px' }}>Start with a PREMORTEM exercise</span>
            <span className='exerciseDescription' style={{ top: '260px', fontWeight: '300' }}>
                Brainstorm as many scenarios as you can, using the post-its.
                Group them and rank these ideas loosely in terms of likelihood.
                Then pick an idea that seems worth exploring further.</span>
            <span className='exerciseNumber' style={{ top: '499px' }}>2.</span>
            <span className='exerciseDescription' style={{ top: '555px' }}>Take an idea to the FUTURES WHEEL</span>
            <span className='exerciseDescription' style={{ top: '580px', fontWeight: '300' }}>
                Write the idea in the CHANGE circle, it could be an event, trend, problem, or possible solution.
                Identify the effects of this change, the direct consequences.
                Identify the secondary effects of the direct consequences, etc.</span>
            <img src={colors} alt='' style={{ position: 'fixed', top: '100px', right: '-350px' }} />
            <div className='graphContainer'>
                <img src={graph} alt='' />
            </div>
        </div>
    );
}

export default FutureScenariosWorksheet;
