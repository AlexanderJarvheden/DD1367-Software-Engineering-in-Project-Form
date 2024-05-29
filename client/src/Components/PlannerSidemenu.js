import React, { useState,useRef, useEffect } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import '../Assets/Styles/buttonmeny2.css';
import menu_logo2 from '../Assets/Icons/menu_logo2.svg';

import member from '../Assets/Icons/addmember_icon.svg';
import clipper from '../Assets/Icons/clipper_icon.svg';
import draw_icon from '../Assets/Icons/draw_icon.svg';
import help_icon from '../Assets/Icons/help_icon.svg';
import insert_icon from '../Assets/Icons/insert_icon.svg';
import teams2_icon from '../Assets/Icons/teams2_icon.svg';
import text_icon from '../Assets/Icons/text_icon.svg';
import picture from '../Assets/Icons/picture_icon.svg';


function Sidebar2() {
    const [activeItem, setActiveItem] = useState('dashboard'); // Keeps track of the currently active item

    const [texts, setTexts] = useState([]);
    const [selectedTextId, setSelectedTextId] = useState(null);
    const [newTextValue, setNewTextValue] = useState("");
    const stageRef = useRef(null);

    const handleTextDblClick = (text) => {
        setSelectedTextId(text.id);
        setNewTextValue(text.text);
    };

    const handleInputChange = (e) => {
        setNewTextValue(e.target.value);
    };

    const handleInputBlur = () => {
        const updatedTexts = texts.map(t => {
            if (t.id === selectedTextId) {
                return {
                    ...t,
                    text: newTextValue,
                };
            }
            return t;
        });
        setTexts(updatedTexts);
        setSelectedTextId(null);
    };

    const renderInputField = () => {
        if (selectedTextId) {
            const textObj = texts.find(t => t.id === selectedTextId);
            if (textObj) {
                return (
                    <input
                        type="text"
                        value={newTextValue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        style={{
                            position: 'absolute',
                            top: textObj.y,
                            left: textObj.x,
                            fontSize: '18px',
                            border: '1px solid black',
                        }}
                        autoFocus
                    />
                );
            }
        }
        return null;
    };
    
    
    
    
    const handleAddTextClick = () => {
        const stage = stageRef.current;
        const stageWidth = stage ? stage.width() : 800; // Default width if stage is not available
        const stageHeight = stage ? stage.height() : 600; // Default height if stage is not available

        const newText = {
            x: stageWidth / 2,  // Center x position in the canvas
            y: stageHeight / 2, // Center y position in the canvas
            text: "New Text",  // Default text content
            id: `text_${texts.length}`,  // Unique ID for each text
        };
        setTexts([...texts, newText]);
    };

    const menuItems = [
        { name: 'dashboard', icon: teams2_icon, cursor: 'pointer', action: handleAddTextClick},
        { name: 'library', icon: clipper, cursor: 'pointer', action: handleAddTextClick},
        { name: 'planner', icon: draw_icon, cursor: 'crosshair', action: handleAddTextClick},
        { name: 'social', icon: text_icon, cursor: 'text', action: handleAddTextClick},
        { name: 'teams', icon: insert_icon, cursor: 'pointer', action: handleAddTextClick},
        { name: 'projects', icon: member, cursor: 'pointer', action: handleAddTextClick},
        { name: 'picture', icon: picture, cursor: 'copy', action: handleAddTextClick},
        { name: 'helper', icon: help_icon, cursor: 'pointer', action: handleAddTextClick},
    ];

    return (
        <div>
            <div className="sidebar2">
                <div className="logo2">
                    <img src={menu_logo2} alt="Menu Logo" />
                </div>
                {menuItems.map(item => (
                    <div
                        key={item.name}
                        className={`menu-item2 ${activeItem === item.name ? 'active' : ''}`}
                        onClick={() => {
                            setActiveItem(item.name);
                            item.action();
                        }}
                        style={{ cursor: item.cursor }}
                    >
                        <div className="menu-icon2">
                            <img src={item.icon} alt={`${item.name} icon`} />
                        </div>
                    </div>
                ))}
            </div>
            <Stage style={{left: 100, position: 'relative'}} width={1400} height={1200}>
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
            {/* </div> */}
            <button onClick={handleAddTextClick} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                Add Text
            </button>
        </div>
    );
}

export default Sidebar2;
