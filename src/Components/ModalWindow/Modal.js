//Component Modal window

import React from 'react';
import PropTypes from "prop-types";
import MyButton from "../Button/MyButton";

import "./Modal.css";

const Modal = ({
    title, isOpen, onCancel, onSubmit, children,
               }) => {
    return(
        <>
            { isOpen &&
                <div className="modalOverlay">
                    <div className="modalWindow">
                        <div className="modalHeader">
                            <div className="modalTitle">{title}</div>
                            <MyButton onClick={onCancel}>Cancel</MyButton>
                        </div>
                        <div className="modalBody">
                            {children}
                        </div>
                        <div className="modalFooter">

                        </div>
                    </div>
                </div>
            }
        </>
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
};

Modal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null,
};

export default Modal;