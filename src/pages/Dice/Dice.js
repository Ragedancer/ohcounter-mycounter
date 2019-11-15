import React, {Component} from "react";
import Dice4 from "./images/dice/d4.svg";
import Dice6 from "./images/dice/d6.svg";
import Dice8 from "./images/dice/d8.svg";
import Dice10 from "./images/dice/d10.svg";
import Dice12 from "./images/dice/d12.svg";
import Dice20 from "./images/dice/d20.svg";
import Coin from "./images/dice/Coin.svg";
import './Dice.css'

import icon from './images/dice/d4.svg'
import {convertToElement, loadFileContents} from "../../utils/template";
import Icon from "@material-ui/core/Icon";

class Dice extends Component {

    constructor(props) {
        super(props);
        this.state = {isEmptyState: true}
    }

    render() {
        return (
            <div>
                <div id = "main">
                    {/*<Icon fill={"#49c"} width={100} name={"dice4"} />*/}

                    <h1>Hey Guys, Dice is DONE!!!</h1>
                    <input id = "result" value={"Click a Dice!"} ></input>

                    <table>
                    {/*First row of dices*/}
                        <tr>
                            <td id={"container"} background={"Dice4"}>
                                <img src = {Dice4} data-value = {"4"} id={"dice"}
                                     onClick={clickedDice}/></td>
                            <td><img src = {Dice6} data-value = {6} id={"dice"}
                                     onClick={clickedDice}/></td>
                            <td><img src = {Dice8} data-value = {8} id={"dice"}
                                     onClick={clickedDice}/></td>
                        </tr>

                    {/*second row of dices*/}
                        <tr>
                            <td><img src = {Dice10} data-value = {10} id={"dice"}
                                     onClick={clickedDice}/></td>
                            <td><img src = {Dice12} data-value = {12}  id={"dice"}
                                     onClick={clickedDice}/></td>
                            <td><img src = {Dice20} data-value = {20} id={"dice"}
                                     onClick={clickedDice}/></td>
                        </tr>

                        {/*third row*/}
                        <tr>
                            <td colSpan={"3"}><img src = {Coin} data-value = {2} id={"dice"}
                                     onClick={clickedDice}/></td>
                        </tr>

                    </table>
                </div>
            </div>
        );
    }
}

function clickedDice(props) {
    let result;
    //gets the value that was assigned to each die
    let value = props.target.getAttribute('data-value');

    // trying to catch the coin
    if(value==2){
        let coin = Math.floor(Math.random() * value) + 1;
        if(coin == 1) {
            result = 'head';
        } else
           result = 'tail';
        //alert('You flipped a coin and got a ' + result )
        document.getElementById('result').value = result;

    } else { //if it isn't a coin then it rolls a corresponding dice instead
        let diceRoll = Math.floor(Math.random() * value) + 1;
        //alert('You picked a ' + value + ' and rolled a ' + diceRoll);
        document.getElementById('result').value = diceRoll;
    }

    document.getElementById('dice').className = 'classname'
}

//Need to export for other files to see -jimmy
export default Dice;