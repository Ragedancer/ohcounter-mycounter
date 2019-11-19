import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import './RandomPlayerSelector.scss' ;

// Class Name: RandomPlayerSelector
// Class Usage: found in nav bar
// Class Reason: to randomly select a player from a selected group of players
class RandomPlayerSelector extends Component {
    state = {
        // Reason: will list players currently playing
        players: [
            {name: "player 1"},
            {name: "player 2"},
            {name: "player 3"},
            {name: "player 4"}
        ],
        // Reason: holds players who are selected in the state
        selectedPlayers: [],
        open: false,
    }
// Function Name: onChange
// Function Usage: used by checkboxes generated by generatePlayer
// Function Reason: event listener that gets called everytime a checkbox is clicked and update the state based off which players are selected
    onChange(e) {
        //gets current state of players from json
        let selectedPlayers = this.state.selectedPlayers;
        //determines position in array
        let index
        if (e.target.checked) {
            selectedPlayers.push(e.target.value);
        } else {
            index = selectedPlayers.indexOf(e.target.value);
            selectedPlayers.splice(index, 1)
        }
        this.setState({selectedPlayers: selectedPlayers})
    }

// Function Name: randPlayer
// Function Usage: used on generate button
// Function Reason: calculates random player from players selected and displays chosen player as an alert
    randPlayer = () => {
                // Reason:
        const thisPlayer = this.state.selectedPlayers[Math.floor(Math.random() * this.state.selectedPlayers.length)]
        return (
            alert(thisPlayer)
        )
    }
    // Function Name: onChange
    // Function Usage: used by checkboxes generated by generatePlayer
    // Function Reason:
    generatePlayer = (player) => {
        return(
            <span className = "CheckboxGroup">
            <input type="checkbox"
            value={player.name}
            id={player.name}
            onChange={this.onChange.bind(this)}/>
            <label for={player.name}>{player.name}</label>       
             </span>          
        )
    }
    // Function Name: onChange
    // Function Usage: used by checkboxes generated by generatePlayer
    // Function Reason:
    render() {
        return(
            <div>
            {/* Function Name: onChange
                Function Usage: used by checkboxes generated by generatePlayer
                Function Reason: */}
                <FormControl
                
                id = "check">
                {this.state.players.map(
                        (player, i) =>
                            <this.generatePlayer
                                key={i}
                                name={player.name}/>
                    )}
                    {/*should generate random player and display it*/}
            {/* Function Name: onChange
                Function Usage: used by checkboxes generated by generatePlayer
                Function Reason: */}

            </FormControl>

                    {/*should generate random player and display it*/}
                <div>
                <button onClick={this.randPlayer.bind(this)}>
                    Generate
                </button>
                </div>
            </div>
            // </MuiThemeProvider>
        )
    }
}

export default RandomPlayerSelector;