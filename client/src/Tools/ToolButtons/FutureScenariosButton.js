import React from 'react'
import '../../Assets/Styles/PinLibrary.css'
import redcircle from '../../Assets/Icons/redcircle.svg'
import wisdom from '../../Assets/Icons/wisdom.png'
import {useNavigate} from 'react-router-dom';




const PJMButton = () => {
    const navigate = useNavigate();
    return (
        <div className='toolBox'onClick={()=> navigate("/fws")}>
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