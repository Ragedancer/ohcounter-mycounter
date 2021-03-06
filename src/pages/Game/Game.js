import React, {Component} from 'react';
import PlayerTab from "./PlayerTab";
import LifePoints from "./LifePoints";
import PoisonPoints from "./PoisonPoints";
import CommanderCost from "./CommanderCost";
import CommanderDamage from "./CommanderDamage";
import './Game.scss';

export function getCounters(){
    const counterData = [{life: this.props.lifeCounter}, {poison: this.props.poisonCounter},
        {costCounter: this.props.commanderCostCounter}, {damageCounter: this.props.commanderDamageCounter}]
}

class Game extends Component {
    render() {
        return (
            <table className={"myThighUs"}>
                <tbody>
                <tr>
                    <td colSpan={"3"}><PlayerTab /></td>
                </tr>
                <tr>
                    <td colSpan={"3"}> <LifePoints /></td>
                </tr>
                <tr>
                    <td id={"box"}><PoisonPoints /></td>
                    <td id={"box"}><CommanderCost /></td>
                    <td id={"box-cd"}><CommanderDamage /></td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Game;
