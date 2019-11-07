import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core";
import Dice4 from "./images/dice/d4.svg";
import Dice6 from "./images/dice/d6.svg";
import Dice8 from "./images/dice/d8.svg";
import Dice10 from "./images/dice/d10.svg";
import Dice12 from "./images/dice/d12.svg";
import Dice20 from "./images/dice/d20.svg";
import Coin from "./images/dice/Coin.svg";
import {loadFile, loadFileContents} from "../../utils/template";

class Dice extends Component {

    constructor(props) {
        super(props);
        this.state = {isEmptyState: true}
    }
    openDice() {}
    //testing
    test(){}


    render() {
        return (
            <div>
                <div id = "main">
                    <h1>Hi Guys Dice here</h1>
                    <h1> Konichiwa!!!</h1>

                <div id = "Dice">
                    <img src = {Dice4}
                    onClick={null}
                    />

                    <img src = {Dice6}  />
                    <img src = {Dice8}  />
                    <img src = {Dice10}  />
                    <img src = {Dice12}  />
                    <img src = {Dice20}  />
                    <img src = {Coin}  />

                    </div>
                </div>
            </div>
        );
    }
}

//Need to export for other files to see -jimmy
export default Dice;