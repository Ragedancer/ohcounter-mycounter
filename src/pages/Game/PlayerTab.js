import React, {Component} from 'react';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import './Game.scss';

class PlayerTab extends Component {

    constructor(props) {
        super(props);
        this.state = { players : [ {name: "Phil"}, {name: "Sam"}, {name: "Weston"}, {name: "Jimmy"}, {name: "Matheus"}],
            savedCounter: [{lifeCounter: 0}, {poisonCounter: 0}, {commanderCostCounter: 0}, {commanderDamageCounter: 0}]}
    }
    //Generating the player tab radio buttons
    generateTabs = () => {
        return(
        // mapping the state iterates the array of state of players so player names can be retrieved
        this.state.players.map((player, index) => (
            <td><FormControlLabel key={"player" + index} className={"player-tab"} id={"player" + index}
                                  value={"player" + index} control={<Radio className={"radio-button"} />} label={player.name}/></td>
        )))
    }

    getCounterData = (life, poison, cC, cD) => {
        let newState = this.state;
        newState = {
            savedCounter: [{lifeCounter: this.props.life},{poisonCounter: poison},
                {commanderCostCounter: cC},{commanderDamageCounter: cD}]
        }
        this.setState(newState);
    }

    render(){
        return (
            <div className={"content"}>
                {/*FormControl is Material-UI html form and RadioGroup too*/}
                <table className={"player-table"}><FormControl>
                    <RadioGroup className={"player-tabs"}>
                        {/*Calling the generateTab() to generate the player tab radio buttons*/}
                        <tr>{this.generateTabs()}</tr>
                    </RadioGroup>
                </FormControl></table>
            </div>
        );
    }
}

export default PlayerTab;
