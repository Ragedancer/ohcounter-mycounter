import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";


class PoisonPoints extends React.Component {

    constructor(props) {
        super(props);
        this.state = { poisonPoints : 0};
    }
    render(){
        return (
            <div className={"poison-points"}>
                <h5 className={"title"}>Poison</h5>
                <Increment />
                <h1 className={"life-points"}>{this.state.poisonPoints}</h1>
                <Decrement />
            </div>
        );
    }
}

export default PoisonPoints;
