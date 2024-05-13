import React from 'react';
import '../../Assets/Styles/snakelibrary.css';
import Snake from '../../Assets/Icons/snake_icon.svg';
import NodeIcon from '../../Assets/Icons/node_icon.svg';
import ProgressBar from './ProgressBar';

const SnakeLibrary = ({ nodes }) => {
    const maxNodes = 14;
    const progress = (nodes.length / maxNodes) * 100;
    const maxNodesPerRow = 4;
    const numRows = 4;
    const verticalSpacing = 117;  // Vertical spacing between rows
    const horizontalSpacing = 110; // Horizontal spacing between nodes
    const startingRowTop = 5;     // Starting top position for the first row

    const renderNodes = () => {
        const renderedNodes = [];

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < maxNodesPerRow; col++) {
                const index = row * maxNodesPerRow + col;
                if (index < nodes.length && renderedNodes.length < maxNodes) {
                    const node = nodes[index];
                    const leftPosition = 100 + col * horizontalSpacing;  // Left position calculation for each node
                    const topPosition = startingRowTop + row * verticalSpacing;  // Top position calculation for each node

                    const titleHeight = -30; // Height of the title
                    const descriptionTop = 50; // Top position of the description

                    renderedNodes.push(
                        <div key={index} style={{ position: 'absolute', left: `${leftPosition}px`, top: `${topPosition}px` }}>
                            <div className="node-container">
                                <div className="node-title">{node.title}</div>
                                <div className="node-description">{node.description}</div>
                                <img src={NodeIcon} alt={`Node ${index}`} className="node-icon" />
                            </div>
                        </div>

                    );
                } else {
                    break;
                }
            }
        }

        return renderedNodes;
    };


    return (
        <div className="snake-container">
            <div className="start">START</div>
            <div className="node-container">
                {renderNodes()}
                <img src={Snake} alt="Snake Path" className="snake-icon" />
            </div>
            <ProgressBar progress={progress} />
            <div className="end">END</div>
        </div>
    );
};

export default SnakeLibrary;
