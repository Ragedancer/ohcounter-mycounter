import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './ActionPrompt.scss';
import {checkCookie} from "../../utils/cookie";
import {loadFile, loadFileContents, newTemplate} from "../../utils/template";
import {clearScreen} from "../../utils/util";

class ActionPrompt extends Component {
    render() {
        return (

            <div>
                <div id = "main">
                    <Button value = "continue">Continue Game</Button>

                    <Button value = "new">New Game</Button>
                </div>
                <div id = "selectGame">
                        <Button onclick = "buttonActionPrompt()"> Select</Button>
                </div>
            </div>
        );
    }
}

//ActionPrompt is exported and can be referenced as an element when it is imported
export default ActionPrompt;