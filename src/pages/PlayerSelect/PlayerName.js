import React, {Component} from "react";
class PlayerName extends Component {
    constructor(props) {
        super(props);
        this.state = {type:props.type};
        this.state = {value:props.value};
        this.state = {onChange:props.onChange};
        this.state = {onSubmit:props.onSubmit};
        this.state = {ph:props.placeholder};
    }

    render() {

        return (
            <form onSubmit={this.state.onSubmit}>
                <label><input type={this.state.type} value={this.state.value}  onChange={this.state.onChange} placeholder={this.state.ph} /></label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
export default PlayerName;
