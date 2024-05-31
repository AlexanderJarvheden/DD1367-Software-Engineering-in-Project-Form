import React, { useState } from 'react';
import FutureScenariosIntro from './FutureScenariosIntro';
import FutureScenariosWorksheet from './FutureScenariosWorksheet';
import '../Assets/Styles/introFutureScenarios.css';

const FutureScenarios = () => {
    const [view, setView] = useState('intro'); // Manage view state

    return (
        <div>
            <div className='introWorksheet'>
                <button className={`intro ${view === 'intro' ? 'active' : ''}`} onClick={() => setView('intro')}>
                    <span className='introTxt'>Intro</span>
                </button>
                <button className={`worksheet ${view === 'worksheet' ? 'active' : ''}`} onClick={() => setView('worksheet')}>
                    <span className='introTxt'>Worksheet</span>
                </button>
            </div>
            {view === 'intro' && <FutureScenariosIntro />}
            {view === 'worksheet' && <FutureScenariosWorksheet />}
        </div>
    );
};

export default FutureScenarios;
