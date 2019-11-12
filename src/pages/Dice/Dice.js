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
    let x = props.target.getAttribute('data-value');
    alert('testing ' + x);
}

//Need to export for other files to see -jimmy
export default Dice;