import React, { Component } from "react";
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import red from '@material-ui/core/colors/red'
import white from '@material-ui/core/colors/'
import {MuiFormControlLabel, MuiThemeProvider} from '@material-ui/core/styles'
import { createMuiTheme, Backdrop } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import color from "@material-ui/core/colors/amber";
import './RandomPlayerSelector.scss' 
// import classes from "*.module.css";


// const theme = createMuiTheme({
//     overrides: {
//         root: {
//     FormControlLabel: {
//         label: {
    
//         color: 'secondary'
        
//     }
// }
//     }
// },
//     checked: {}
// });

class RandomPlayerSelector extends Component {
    state = {
        players: [
            {name: "player 1"},
            {name: "player 2"},
            {name: "player 3"},
            {name: "player 4"}        
        ],
        selectedPlayers: [],
        isChecked: false
        }



        



    //taken from internet
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
 //returns random player from array
    randPlayer = () => {
       
        const thisPlayer = this.state.selectedPlayers[Math.floor(Math.random() * this.state.selectedPlayers.length)]
        return(
        alert(thisPlayer)
        )
    }



    generatePlayer = (player) => {
        return(
            <FormControlLabel 
            id={player.name}
            value={player.name}
            checked={Checkbox.checked} 
            control={
                <Checkbox 
                     /> 
                } 
            label={player.name} 
            onChange={this.onChange.bind(this)}
             />
                        
        )
    }
    render() {

        return(
            // <MuiThemeProvider theme={theme}>
            <div>

            <FormControl>
                {this.state.players.map(
                        (player, i) =>
                            <this.generatePlayer
                                key={i}
                                name={player.name}/>
                    )}
                <button onClick={this.randPlayer.bind(this)}>
                    Generate
                </button>
            </FormControl>

                    {/*should generate random player and display it*/}


                <div>
                    
                </div>

            </div>
            // </MuiThemeProvider>

        )
    }
}



export default RandomPlayerSelector;