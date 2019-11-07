import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";


class CommanderDamage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { commanderDamage : 0};
    }
    render(){
        return (
            <div className={"commander-damage"}>
                <h5 className={"title"}>Commander Damage</h5>
                <Increment />
                <h1 className={"life-points"}>{this.state.commanderDamage}</h1>
                <Decrement />
            </div>
        );
    }
}

export default CommanderDamage;
