import React, {Component} from "react";
/*
Class Name: ChoosePlayers
Function Usage: ActionPrompt call this to select number of players
*/

class NumPlayerSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {value:props.value};
        this.state = {onChange:props.onChange};
    }

    render() {
        return (
            <div>
                <h2>Number of Players</h2>
                <select value={this.state.value} onChange={this.state.onChange} size={8}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
        );
    }
}
export default NumPlayerSelect;
