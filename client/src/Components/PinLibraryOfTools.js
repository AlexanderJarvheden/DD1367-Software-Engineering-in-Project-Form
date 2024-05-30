import React from 'react';
import '../Assets/Styles/PinLibrary.css';
import close from '../Assets/Icons/close.svg';
import redcircle from '../Assets/Icons/redcircle.svg';
import yellowcircle from '../Assets/Icons/yellowcircle.svg';
import box from '../Assets/Icons/box.svg';
import book from '../Assets/Icons/book.svg';
import cbm from '../Assets/Icons/cbm.svg';
import joystick from '../Assets/Icons/joystick.svg';
import dart from '../Assets/Icons/dart.svg';
import chat from '../Assets/Icons/chat.svg';
import experiment from '../Assets/Icons/experiment.svg';
import ghost from '../Assets/Icons/ghost.png';
import questionmark from '../Assets/Icons/questionmark.svg';
import lamp from '../Assets/Icons/lamp.svg';
import infinity from '../Assets/Icons/infinity.svg';
import checkbox from '../Assets/Icons/checkbox.svg';
import brain from '../Assets/Icons/brain.png';
import wisdom from '../Assets/Icons/wisdom.png';
import fire from '../Assets/Icons/fire.svg';
import doublethinkers from '../Assets/Icons/doublethinkers.png';
import trend from '../Assets/Icons/trend.png';
import detective from '../Assets/Icons/detective.png';
import brainwaves from '../Assets/Icons/brainwaves.png';
import molecule from '../Assets/Icons/molecule.png';
import hat from '../Assets/Icons/hat.png';
import biobrain from '../Assets/Icons/biobrain.png';
import eight from '../Assets/Icons/8.png';
import path from '../Assets/Icons/path.png';
import board from '../Assets/Icons/board.png';
import combo from '../Assets/Icons/combo.png';
import thumbdown from '../Assets/Icons/thumbdown.png';
import turquoisecircle from '../Assets/Icons/turquoisecircle.svg';
import DrawingMap from '../Assets/Icons/DrawingMap.png';
import measure from '../Assets/Icons/measurement.png';
import darts from '../Assets/Icons/darts.png';

import PJMButton from '../Tools/ToolButtons/PJMButton.js';
import FutureScenariosButton from '../Tools/ToolButtons/FutureScenariosButton.js';



const PinLibraryOfTools = ({ onClose, onSelectTool }) => {
  const handleToolClick = (ToolComponent) => {
    onSelectTool(ToolComponent);
  };
  return (
    <div className='libraryContainer'>
      <button className='closeButton' onClick={onClose}>
        <img src={close} alt="Close" />
        <span className='closeText'>Close</span>
      </button>
      <div className='pinLibraryText'>Pin library</div>
      <div className='breadText'>Click to choose, long press for more description of each tool</div>

      <div className='libraryContent'>
        <div className='categoriesContainer'>
          <div className='categoryText'>Research</div>
          <div className='researchContainer'>
            <div className='iconRow'>
              <div className='toolBox'>
                <span className='researchText'>The</span>
                <button className='buttonContainer'>
                  <img src={redcircle} alt="" className='circle' />
                  <img src={box} alt="" className='icon' />
                </button>
                <span className='researchText'>Basics</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Intro To</span>
                <button className='buttonContainer'>
                  <img src={redcircle} alt="" className='circle' />
                  <img src={book} alt="" className='icon' />
                </button>
                <span className='researchText'>Circularity</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>CBM</span>
                <button className='buttonContainer'>
                  <img src={redcircle} alt="" className='circle' />
                  <img src={cbm} alt="" className='icon' />
                </button>
                <span className='researchText'>Examples</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Applying</span>
                <button className='buttonContainer'>
                  <img src={redcircle} alt="" className='circle' />
                  <img src={joystick} alt="" className='icon' />
                </button>
                <span className='researchText'>CBM's</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Thinking</span>
                <img src={redcircle} alt="" className='circle' />
                <img src={brain} alt="" className='icon' />
                <span className='researchText'>Activitation</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Hopes &</span>
                <button className='buttonContainer'>
                  <img src={redcircle} alt="" className='circle' />
                  <img src={ghost} alt="" className='icon' />
                </button>
                <span className='researchText'>Fears</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Business</span>
                <button className='buttonContainer'>
                  <img src={redcircle} alt="" className='circle' />
                  <img src={cbm} alt="" className='icon' />
                </button>
                <span className='researchText'>Model Canvas</span>
              </div>
            </div>
            <div className='iconRow'>
              <div className='toolBox'>
                <span className='researchText' style={{ fontSize: '9px' }}>Stakeholder</span>
                <button className='buttonContainer'>
                  <img src={redcircle} alt="" className='circle' />
                  <img src={dart} alt="" className='icon' />
                </button>
                <span className='researchText'>Mapping</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Client</span>
                <button className='buttonContainer'>
                  <img src={redcircle} alt="" className='circle' />
                  <img src={chat} alt="" className='icon' />
                </button>
                <span className='researchText'>Interviews</span>
              </div>
              <FutureScenariosButton />
              <div className='toolBox'>
                <span className='researchText'>Competitor</span>
                <img src={redcircle} alt="" className='circle' />
                <img src={doublethinkers} alt="" className='icon' />
                <span className='researchText'>Analysis</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Trend</span>
                <img src={redcircle} alt="" className='circle' />
                <img src={trend} alt="" className='icon' />
                <span className='researchText'>Analysis</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Interest</span>
                <img src={redcircle} alt="" className='circle' />
                <img src={brainwaves} alt="" className='icon' />
                <span className='researchText'>Influence</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Hot</span>
                <img src={redcircle} alt="" className='circle' />
                <img src={fire} alt="" className='icon' />
                <span className='researchText'>Spots</span>
              </div>
            </div>
            <div className='iconRow'>
              <div className='toolBox'>
                <span className='researchText'>Quick</span>
                <img src={redcircle} alt="" className='circle' />
                <img src={experiment} alt="" className='icon' />
                <span className='researchText'>LCA</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Clustering</span>
                <img src={redcircle} alt="" className='circle' />
                <img src={molecule} alt="" className='icon' />
                <span className='researchText'>insights</span>
              </div>
              <div className='toolBox'>
                <span className='researchText'>Company</span>
                <img src={redcircle} alt="" className='circle' />
                <img src={detective} alt="" className='icon' />
                <span className='researchText'>diagnosis</span>
              </div>
            </div>
          </div>

          <div className='ideationContainer'>
            <div className='categoryText'>Ideation</div>
            <div className='iconRow'>
              <div className='toolBox'>
                <span className='ideationText'>How</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={questionmark} alt="" className='icon' />
                <span className='ideationText'>might we</span>
              </div>
              <div className='toolBox'>
                <span className='ideationText'>6 thinking</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={hat} alt="" className='icon' />
                <span className='ideationText'>hats</span>
              </div>
              <div className='toolBox'>
                <span className='ideationText'>Brain</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={biobrain} alt="" className='icon' />
                <span className='ideationText'>writing</span>
              </div>
              <div className='toolBox'>
                <span className='ideationText'></span>
                <img src={yellowcircle} alt="" className='circle' />
                <span className='eightIcon'>8</span>
                <span className='ideationText'>Crazy 8</span>
              </div>
              <div className='toolBox'>
                <span className='ideationText'>worst</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={thumbdown} alt="" className='icon' />
                <span className='ideationText'>ideas</span>
              </div>
              <div className='toolBox'>
                <span className='ideationText'>circular</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={path} alt="" className='icon' />
                <span className='ideationText'>journey</span>
              </div>
              <div className='toolBox'>
                <span className='ideationText'>nübholtz</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={board} alt="" className='icon' />
                <span className='ideationText'>canvas</span>
              </div>
            </div>
            <div className='iconRow'>
              <div className='toolBox'>
                <span className='ideationText'>CE design</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={lamp} alt="" className='icon' />
                <span className='ideationText'>ideation</span>
              </div>
              <div className='toolBox'>
                <span className='ideationText'>multiple</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={infinity} alt="" className='icon' />
                <span className='ideationText'>use-cycles</span>
              </div>
              <div className='toolBox'>
                <span className='ideationText'>ideas</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={combo} alt="" className='icon' />
                <span className='ideationText'>capture</span>
              </div>
              <div className='toolBox'>
                <span className='ideationText'>Clustering</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={molecule} alt="" className='icon' />
                <span className='ideationText'>ideas</span>
              </div>
              <div className='toolBox'>
                <span className='ideationText'>concept</span>
                <img src={yellowcircle} alt="" className='circle' />
                <img src={checkbox} alt="" className='icon' />
                <span className='ideationText'>selection</span>
              </div>
            </div>
          </div>
          <div className='ideationContainer'>
            <div className='categoryText'>Implementation</div>
            <div className='iconRow'>
              <div className='toolBox'>
                <span className='implementationText'>Mid-Way</span>
                <img src={turquoisecircle} alt="" className='circle' />
                <img src={DrawingMap} alt="" className='icon' />
                <span className='implementationText'>Evaluation</span>
              </div>
              <PJMButton />
              <div className='toolBox'>
                <span className='implementationText'>Design</span>
                <img src={turquoisecircle} alt="" className='circle' />
                <img src={darts} alt="" className='icon' />
                <span className='implementationText'>Evaluation</span>
              </div>
              <div className='toolBox'>
                <span className='implementationText'>Effort/</span>
                <img src={turquoisecircle} alt="" className='circle' />
                <img src={DrawingMap} alt="" className='icon' />
                <span className='implementationText'>Impact</span>
              </div>
              <div className='toolBox'>
                <span className='implementationText'>Service</span>
                <img src={turquoisecircle} alt="" className='circle' />
                <img src={DrawingMap} alt="" className='icon' />
                <span className='implementationText'>Blueprint</span>
              </div>
            </div>

          </div>
          <div className='ideationContainer'>
            <div className='categoryText'>Snygga knappar</div>
            <div className='iconRow'>
              <div className='toolBox' onClick={() => handleToolClick(PJMButton)}>
                <PJMButton />
              </div>
              <div className='toolBox' onClick={() => handleToolClick(FutureScenariosButton)}>
                <FutureScenariosButton />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PinLibraryOfTools;