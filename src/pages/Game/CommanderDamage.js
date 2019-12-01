import React, {Component} from 'react';
import Increment from "./Increment";
import Decrement from "./Decrement";
import './Game.scss';

/*The purpose of this class is to increment, decrement, and keep track of the commander damage counter*/
class CommanderDamage extends Component {
    constructor(props) {
        super(props);
        // in order to pass data from parent to child or child to parent ypu need to initialize you state and properties
        this.state = { counter : 0, hitPoints: 0}
    }

    //create your getter function
    getCounter = (newCounter) => {
        //set your new state from your current state structure
        let newState = this.state;
        // now change the properties variables
        newState = { counter: newCounter,
            hitPoints: newState.hitPoints }
        // now set your you state to update it
        this.setState(newState);
    }

    render(){
        return (
            <div className={"commander-damage"}>
                <h5 className={"counter-name-comD"}>Commander Damage</h5>
                {/* pass the state props to Increment.js and Decrement.js by injecting attribute functions sendCounter={this.getCounter} in the element tag*/}
                {/* to send data to child components inject with the variables counter and hitPoints. you can send functions, variable, etc.*/}
                <Increment className={"increment"} sendCounter={this.getCounter} counter={this.state.counter} hitPoints={1}/>
                <h1 className={"counter-points"}>{this.state.counter}</h1>
                <Decrement className={"decrement"} sendCounter={this.getCounter} counter={this.state.counter} hitPoints={1}/>
            </div>
        );
    }
}

export default CommanderDamage;
