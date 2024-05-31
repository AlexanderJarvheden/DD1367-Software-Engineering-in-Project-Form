import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Text, Line, Rect, Circle, Image as KonvaImage } from 'react-konva';
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
import {useNavigate} from 'react-router-dom';

function Sidebar2() {

    const navigate = useNavigate()
    const [activeItem, setActiveItem] = useState('dashboard'); // Keeps track of the currently active item

    const [isDrawingMode, setIsDrawingMode] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [lines, setLines] = useState([]);
    const [texts, setTexts] = useState([]);
    const [selectedTextId, setSelectedTextId] = useState(null);
    const [newTextValue, setNewTextValue] = useState("");
    const [shapes, setShapes] = useState([]);
    const [showShapesMenu, setShowShapesMenu] = useState(false);
    const [showDrawingOptions, setShowDrawingOptions] = useState(false);
    const [drawingConfig, setDrawingConfig] = useState({ color: '#df4b26', thickness: 2 });
    const [shapeConfig, setShapeConfig] = useState({ width: 100, height: 100, radius: 50, color: '#000000' });
    const stageRef = useRef(null);
    const layerRef = useRef(null);
    const fileInputRef = useRef(null);

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
        setIsDrawingMode(false); // Disable drawing mode
        const stage = stageRef.current;
        const stageWidth = stage ? stage.width() : 800;
        const stageHeight = stage ? stage.height() : 600;

        const newText = {
            x: stageWidth / 2,
            y: stageHeight / 2,
            text: "New Text", // Default new text
            id: `text_${texts.length}`,
            color: '#000000',
            fontSize: 18,
            fontStyle: 'normal',
        };
        setTexts([...texts, newText]);
        setSelectedTextId(newText.id);
        setNewTextValue("New Text"); // Reset newTextValue to default
    };

    const handleMouseDown = (e) => {
        if (isDrawingMode) {
            setIsMouseDown(true);
            const stage = stageRef.current;
            const point = stage.getPointerPosition();
            setLines([...lines, { points: [point.x, point.y], color: drawingConfig.color, thickness: drawingConfig.thickness }]);
        }
    };

    const handleMouseMove = (e) => {
        if (isDrawingMode && isMouseDown) {
            const stage = stageRef.current;
            const point = stage.getPointerPosition();
            const lastLine = lines[lines.length - 1];
            lastLine.points = lastLine.points.concat([point.x, point.y]);

            lines.splice(lines.length - 1, 1, lastLine);
            setLines(lines.concat());
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const toggleDrawingMode = () => {
        setIsDrawingMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) setShowDrawingOptions(true);
            else setShowDrawingOptions(false);
            return newMode;
        });
    };

    const handleAddShapeClick = (type) => {
        setIsDrawingMode(false); // Disable drawing mode
        const stage = stageRef.current;
        const stageWidth = stage ? stage.width() : 800;
        const stageHeight = stage ? stage.height() : 600;

        const newShape = {
            type: type,
            x: stageWidth / 2,
            y: stageHeight / 2,
            color: shapeConfig.color,
            width: shapeConfig.width,
            height: shapeConfig.height,
            radius: shapeConfig.radius,
            id: `shape_${shapes.length}`,
        };

        setShapes([...shapes, newShape]);
        setShowShapesMenu(false);
    };

    const handlePictureUpload = (event) => {
        setIsDrawingMode(false); // Disable drawing mode
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = new window.Image();
                img.src = e.target.result;
                img.onload = function () {
                    const stage = stageRef.current;
                    const stageWidth = stage ? stage.width() : 800;
                    const stageHeight = stage ? stage.height() : 600;

                    const newShape = {
                        type: 'image',
                        image: img,
                        x: stageWidth / 2,
                        y: stageHeight / 2,
                        width: img.width / 2,
                        height: img.height / 2,
                        id: `image_${shapes.length}`,
                    };
                    setShapes([...shapes, newShape]);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const handleShapeConfigChange = (e) => {
        const { name, value } = e.target;
        setShapeConfig({
            ...shapeConfig,
            [name]: value,
        });
    };

    const handleDrawingConfigChange = (e) => {
        const { name, value } = e.target;
        setDrawingConfig({
            ...drawingConfig,
            [name]: value,
        });
    };

    const menuItems = [
        { name: 'dashboard', icon: teams2_icon, cursor: 'pointer', action: handleAddTextClick },
        {
            name: 'library', icon: clipper, cursor: 'pointer', action: () => {
                setIsDrawingMode(false); // Disable drawing mode
                setShowShapesMenu(true);
            }
        },
        { name: 'planner', icon: draw_icon, cursor: 'crosshair', action: toggleDrawingMode },
        { name: 'social', icon: text_icon, cursor: 'text', action: handleAddTextClick },
        { name: 'teams', icon: insert_icon, cursor: 'pointer', action: handleAddTextClick },
        { name: 'projects', icon: member, cursor: 'pointer', action: handleAddTextClick },
        {
            name: 'picture', icon: picture, cursor: 'copy', action: () => {
                setIsDrawingMode(false); // Disable drawing mode
                fileInputRef.current.click();
            }
        },
        { name: 'helper', icon: help_icon, cursor: 'pointer', action: handleAddTextClick },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            const drawingOptions = document.querySelector('.drawing-options');
            const shapesMenu = document.querySelector('.shapes-menu');

            if (drawingOptions && !drawingOptions.contains(event.target) && showDrawingOptions) {
                setShowDrawingOptions(false);
            }

            if (shapesMenu && !shapesMenu.contains(event.target) && showShapesMenu) {
                setShowShapesMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDrawingOptions, showShapesMenu]);

    return (
        <div>
            <div className="sidebar2">
                <div className="logo2" onClick={() => navigate('/')}>
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
            <Stage style={{ left: 100, position: 'relative' }} width={1400} height={1200} ref={stageRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>

                <Layer ref={layerRef}>
                    {shapes.map((shape) => (
                        shape.type === 'rect' ? (
                            <Rect
                                key={shape.id}
                                x={shape.x}
                                y={shape.y}
                                width={shape.width}
                                height={shape.height}
                                fill={shape.color}
                                draggable
                            />
                        ) : shape.type === 'circle' ? (
                            <Circle
                                key={shape.id}
                                x={shape.x}
                                y={shape.y}
                                radius={shape.radius}
                                fill={shape.color}
                                draggable
                            />
                        ) : shape.type === 'image' ? (
                            <KonvaImage
                                key={shape.id}
                                x={shape.x}
                                y={shape.y}
                                image={shape.image}
                                width={shape.width}
                                height={shape.height}
                                draggable
                            />
                        ) : null
                    ))}
                </Layer>
                <Layer>
                    {texts.map((text) => (
                        <Text
                            key={text.id}
                            x={text.x}
                            y={text.y}
                            text={text.text}
                            fill={text.color}
                            fontSize={text.fontSize}
                            fontStyle={text.fontStyle}
                            draggable
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
                    {lines.map((line, i) => (
                        <Line
                            key={i}
                            points={line.points}
                            stroke={line.color}
                            strokeWidth={line.thickness}
                            tension={0.5}
                            lineCap="round"
                            globalCompositeOperation="source-over"
                        />
                    ))}
                </Layer>
            </Stage>
            {renderInputField()}
            {showShapesMenu && (
                <div className="shapes-menu" onClick={(e) => e.stopPropagation()}>
                    <div className="shapes-menu-title">Choose Shape and Color</div>
                    <div className="shapes-menu-item" onClick={() => handleAddShapeClick('rect')}>Rectangle</div>
                    <div className="shapes-menu-item" onClick={() => handleAddShapeClick('circle')}>Circle</div>
                    <div className="shapes-menu-config">
                        <label>
                            Width:
                            <input type="number" name="width" value={shapeConfig.width} onChange={handleShapeConfigChange} />
                        </label>
                        <label>
                            Height:
                            <input type="number" name="height" value={shapeConfig.height} onChange={handleShapeConfigChange} />
                        </label>
                        <label>
                            Radius:
                            <input type="number" name="radius" value={shapeConfig.radius} onChange={handleShapeConfigChange} />
                        </label>
                        <label>
                            Color:
                            <input type="color" name="color" value={shapeConfig.color} onChange={handleShapeConfigChange} />
                        </label>
                    </div>
                </div>
            )}
            {showDrawingOptions && (
                <div className="drawing-options" onClick={(e) => e.stopPropagation()}>
                    <div className="drawing-options-title">Drawing Options</div>
                    <label>
                        Color:
                        <input type="color" name="color" value={drawingConfig.color} onChange={(e) => { handleDrawingConfigChange(e); }} />
                    </label>
                    <label>
                        Thickness:
                        <input type="number" name="thickness" value={drawingConfig.thickness} onChange={(e) => { handleDrawingConfigChange(e); }} min="1" max="10" />
                    </label>
                </div>
            )}
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handlePictureUpload}
            />
        </div>
    );
}

export default Sidebar2;
