import React, { useState } from 'react';
import '../Assets/Styles/ProcessLine.css';
import PinLibraryOfTools from './PinLibraryOfTools';

const ProcessLine = () => {
  const [steps, setSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(null); // Track the active step for tool selection
  const [showLibrary, setShowLibrary] = useState(false); // State to control visibility of the tool library

  const addStep = () => {
    // Immediately calculate next step ID based on current state
    setSteps(prevSteps => {
      const nextStepId = prevSteps.length + 1;
      const newStep = {
        id: nextStepId,
        name: `Step ${nextStepId}`,
        tool: ''
      };
      setActiveStep(nextStepId); // Set active step here to ensure it's in sync
      setShowLibrary(true);
      return [...prevSteps, newStep];
    });
  };

  const handleToolSelect = (toolName) => {
    const updatedSteps = steps.map(step => {
      if (step.id === activeStep) return { ...step, tool: toolName, name: '' }; // Clear the name when a tool is selected
      return step;
    });
    setSteps(updatedSteps);
    setActiveStep(null);
    setShowLibrary(false);
  };

  return (
    <div className="process-container">
      {!showLibrary && steps.map((step, index) => (
        <div key={step.id} className="process-step" onClick={() => {
          setActiveStep(step.id);
          setShowLibrary(true);
        }} style={{
          transform: `translate(${(index % 10) * 100}px, ${Math.floor(index / 10) * 100}px)`
        }}>
          {step.name}: {step.tool || 'Click to select a tool'}
        </div>
      ))}
      <button className="process-add-btn" onClick={addStep} style={{
        transform: `translate(${(steps.length % 10) * 100}px, ${Math.floor(steps.length / 10) * 100}px)`
      }}>
        +
      </button>
      {showLibrary && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)' }}>
          <PinLibraryOfTools onSelectTool={handleToolSelect} />
        </div>
      )}
    </div>
  );
};

export default ProcessLine;
