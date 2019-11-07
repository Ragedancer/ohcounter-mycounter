import React from 'react';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function playerTab() {
    let player = "player";
    let count = 0;
    for(let i = 0; i < this.state.players.length; i++) {
        if(this.state.players.length === 1){
            player = player + count;
            return <FormControlLabel value={player} control={<Radio />} label={this.state.players[0]}/>
        }
        else {
            return <FormControlLabel value={player} control={<Radio />} label={this.state.players[i]}/>
        }
    }
}

class PlayerTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = { players : [ "Phil", "Sam", "Weston", "Jimmy", "Matheus" ]}
    }

    render(){
        return (
            <div className={"player-tab"}>
                <FormControl>
                    <RadioGroup name="player-tabs" >
                        <FormControlLabel value="player0" control={<Radio />} label={this.state.players[0]}/>
                        <FormControlLabel value="player1" control={<Radio />} label={this.state.players[1]}/>
                        <FormControlLabel value="player2" control={<Radio />} label={this.state.players[2]}/>
                        <FormControlLabel value="player3" control={<Radio />} label={this.state.players[3]}/>
                        <FormControlLabel value="player4" control={<Radio />} label={this.state.players[4]}/>
                    </RadioGroup>
                </FormControl>

            </div>
        );
    }
}

export default PlayerTab;
