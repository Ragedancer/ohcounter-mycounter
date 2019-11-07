import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";


class LifePoints extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lifePoints : 40};
    }
    render(){
        return (
            <div className={"life-points"}>
                <h5 className={"title"}>Life</h5>
                <h1 className={"life-points"}>{this.state.lifePoints}</h1>
                <Increment id="incrementTen" state={this.state.lifePoints}/>
                <Decrement id="decrementTen" state={this.state.lifePoints}/>
            </div>
        );
    }
}

export default LifePoints;
