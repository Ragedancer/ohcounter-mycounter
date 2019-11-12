import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";


class LifePoints extends React.Component {
    constructor(props) {
        super(props);
        // in order to pass data from parent to child or child to parent ypu need to initialize you state and properties
        this.state = { lifePoints : 40, hitPoints: 0}
    }

    //create your getter function
    getLifePoints = (lifePoints) => {
        //set your new state from your current state structure
        let newState = this.state;
        // now change the properties vairables
        newState = { lifePoints: lifePoints,
            hitPoints: newState.hitPoints }
        // now set your you state to update it
        this.setState(newState);
    }

    render(){

        return (
            <div className={"life-points"}>
                <h5 className={"title"}>Life</h5>
                <h1 className={"life-points-title"}>{this.state.lifePoints}</h1>
                {/*pass the state props by injecting attributes in the element tag*/}
                // to send data to child components inject with the variables sendLifePoints, lifePoints, hitPoints. you can send functions, variable, etc.
                <Increment id="incrementTen" sendLifePoints={this.getLifePoints.bind(this)} lifePoints={this.state.lifePoints} hitPoints={10}/>
                <Decrement id="decrementTen" sendLifePoints={this.getLifePoints.bind(this)} lifePoints={this.state.lifePoints} hitPoints={10}/>
                <Increment id="incrementTen" sendLifePoints={this.getLifePoints.bind(this)} lifePoints={this.state.lifePoints} hitPoints={5}/>
                <Decrement id="decrementTen" sendLifePoints={this.getLifePoints.bind(this)} lifePoints={this.state.lifePoints} hitPoints={5}/>
                <Increment id="incrementTen" sendLifePoints={this.getLifePoints.bind(this)} lifePoints={this.state.lifePoints} hitPoints={1}/>
                <Decrement id="decrementTen" sendLifePoints={this.getLifePoints.bind(this)} lifePoints={this.state.lifePoints} hitPoints={1}/>

            </div>
        );
    }
}

export default LifePoints;
