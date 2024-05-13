import React from 'react';
import '../../Assets/Styles/progressbar.css';

const ProgressBar = ({ progress }) => {
    const cappedProgress = Math.min(progress, 100); // Ensures progress does not exceed 100%
    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${cappedProgress}%` }}></div>
            <div className="progress-text">{`${Math.round(cappedProgress)}% of the project complete`}</div>
        </div>
    );
};

export default ProgressBar;
