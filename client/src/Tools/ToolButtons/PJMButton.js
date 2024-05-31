import {React, useState} from 'react'
import '../../Assets/Styles/PinLibrary.css'
import turquoisecircle from '../../Assets/Icons/turquoisecircle.svg'
import measure from '../../Assets/Icons/measurement.png'
import { useNavigate } from 'react-router-dom';


const PJMButton = () => {
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        if (clickCount === 1) {
            // Second click action
            navigate("/pjmworksheet");
        }
        setClickCount(clickCount + 1);
    };

    return (

        <div className='toolBox' onClick={handleClick}>
            <button style={{background: 'none', border: 'none'}}>
                <span className='implementationText'>Product</span>
                <img src={turquoisecircle} alt="" className='circle' />
                <img src={measure} alt="" className='icon' />
                <span className='implementationText' style={{ fontSize: '8px' }}>Journey Map</span>
            </button>

        </div>
    )
}

export default PJMButton;