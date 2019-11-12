import React from 'react';
import PlayerTab from "./PlayerTab";
import LifePoints from "./LifePoints";
import PoisonPoints from "./PoisonPoints";
import CommanderCost from "./CommanderCost";
import CommanderDamage from "./CommanderDamage";

class Game extends React.Component {
    render() {
        return (
            <div className="App">
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
