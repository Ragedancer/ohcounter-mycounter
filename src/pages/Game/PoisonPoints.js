import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";
import './Game.scss';


class PoisonPoints extends React.Component {

    constructor(props) {
        super(props);
        // in order to pass data from parent to child or child to parent ypu need to initialize you state and properties
        this.state = { counter : 0, hitPoints: 0}
    }

    //create your getter function
    getCounter = (newCounter) => {
        //set your new state from your current state structure
        let newState = this.state;
        // now change the properties vairables
        newState = { counter: newCounter,
            hitPoints: newState.hitPoints }
        // now set your you state to update it
        this.setState(newState);

    }
    render(){
        return (
            <div className={"poison-points"}>
                <h5 className={"title"}>Poison</h5>
                <Increment className={"increment"} sendCounter={this.getCounter} counter={this.state.counter} hitPoints={1}/>
                <h1 className={"counter-points"}>{this.state.counter}</h1>
                <Decrement className={"decrement"} sendCounter={this.getCounter} counter={this.state.counter} hitPoints={1}/>
            </div>
        );
    }
}

export default PoisonPoints;
