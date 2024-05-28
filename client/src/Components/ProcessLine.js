import React, { useState } from 'react';
import '../Assets/Styles/ProcessLine.css';
import PinLibraryOfTools from './PinLibraryOfTools';

const ProcessLine = () => {
  const [circles, setCircles] = useState([]);
  const [showPinLibrary, setShowPinLibrary] = useState(false);

  const handleAddCircle = () => {
    if (circles.length < 10) {
      setCircles([...circles, { id: circles.length + 1 }]);
      setShowPinLibrary(true);
    }
  };

  const closePinLibrary = () => {
    setShowPinLibrary(false);
  };

  return (
    <div className="process-line-container">
      <div className="process-line-header">
        <div className="process-line-text-wrapper">
          <span className="process-line-text">START</span>
        </div>
        <div className="process-line-text-wrapper">
          <span className="process-line-text">END</span>
        </div>
      </div>
      <div className="process-line">
        {circles.map((circle, index) => (
          <div key={index} className="addCircle purple-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
              <circle cx="22.5" cy="22.5" r="21.5" />
            </svg>
          </div>
        ))}
        {circles.length < 10 && (
          <div className="process-line-add-wrapper" onClick={handleAddCircle}>
            <div className="process-line-add">
              <span className="add-icon">+</span>
            </div>
            <span className="add-text">ADD NEW</span>
          </div>
        )}
        {circles.length === 10 && (
        <>
          <div className="curved-section"></div>
          <div className="straight-section"></div>
        </>
        )}
      </div>

      <div className="circle-container">
        <div className="addCircle purple-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
            <circle cx="22.5" cy="22.5" r="21.5" />
          </svg>
          <span className="circle-text">ACTIVITY DONE</span>
        </div>
        <div className="addCircle red-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
            <circle cx="22.5" cy="22.5" r="21.5" />
          </svg>
          <span className="circle-text">RESEARCH</span>
        </div>
        <div className="addCircle yellow-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
            <circle cx="22.5" cy="22.5" r="21.5" />
          </svg>
          <span className="circle-text">IDEATION</span>
        </div>
        <div className="addCircle blue-circle">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
            <circle cx="22.5" cy="22.5" r="21.5" />
          </svg>
          <span className="circle-text">EVALUATION</span>
        </div>
      </div>
      <div className="bottom-bar"></div>
      
      {showPinLibrary && (
        <div className="overlay">
          <PinLibraryOfTools onClose={closePinLibrary} />
        </div>
      )}
    </div>
  );
};

export default ProcessLine;
