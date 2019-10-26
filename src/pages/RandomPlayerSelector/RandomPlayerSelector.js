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
            {"name": "player 1"},
            {"name": "player 2"},
            {"name": "player 3"},
            {"name": "player 4"},
            {"name": "fuck you"}
        ]
    }
    //taken from internet
    onChange(e) {
        //gets current state of players from json
        const players = this.state.players
        //determines position in array
        let index
        if (e.target.checked) {
            players.push(+e.target.value)
        } else {
            index = players.indexOf(+e.target.value)
            players.splice(index, 1)
        }
        this.setState({players: players})
    }
    //returns random player from array
    randPlayer = () => {
        return (

              this.setState({player: this.state.players[Math.floor(Math.random() * this.state.players.length)].name})

        )
    }
    //generates checkbox for player
    player = (players) => {
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
                {this.state.players[0].name}
                {this.state.players.map(
                        (player, i) =>
                            <this.player
                                key={i}
                                name={player.name}/>
                    )}
                    {/*should generate random player and display it*/}

                <button onClick={this.randPlayer.bind(this)}>
                    Generate
                </button>
                <div>
                    {this.state.player}
                </div>

            </div>

        )
    }
}



export default RandomPlayerSelector;