import React from 'react';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from "react-dom";

import './index.css';
import ModalSandBox from './Components/ModalWindow/SandBox'

ReactDOM.render(
    <div>
        <ModalSandBox></ModalSandBox>
    </div>,
    document.getElementById('buttons'));

reportWebVitals();
