import React, {Component} from 'react';
import Increment from "./Increment";
import Decrement from "./Decrement";
import './Game.scss';


class LifePoints extends Component {
    constructor(props) {
        super(props);
        // in order to pass data from parent to child or child to parent ypu need to initialize you state and properties
        this.state = { counter : 40, hitPoints: 0}
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
            <div className={"life-point-container"}>
                <h5 className={"counter-name"}>Life</h5>
                <h1 className={"counter-points"}>{this.state.counter}</h1>
                {/* pass the state props by injecting attributes in the element tag*/}
                {/* to send data to child components inject with the variables sendLifePoints, lifePoints, hitPoints. you can send functions, variable, etc.*/}
                <table>
                    <tbody>
                        <tr>
                <td id = "Decrement"><Decrement className={"decrement"} id="decrementTen" sendCounter={this.getCounter} counter={this.state.counter} hitPoints={10}/></td>
                <td><Increment className={"increment"} id="incrementTen" sendCounter={this.getCounter} counter={this.state.counter} hitPoints={10}/></td>
                </tr>
                <tr>
                <td id = "Decrement"><Decrement className={"decrement"} id="decrementFive" sendCounter={this.getCounter} counter={this.state.counter} hitPoints={5}/></td>
                <td><Increment className={"increment"} id="incrementFive" sendCounter={this.getCounter} counter={this.state.counter} hitPoints={5}/></td>
                </tr>
                <tr>
                <td id = "Decrement"><Decrement className={"decrement"} id="decrementOne" sendCounter={this.getCounter} counter={this.state.counter} hitPoints={1}/></td>
                <td><Increment className={"decrement"} id="decrementOne" sendCounter={this.getCounter} counter={this.state.counter} hitPoints={1}/></td>
                </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default LifePoints;
