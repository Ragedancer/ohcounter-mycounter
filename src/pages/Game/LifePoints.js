import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";


class LifePoints extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lifePoints : 40, hitPoints: 0};
    }
    render(){
        return (
            <div className={"life-points"}>
                <h5 className={"title"}>Life</h5>
                <h1 className={"life-points"}>{this.state.lifePoints}</h1>
                {/*pass the state props by injecting in the element tag*/}
                <Increment id="incrementTen" lifePoints={this.state.lifePoints} hitPoints={10}/>
                <Decrement id="decrementTen" lifePoints={this.state.lifePoints} hitPoints={10}/>
            </div>
        );
    }
}

export default LifePoints;
