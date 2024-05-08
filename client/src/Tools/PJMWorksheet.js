import React, { useEffect, useState } from 'react';
import Konva from 'konva';

import ToolNavBar from '../Components/ToolNavBar.js';
import colors from '../Assets/Images/PJMcolors.svg';
import '../Assets/Styles/pjMappingWS.css';

const PJMWorksheet = () => {
  const navBarStyle = { position: 'fixed', top: '27px', left: '145px', width: '100%' };

  const [textCounter, setTextCounter] = useState(0);

  const initializeKonva = () => {
    const stage = new Konva.Stage({
      container: 'container',
      width: 340,
      height: 300,
    });

    const layer = new Konva.Layer();

    const simpleText = new Konva.Text({
      x: stage.width() / 2,
      y: 15,
      text: 'Simple Text',
      fontSize: 30,
      fontFamily: 'Calibri',
      fill: 'green',
    });

    simpleText.offsetX(simpleText.width() / 2);

    const complexText = new Konva.Text({
      x: 20,
      y: 60,
      text: "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
      fontSize: 18,
      fontFamily: 'Calibri',
      fill: '#555',
      width: 300,
      padding: 20,
      align: 'center',
    });

    const rect = new Konva.Rect({
      x: 20,
      y: 60,
      stroke: '#555',
      strokeWidth: 5,
      fill: '#ddd',
      width: 300,
      height: complexText.height(),
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffsetX: 10,
      shadowOffsetY: 10,
      shadowOpacity: 0.2,
      cornerRadius: 10,
    });

    layer.add(simpleText);
    layer.add(rect);
    layer.add(complexText);

    stage.add(layer);
  };

  const handleSpawnKonva = () => {
    initializeKonva();
    setTextCounter(textCounter + 1);
  };

  useEffect(() => {
    initializeKonva();
  }, []);

  return (
    <div>
      <ToolNavBar style={navBarStyle} />
      <div className='introWorksheet' style={{ position: 'fixed', top: '27px', right: '30px' }}>
        <button className='intro'>
          <span className='introTxt'>Intro</span>
        </button>
        <button className='worksheet'>
          <span className='introTxt'>Worksheet</span>
        </button>
      </div>
      <img src={colors} alt='' style={{ position: 'fixed', top: '-90px', left: '30px' }} />
      <span className='title' style={{ position: 'absolute' }}>Product Journey Mapping</span>
      <div id="container"></div>
      <div style={{position: 'absolute', top: '224px', left: '175px'}}>
        <li className='bulletList'>Does it return to the biosphere?</li>
        <li className='bulletList'>Get reused by someone else?</li>
        <li className='bulletList'>Get repaired?</li>
        <li className='bulletList'>Get remanufactured?</li>
        <li className='bulletList'>Get recycled?</li>
      </div>
      <span className='initialUseCycle' style={{position: 'absolute', top: '154px', right: '253px'}}>HOW LONG IS THE INITIAL USE CYCLE?</span>
      <line style={{position: 'absolute', top: '231px', right: '144px', width: '422px', height: '1px', background: '#000'}}></line>
      <span className='boxTxt' style={{position: 'absolute', top: '371px', left: '156px'}}>WHAT HAPPENS AFTER FIRST USE?</span>
      <span className='boxTxt' style={{position: 'absolute', top: '371px', left: '464px'}}>WHAT HAPPENS AFTER SECOND USE?</span>
      <span className='boxTxt' style={{position: 'absolute', top: '371px', left: '773px'}}>WHAT HAPPENS AFTER THIRD USE?</span>
      <span className='boxTxt' style={{position: 'absolute', top: '371px', left: '1087px'}}>WHAT HAPPENS AFTER X USE?</span>
      <div className='boxes' style={{position: 'absolute', top: '397px', left: '149px'}}>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
      </div>
      <button onClick={handleSpawnKonva} style={{ position: 'absolute', top: '20px', left: '20px' }}>Spawn Konva Text</button>
      <p>Total spawned text boxes: {textCounter}</p>
    </div>
  );
};

export default PJMWorksheet;