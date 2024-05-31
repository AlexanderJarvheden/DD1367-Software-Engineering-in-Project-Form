import React, { useState } from 'react';
import '../../Assets/Styles/PinLibrary.css';
import redcircle from '../../Assets/Icons/redcircle.svg';
import wisdom from '../../Assets/Icons/wisdom.png';
import { useNavigate } from 'react-router-dom';

const FutureScenariosButton = () => {
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        if (clickCount === 1) {
            // Second click action
            navigate("/futurescenarios");
        }
        setClickCount(clickCount + 1);
    };

    return (
        <div className='toolBox' onClick={handleClick}>
            <button style={{background: 'none', border: 'none'}}>
                <span className='researchText'>Future</span>
                <img src={redcircle} alt="" className='circle' />
                <img src={wisdom} alt="" className='icon' />
                <span className='researchText'>Scenarios</span>
            </button>
        </div>
    );
}

export default FutureScenariosButton;