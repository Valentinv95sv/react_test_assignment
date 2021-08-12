//logic for component modal window

import React, { Component, Fragment } from 'react';
import Modal from "./Modal";
import MyButton from "../Button/MyButton";

var ButtonId;

class Sandbox extends Component {
    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({ isOpen: true });
    }

    handleCancel = () => {
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <Fragment>
                <h1><span>Test assignment</span></h1>
                <lu id="buttons">
                    <li><MyButton id="Button_1" className="MyButton" onClick={(e) => {
                        ButtonId = e.currentTarget.id;
                        this.openModal();
                    }}>
                        <i className="fa fa-home"></i>
                    </MyButton>
                    </li>
                    <li>
                        <MyButton id="Button_2" className="MyButton" onClick={(e) => {
                            ButtonId = e.currentTarget.id;
                            this.openModal();
                        }}>
                            <i className="fa fa-bars"></i>
                        </MyButton>
                    </li>
                    <li>
                        <MyButton id="Button_5" className="MyButton" onClick={(e) => {
                            ButtonId = e.currentTarget.id
                            this.openModal();
                        }}>
                            <i className="fa fa-folder"></i>
                        </MyButton>
                    </li>

                    <li>
                        <MyButton id="Button_3" className="MyButton" onClick={(e) => {
                            ButtonId = e.currentTarget.id;
                            this.openModal();
                        }}>
                            <i className="fa fa-trash"></i>
                        </MyButton>
                    </li>
                    <li>
                        <MyButton id="Button_4" className="MyButton" onClick={(e) => {
                            ButtonId = e.currentTarget.id;
                            this.openModal();
                        }}>
                            <i className="fa fa-book"></i>
                        </MyButton>
                    </li>
                </lu>
                <Modal
                    title="Test dialog window"
                    isOpen={this.state.isOpen}
                    onCancel={this.handleCancel}
                >
                    <p>Button id:  {ButtonId}</p>
                </Modal>
            </Fragment>
        );
    }
}

export default Sandbox;