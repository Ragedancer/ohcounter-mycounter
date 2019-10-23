import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './ActionPrompt.scss';
import {checkCookie} from "../../utils/cookie";
import {loadFile, loadFileContents, newTemplate} from "../../utils/template";
import {clearScreen} from "../../utils/util";
function buttonActionPrompt()
    {

    }
class ActionPrompt extends Component {
    render() {
        return (

            <div>
                <div id = "main">

                    <label for = "newGame">New Game<input type = "radio" id = "newGame" name = "newGame" value = "newGame"/></label>

                </div>
                <div id = "selectGame">
                    <Button onclick = {buttonActionPrompt()}> Return to Game</Button>
                    <Button onclick = {buttonActionPrompt()}> New Game</Button>
                    <Button onclick = {buttonActionPrompt()}> Dice</Button>
                    <Button onclick = {buttonActionPrompt()}> Random Player Selector</Button>
                    <Button onclick = {buttonActionPrompt()}> Reset</Button>
                </div>
            </div>
        );
    }
}

//ActionPrompt is exported and can be referenced as an element when it is imported
export default ActionPrompt;