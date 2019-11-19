import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './ActionPrompt.scss';
import GameSelect from "../GameSelect/GameSelect";
import NumPlayerSelect from "../PlayerSelect/NumPlayerSelect";
//import PlayerName from "../PlayerSelect/PlayerName";
import App from '../App/App.js';
import {checkCookie} from "../../utils/cookie";
import {loadFile, loadFileContents, newTemplate} from "../../utils/template";
import {clearScreen} from "../../utils/util";
import {observable} from "mobx";
import {PlayerName} from '../PlayerSelect/PlayerName';

/*  Class Name: ActionPrompt
  Class Usage: Called by <App/>, or from the sidebar to start a new game.
  Class Reason: This class takes in all the information needed to start a game, it
                will be passed in a cookie if there is a current existing game. It
                will return all the data that is needed in the game.
                (Game Data: Number of Players, Player Names, Game Type)
                It is being used to start the game.*/
class ActionPrompt extends Component {
    constructor(props) {
        super(props);
        this.handleGame = this.handleGame.bind(this);
        this.handlePlayers = this.handlePlayers.bind(this);
        this.handleEntireGame = this.handleEntireGame.bind(this);
        this.handleSubmitNames = this.handleSubmitNames.bind(this);
        this.handleNames = this.handleNames.bind(this);
        this.handleGameType = this.handleGameType.bind(this);
        //spot to pass in cookie
        /*
        game: Is used to start a new game once it's true.
        entireGame: Is true once there's a cookie of a previous game.
        player: Is 0, until the user selects how many players they want in their game.
        tempName: Is used a temporary name holder until the user submits the name to the list of players.
        names: Is the array that will hold the player names to be used in the game.
        gameType: Is what the counter system is based around, Commander is the preset game type for this program.
        */
        this.state = {game: false};
        this.state = {entireGame: false};
        this.state = {player: 0};
        this.state = {tempName: ''};
        this.state = {gameType: 0};
        this.state = {names: []};
    }
    /*
           Function Name: handleEntireGame
           Links to:
           Function Usage: If a current game exist, the cookie will be passed into the game.
        */
    handleEntireGame() {
    }
    /*
        Function Name: handleGame
        Function Usage: When the user starts a new game, the game is set to true.
    */
    handleGame() {
        this.setState({game: true});
    }
    /*
           Function Name: handlePlayers
           Function Usage: Passes in the number of players that is picked from the select and assigns it to player.
           */
    handlePlayers(e) {
        this.setState({player: e.target.value});
    }
    /*
    Function Name: handleNames
    Function Usage:Passes in a character from the input that is assigned to button and assigns it to tempName.
    */
    handleNames(e) {
        this.setState({tempName: e.target.value});
    }
    /*
        Function Name: handleSubmitNames
        Links to:ChooseNames
        Function Usage: Once the user presses the submit button, the tempName is assigned to the names array
    */
    handleSubmitNames(e) {
        e.preventDefault();
        //temp is a variable to represent the tempName state.
        let temp = this.state.tempName;
        //newName is the current state 'names' which then concatenates the current existing array with a new input.
        //Concatenating is used to combine 2 arrays, but in this instance is adding a new name to the state.
        alert("New Player: " + temp + " joined the game!");
        let newName = this.state.names.concat(temp);
        this.setState({names: newName});
        this.setState({tempName: ''});

    }
    handleGameType(e){
        this.setState({gameType:e.target.value});
    }


    render() {
        //game,entireGame,players,tempName,names
        const game = this.state.game;
        const entireGame = this.state.entireGame;
        const players = this.state.player;
        let tempName = this.state.tempName;
        let names = this.state.names;
        const gameType = this.state.gameType;

        let button;

        if (entireGame) {
            button = <ContinueGame onClick={this.handleEntireGame}/>;
        }
        if (game) {
            button = <NumPlayerSelect value={players} onChange={this.handlePlayers}/>;
        } else {
            button = <NewGame onClick={this.handleGame}/>;
        }
        if (players > "0") {
            let i;
            for(i = 0;i<players;i++){
                button = <PlayerName type={"text"} value={tempName} onChange={this.handleNames} onSubmit={this.handleSubmitNames}/>
            }

        }
        if (names.length == players) {
            alert(names);
            button = <GameSelect value = {gameType} onChange = {this.handleGameType}/>;

        }
        if(gameType == "Commander")
        {
            button = <Button>This would take the user to the Game</Button>
        }

        return (
            <form onSubmit={this.handleSubmitNames}>
                {button}
            </form>
        );
    }
}

function NewGame(props) {
    return (
        <div>
            <h2>What would you like to do?</h2>
            <button onClick={props.onClick}>
                New Game?
            </button>
        </div>
    );
}

function ContinueGame(props) {
    return (
        <div>
            <h2>What would you like to do?</h2>
            <Button class="newGame" onClick={props.onClick}>
                New Game?
            </Button>
            <Button onClick={props.onClick}>
                Continue Game?
            </Button>
        </div>

    );
}







export default ActionPrompt;