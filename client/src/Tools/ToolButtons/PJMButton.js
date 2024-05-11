import React from 'react'
import '../../Assets/Styles/PinLibrary.css'
import turquoisecircle from '../../Assets/Icons/turquoisecircle.svg'
import measure from '../../Assets/Icons/measurement.png'


const PJMButton = () => {
    return (

        <div className='toolBox'>
            <button style={{background: 'none', border: 'none'}}>
                <span className='implementationText'>Product</span>
                <img src={turquoisecircle} alt="" className='circle' />
                <img src={measure} alt="" className='icon' />
                <span className='implementationText' style={{ fontSize: '8px' }}>Journey Map</span>
            </button>

        </div>
    )
}

export default PJMButton