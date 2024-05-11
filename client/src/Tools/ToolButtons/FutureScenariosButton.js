import React from 'react'
import '../../Assets/Styles/PinLibrary.css'
import redcircle from '../../Assets/Icons/redcircle.svg'
import wisdom from '../../Assets/Icons/wisdom.png'



const PJMButton = () => {
    return (
        <div className='toolBox'>
            <button style={{background: 'none', border: 'none'}}>
                <span className='researchText'>Future</span>
                <img src={redcircle} alt="" className='circle' />
                <img src={wisdom} alt="" className='icon' />
                <span className='researchText'>Scenarios</span>
            </button>
        </div>
    )
}

export default PJMButton