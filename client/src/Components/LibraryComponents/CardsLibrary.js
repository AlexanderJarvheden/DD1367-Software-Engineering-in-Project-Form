import React from 'react';
import '../../Assets/Styles/cardslibrary.css';
import prestudies_icon from '../../Assets/Icons/prestudies_icon.svg';

const Cards = ({ title, description, onUse }) => {
    const handleUseClick = () => {
        onUse({ title, description });
    };

    return (
        <div className="containerCards">
            <div className="card">
                <div className="card-header">
                    <div className="header-holder">
                        <div className="title">{title}</div>
                        <img src={prestudies_icon} alt="Edit" className="files-icon" />
                    </div>
                    <div className="separator1"></div>
                    <div className="separator2"></div>
                </div>
                <div className="picbutt-container">
                    <div className="image-placeholder">Picture</div>
                    <div className="circel-indicators">
                        <span className="dot-active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="lower-container">
                    <div className="card-footer">{description}</div>
                    <div className="btn-container">
                        <button className="btn-use" onClick={handleUseClick}>USE</button>
                        <button className="btn-preview">PREVIEW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
