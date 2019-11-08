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
                <Increment hitPoints={1}/>
                <h1 className={"life-points"}>{this.state.commanderDamage}</h1>
                <Decrement hitPoints={1}/>
            </div>
        );
    }
}

export default CommanderDamage;
