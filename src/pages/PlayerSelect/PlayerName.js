import React, {Component} from "react";
class PlayerName extends Component {
    constructor(props) {
        super(props);
        this.state = {type:props.type};
        this.state = {value:props.value};
        this.state = {onChange:props.onChange};
        this.state = {onSubmit:props.onSubmit};
    }

    render() {

        return (
            <form onSubmit={this.state.onSubmit}>
                <label><input type={this.state.type} value={this.state.value}  onChange={this.state.onChange} placeholder = {this.props.placeholder} /></label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
export default PlayerName;
