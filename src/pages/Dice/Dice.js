import React, {Component} from "react";
import Dice4 from "./images/dice/d4.svg";
import Dice6 from "./images/dice/d6.svg";
import Dice8 from "./images/dice/d8.svg";
import Dice10 from "./images/dice/d10.svg";
import Dice12 from "./images/dice/d12.svg";
import Dice20 from "./images/dice/d20.svg";
import Coin from "./images/dice/Coin.svg";
import './Dice.css'
import {convertToElement, loadFileContents} from "../../utils/template";

class Dice extends Component {

    constructor(props) {
        super(props);
        this.state = {isEmptyState: true}
    }

    render() {
        return (
            <div>
                <div id = "main">
                    <h1>Hey Guys, Dice here</h1>
                    <h1> Konichiwa!!!</h1>

                    {/*First row of dices*/}
                <tr id = "DiceRow1">
                    <td> <img src = {Dice4} data-value = {"4"} id={"dice"}
                              onClick={clickedDice}/></td>
                    <td><img src = {Dice6} data-value = {6} id={"dice"}
                             onClick={clickedDice}/></td>
                    <td><img src = {Dice8} data-value = {8} id={"dice"}
                             onClick={clickedDice}/></td>
                    <td><img src = {Dice10} data-value = {10} id={"dice"}
                             onClick={clickedDice}/></td>
                </tr>

                    {/*second row of dices*/}
                    <tr id = "DiceRow2">
                    <td><img src = {Dice12} data-value = {12}  id={"dice"}
                             onClick={clickedDice}/></td>
                    <td><img src = {Dice20} data-value = {20} id={"dice"}
                             onClick={clickedDice}/></td>
                    <td><img src = {Coin} data-value = {2} id={"dice"}
                             onClick={clickedDice}/></td>

                    </tr>
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
        alert('You flipped a coin and got a ' + result )
    } else { //if it isn't a coin then it rolls a corresponding dice instead
        let diceRoll = Math.floor(Math.random() * value) + 1;
        alert('You picked a ' + value + ' and rolled a ' + diceRoll);
    }
}

//Need to export for other files to see -jimmy
export default Dice;