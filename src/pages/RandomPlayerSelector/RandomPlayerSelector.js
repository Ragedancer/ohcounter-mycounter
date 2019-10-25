import React, {Component} from "react";


let players = ["player 1", "player 2", "player 3", "player 4"];
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



class RandomPlayerSelector extends Component{
    constructor() {
        super();
        this.state = {
            players: []
        }
    }


    onChange(e){
        const players = this.state.players
        let index

        if(e.target.checked) {
            players.push(+e.target.value)
        } else {
            index = players.indexOf(+e.target.value)
            players.splice(index, 1)
        }

        this.setState({players: players})
    }

    render() {
        // //create array
        //
        // //select random value from array

        // //displays players as checklist
        // let selection = function (X) {
        //     return <option>{X}</option>
        return(
            <main>
                <form>
                    <div>
                        <label for="rand-player1">{players[0]}</label>
                        <input type="checkbox" id="rand-player1" value={0} onChange={this.onChange.bind(this)}/>
                    </div>
                    <div>
                        <label for = "rand-player2">{players[1]}</label>
                        <input type = "checkbox" id = "rand-player2" value={1} onChange={this.onChange.bind(this)} />
                    </div>
                    <div>
                        <label for="rand-player2">{players[2]}</label>
                        <input type="checkbox" id="rand-player2" value={2} onChange={this.onChange.bind(this)}/>
                    </div>
                </form>

                <button onClick={() => this.RandPlayers(players)}>
                    Generate
                </button>

                </main>
)
    }

    RandPlayers(players) {
        return players[Math.floor(Math.random()*players.length)];
    }

}

export default RandomPlayerSelector;