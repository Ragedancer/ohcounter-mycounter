import React, {Component} from "react";
class GameSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {value:props.value};
        this.state = {onChange:props.onChange};
    }

    render() {
        return (
            <div>
                <h2>Pick a Game Type:</h2>
                <select value={this.state.value} onChange={this.state.onChange} size={4}>
                    <option value="Commander">MTG Commander</option>
                    <option value="Standard">MTG Standard</option>
                    <option value="YGO">Yu-Gi-Oh</option>
                    <option value="Munch">Munchkin</option>
                </select>
            </div>
        );
    }
}
export default GameSelect;
