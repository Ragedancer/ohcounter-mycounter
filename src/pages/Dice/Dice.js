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

                    <input id={"result"} value={"Click a Dice!"} ></input>

                    <table className={"diceTable"}>
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

/**
 * this funcion here is made so that clicking the picture becomes possible
 * let result is the variable used for calculating the coin flip.
 * let diceRoll is the variable calculating dices roll.
 * let value is used to figure out what the user clicks
 * @param props
 */
function clickedDice(props) {
    let result;
    let diceRoll;
    //gets the value that was assigned to each die
    let value = props.target.getAttribute('data-value');


 /**
  * trying to catch the coin
  * coin is assigned the value of 2 because coin is like a 2 sided dice
  * the if statement is there to catch the value 2 and the logic will then randomly
  * determine head or tails. Head being 1 and tail being anything else. After that
  * set the input bar up top with the id 'value' to what ever the result is
  * */
    if(value==2){
        let coin = Math.floor(Math.random() * value) + 1;
        if(coin == 1) {
            result = 'head';
        } else
           result = 'tail';
            //alert('You flipped a coin and got a ' + result ) //this is a tester
            document.getElementById('result').value = result;

    } else { /*if it isn't a coin then it the logic will treat it like a dice */
        diceRoll = Math.floor(Math.random() * value) + 1;
        //alert('You picked a ' + value + ' and rolled a ' + diceRoll); //this is a tester
        document.getElementById('result').value = diceRoll;

    }


}

//Need to export for other files to see -jimmy
export default Dice;