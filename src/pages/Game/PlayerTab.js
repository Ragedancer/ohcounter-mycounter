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
            primary: 0, secondary: 0, commanderCounterCost: 0, commanderDamageCounter: 0}
    }
    //Generating the player tab radio buttons
    generateTabs = () => {
        return(
        // mapping the state iterates the array of state of players so player names can be retrieved
        this.state.players.map((player, index) => (
            <FormControlLabel key={"player" + index} className={"player-tab"} id={"player" + index} value={"player" + index} control={<Radio className={"radio-button"} />} label={player.name}/>
        )))
    }
    render(){
        return (
            <div className={"content"}>
                {/*FormControl is Material-UI html form and RadioGroup too*/}
                <FormControl>
                    <RadioGroup className={"player-tabs"}>
                        {/*Calling the generateTab() to generate the player tab radio buttons*/}
                        {this.generateTabs()}
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

export default PlayerTab;
