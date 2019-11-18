import React, {Component} from 'react';
import Increment from "./Increment";
import Decrement from "./Decrement";
import './Game.scss';

class CommanderCost extends Component {
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
            <div className={"commander-cost"}>
                <h5 className={"counter-name"}>Commander Cost</h5>
                <Increment className={"increment"} sendCounter={this.getCounter} counter={this.state.counter} hitPoints={2}/>
                <h1 className={"counter-points"}>{this.state.counter}</h1>
                <Decrement className={"decrement"} sendCounter={this.getCounter} counter={this.state.counter} hitPoints={2}/>
            </div>
        );
    }
}

export default CommanderCost;
