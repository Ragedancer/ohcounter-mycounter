import React, { Component } from "react";



 // export function RandPlayer(players) {
 //     this.players[Math.floor(Math.random()*players.length)];
// //
// //     // if (players.length > 0) {
// //     //     var pick = Math.floor(Math.random() * players.length);
// //     //     alert('Player', players[pick].value, 'anounce', 5000);
// //     // }
// //     // else {
// //     //     alert('Error', 'At least one player must be selected.', 'error', 3000);
// //     // }
  //  }
//creating array to test random player selection

class RandomPlayerSelector extends Component {
    // no idea if i need this
    state = {
        players: [
            {name: "player 1"},
            {name: "player 2"},
            {name: "player 3"},
            {name: "player 4"},
            {name: "fuck you"}
        ],
        selectedPlayers: [],
        player: ""
    }
    //taken from internet
    onChange(e) {
        //gets current state of players from json
        const selectedPlayers = this.state.selectedPlayers;
        //determines position in array
        let index
        if (e.target.checked) {
            selectedPlayers.push(e.target.value);
        } else {
            index = selectedPlayers.indexOf(+e.target.value);
            selectedPlayers.splice(index, 1)
        }
        this.setState({selectedPlayers: selectedPlayers})
    }
 //returns random player from array
    randPlayer = () => {
       
        // this.setState({player: this.state.selectedPlayers[Math.floor(Math.random() * this.state.selectedPlayers.length)]})
        const thisPlayer = this.state.selectedPlayers[Math.floor(Math.random() * this.state.selectedPlayers.length)]
        return(
        alert(thisPlayer)
        )
        // return (
        //       (alert({player}, player, 'anounce', 5000))
        // )
    }
    // chosenPlayer = (player) => {
    //     alert(player)
    // }
    //generates checkbox for player
    generatePlayer = (players) => {
        return(
            <div>
                <label>{players.name}</label>
                <input type="checkbox" id={players.name} value={players.name} onChange={this.onChange.bind(this)}/>
            </div>
        )
    }
    render() {

        // let selection = function (X) {
        //     return <option>{X}</option>
        return(
            <div>
                {this.state.players.map(
                        (player, i) =>
                            <this.generatePlayer
                                key={i}
                                name={player.name}/>
                    )}
                    {/*should generate random player and display it*/}

                <button onClick={this.randPlayer.bind(this)}>
                    Generate
                </button>
                <div>
                    
                </div>

            </div>

        )
    }
}



export default RandomPlayerSelector;