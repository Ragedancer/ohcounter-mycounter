import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";


class CommanderCost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { commanderCost : 0};
    }
    render(){
        return (
            <div className={"commander-cost"}>
                <h5 className={"title"}>Commander Cost</h5>
                <Increment hitPoints={2}/>
                <h1 className={"life-points"}>{this.state.commanderCost}</h1>
                <Decrement hitPoints={2}/>
            </div>
        );
    }
}

export default CommanderCost;
