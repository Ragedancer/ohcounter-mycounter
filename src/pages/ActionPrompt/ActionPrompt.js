import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './ActionPrompt.scss';
import './NewGameButton.js';
import App from '../App/App.js';
import {checkCookie} from "../../utils/cookie";
import {loadFile, loadFileContents, newTemplate} from "../../utils/template";
import {clearScreen} from "../../utils/util";
import {observable} from "mobx";

function buttonActionPrompt()
    {

    }
// function newGame(){
//     return (
//         <label for = "new"><input type= "radio" id = "new" name = "new"/>New Game</label>
//     );
// }
   /* function continueGame(props){
        return (
            <label for = "continue">Continue Game</label><input type= "radio" id = "continue" name = "continue">
            );
    }*/
class ActionPrompt extends Component {

    render() {

        return (

            <div>
                <div id = "main">
                    <h3>What would you like to do?</h3>
                </div>
                <div id = "selectGame">
                    <Button onclick = {buttonActionPrompt()} to='/game'> Return to Game</Button>
                    <Button onclick = {buttonActionPrompt()}> New Game</Button>
                    <Button onclick = {buttonActionPrompt()} to='/dice'>Dice</Button>
                    <Button onclick = {buttonActionPrompt()}> Random Player Selector</Button>
                    <Button onclick = {buttonActionPrompt()}> Reset</Button>
                </div>
            </div>
        );
    }
}

//ActionPrompt is exported and can be referenced as an element when it is imported
export default ActionPrompt;