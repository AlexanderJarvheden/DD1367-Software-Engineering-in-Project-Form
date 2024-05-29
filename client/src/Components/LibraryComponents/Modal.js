import React from 'react';
import '../../Assets/Styles/modal.css'; // Ensure you have the appropriate CSS
import SavePin from '../../Assets/Icons/savepin.svg';

const Modal = ({ show, onClose, title, description, imageUrl, pinImageUrl, children }) => { // Add pinImageUrl as a prop
    if (!show) {
        return null;
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>
                    <button onClick={onClose} className="button-close">Close</button>
                </div>
                <div className="modal-body">
                    {imageUrl && <img src={imageUrl} alt="Modal content" className="modal-image" />}
                    <div className="modal-box">
                        Placeholder
                    </div>
                    {children}
                </div>
                <div className="modal-footer">
                    <p className="modal-description">{description}</p>
                    <div className="save-pin-container">
                        <button onClick={onClose} className="buttonlower">Save as pin</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;