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
                    <h1>Hi Guys Dice here</h1>
                    <h1> Konichiwa!!!</h1>

                <div id = "DiceBox">
                    <img src = {Dice4}
                         id={"dice"}
                    onClick={clickedDice}/>

                    <img src = {Dice6}
                         id={"dice"}/>

                    <img src = {Dice8}
                         id={"dice"}/>

                    <img src = {Dice10}
                         id={"dice"}/>

                    <img src = {Dice12}
                         id={"dice"}/>

                    <img src = {Dice20}
                         id={"dice"}/>

                    <img src = {Coin}
                         id={"dice"}/>

                    </div>
                </div>
            </div>
        );
    }
}

function clickedDice(props) {
    return (alert('testing'));
}

//Need to export for other files to see -jimmy
export default Dice;