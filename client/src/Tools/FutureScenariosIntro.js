import React from 'react'
import '../Assets/Styles/introFutureScenarios.css'
import description from '../Assets/Images/FutureScenarios.svg'
import FutureScenarioButton from './ToolButtons/FutureScenariosButton.js'
import star from '../Assets/Icons/star.svg'
import clock from '../Assets/Icons/clock.svg'
import group from '../Assets/Icons/group.svg'
import termometer from '../Assets/Icons/termometer.svg'

import instructionImage from '../Assets/Images/futureScenariosImage.png'
import thinker from '../Assets/Images/thinker.png'

import Buttons from '../Components/DashboardPage.js'

const FutureScenariosIntro = () => {
    return (
        <div>
            <Buttons/>
            <div style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', display: 'flex' }}>
                <div className='headerFS'>
                    <div className='FSicon'>
                        <FutureScenarioButton className='FSicon' />
                    </div>
                    <div className='secondItem'>
                        <span className='researchTextHeader'>RESEARCH</span>
                        <span className='futureScenariosText'>Future Scenarios</span>
                    </div>
                    <div className='innerHeaderFrame'>
                        <div className='recommendedFor'>
                            <div className='headerIcon'><img src={star} alt='' /></div>
                            <div style={{ width: 'max-content' }}>
                                <span className='greyText'>RECOMMENDED FOR<br /></span>
                                <span className='blackText'>Consultants + clients</span>
                            </div>
                        </div>
                        <div className='recommendedFor'>
                            <div className='headerIcon'><img src={clock} alt='' /></div>
                            <div>
                                <span className='greyText'>TIME FRAME <br /></span>
                                <span className='blackText'>30-60 min</span>
                            </div>
                        </div>
                        <div className='recommendedFor'>
                            <div className='headerIcon'><img src={group} alt='' /></div>
                            <div>
                                <span className='greyText'>GROUP SIZE <br /></span>
                                <span className='blackText'>3-8</span>
                            </div>
                        </div>
                        <div className='recommendedFor'>
                            <div className='headerIcon'><img src={termometer} alt='' /></div>
                            <div>
                                <span className='greyText'>EFFORT LEVEL<br /></span>
                                <span className='blackText'>High</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='descriptionContainer' style={{ position: 'relative', top: '150px' }}>
                    <div className='topLeft'>
                        <span className='smallText'>FUTURE SCENARIOS</span>
                        <span className='descriptionTitle'>
                            A great method for predicting the future of your product and the market
                        </span>
                        <span className='descriptionToolText'>
                            Future scenarios is about forcing decision makers to consider futures that are outside of their mental models. They should leave leaders considering a world of future possibilities vastly different to the usual variations generally considered through planning processes.
                        </span>
                    </div>
                    <div className='descriptionToolContainer'>
                        <span className='topLeftText'>How to</span>
                        <div className='instructionsContainer'>
                            <div className='instructionRow'>
                                <span className='instructionNumber'>1.</span>
                                <div className='instructionRowText'>
                                    <span className='instructionRowTitle'>
                                        Start with a PREMORTEM exercise
                                    </span>
                                    <span className='instructionRowDescription'>
                                        "It is ten years in the future and your business is now out of business. What has gone wrong?". Ask yourself and your team this question, brainstorm as many scenarios as you can. Group them and rank these ideas loosely in terms of likelihood, then pick an idea that seems worth exploring further.
                                    </span>
                                </div>
                            </div>
                            <div className='instructionRow'>
                                <span className='instructionNumber'>2.</span>
                                <div className='instructionRowText'>
                                    <span className='instructionRowTitle'>
                                        Take an idea to the FUTURES WHEEL                            </span>
                                    <span className='instructionRowDescription'>
                                        Write the idea in the CHANGE circle, it could be an event, trend, problem, or possible solution. Identify the effects of this change, the direct consequences.
                                        Identify the secondary effects of the direct consequences, etc.
                                    </span>
                                </div>
                            </div>
                            <div className='instructionRow'>
                                <span className='instructionNumber'>3.</span>
                                <div className='instructionRowText'>
                                    <span className='instructionRowTitle'>
                                        Use the findings in another activity                            </span>
                                    <span className='instructionRowDescription'>
                                        Such as X, X or X. (Links)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={instructionImage} alt='' style={{ width: '1195px', height: '636px' }} />
                    <img src={thinker} alt='' style={{ position: 'absolute', top: '18px', right: '0px', width: '436px', height: '413.701px' }} />
                </div>

            </div>
        </div>
    )
}

export default FutureScenariosIntro