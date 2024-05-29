import React, { useState } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import '../Assets/Styles/futureScenariosWS.css';
import ToolNavBar from '../Components/ToolNavBar.js';
import Arrow from '../Assets/Images/downArrow.svg';
import colors from '../Assets/Images/PJMcolors.svg';
import graph from '../Assets/Images/graphFUWS.svg';

import Sidemenu from '../Components/PlannerSidemenu.js'

const FutureScenariosWorksheet = () => {
    const navBarStyle = { position: 'fixed', top: '27px', left: '145px', width: '100%' };
    // const [texts, setTexts] = useState([]);
    // const [selectedTextId, setSelectedTextId] = useState(null);
    // const [newTextValue, setNewTextValue] = useState("");

    // const handleTextDblClick = (text) => {
    //     setSelectedTextId(text.id);
    //     setNewTextValue(text.text);
    // };

    // const handleInputChange = (e) => {
    //     setNewTextValue(e.target.value);
    // };

    // const handleInputBlur = () => {
    //     const updatedTexts = texts.map(t => {
    //         if (t.id === selectedTextId) {
    //             return {
    //                 ...t,
    //                 text: newTextValue,
    //             };
    //         }
    //         return t;
    //     });
    //     setTexts(updatedTexts);
    //     setSelectedTextId(null);
    // };

    // const renderInputField = () => {
    //     if (selectedTextId) {
    //         const textObj = texts.find(t => t.id === selectedTextId);
    //         if (textObj) {
    //             return (
    //                 <input
    //                     type="text"
    //                     value={newTextValue}
    //                     onChange={handleInputChange}
    //                     onBlur={handleInputBlur}
    //                     style={{
    //                         position: 'absolute',
    //                         top: textObj.y,
    //                         left: textObj.x,
    //                         fontSize: '18px',
    //                         border: '1px solid black',
    //                     }}
    //                     autoFocus
    //                 />
    //             );
    //         }
    //     }
    //     return null;
    // };
    
    
    
    
    // const handleAddTextClick = () => {
    //     const newText = {
    //         x: 100,  // Starting x position in the canvas
    //         y: 100,  // Starting y position in the canvas
    //         text: "New Text",  // Default text content
    //         id: `text_${texts.length}`,  // Unique ID for each text
    //     };
    //     setTexts([...texts, newText]);
    // };

    return (
        <div>
            <Sidemenu/>
            <ToolNavBar style={navBarStyle} />
            <div className='introWorksheet' style={{ position: 'fixed', top: '27px', right: '30px' }}>
                <button className='intro'>
                    <span className='introTxt'>Intro</span>
                </button>
                <button className='worksheet'>
                    <span className='introTxt'>Worksheet</span>
                </button>
            </div>
            <span className='headerText'>Future scenarios</span>
            <span className='text'>Future scenarios is about forcing decision makers to consider futures that are outside of their mental models.</span>
            <span className='diagramText' style={{ top: '271px' }}>MOST LIKELY</span>
            <img src={Arrow} alt='' style={{ position: 'absolute', top: '309px', left: '196px' }} />
            <span className='diagramText' style={{ top: '877px' }}>LEAST LIKELY</span>
            <span className='exerciseNumber' style={{ top: '281px' }}>1.</span>
            <span className='exerciseDescription' style={{ top: '337px' }}>Start with a PREMORTEM exercise</span>
            <span className='exerciseDescription' style={{ top: '360px', fontWeight: '300' }}>
                Brainstorm as many scenarios as you can, using the post-its.
                Group them and rank these ideas loosely in terms of likelihood.
                Then pick an idea that seems worth exploring further.</span>
            <span className='exerciseNumber' style={{ top: '799px' }}>2.</span>
            <span className='exerciseDescription' style={{ top: '855px' }}>Take an idea to the FUTURES WHEEL</span>
            <span className='exerciseDescription' style={{ top: '880px', fontWeight: '300' }}>
                Write the idea in the CHANGE circle, it could be an event, trend, problem, or possible solution.
                Identify the effects of this change, the direct consequences.
                Identify the secondary effects of the direct consequences, etc.</span>
            <img src={colors} alt='' style={{ position: 'fixed', top: '200px', right: '-350px' }} />
            <div className='graphContainer'>
                <img src={graph} alt='' />
            </div>

            {/* Konva Canvas */}
            {/* <div style={{ 
                position: 'absolute', 
                top: '25%', 
                left: '10%', 
                width: '1200px', 
                height: '560px', 
                border: '1px solid black' 
            }}>             
                
                {/* <Stage width={1200} height={560}> 
                <Stage >
                    <Layer>
                        {texts.map((text) => (
                            <Text
                                key={text.id}
                                x={text.x}
                                y={text.y}
                                text={text.text}
                                draggable
                                fontSize={18}
                                onDblClick={() => handleTextDblClick(text)}
                                onDragEnd={(e) => {
                                    const updatedTexts = texts.map(t => {
                                        if (t.id === text.id) {
                                            return {
                                                ...t,
                                                x: e.target.x(),
                                                y: e.target.y(),
                                            };
                                        }
                                        return t;
                                    });
                                    setTexts(updatedTexts);
                                }}
                            />
                        ))}
                    </Layer>
                </Stage>
                {renderInputField()}
            <button onClick={handleAddTextClick} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                Add Text
            </button> */}
        </div>
    );
}

export default FutureScenariosWorksheet;
