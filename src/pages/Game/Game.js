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
            <div className="game-container">
                <PlayerTab />
                <LifePoints />
                <PoisonPoints />
                <CommanderCost />
                <CommanderDamage />
            </div>
        );
    }
}

export default Game;
