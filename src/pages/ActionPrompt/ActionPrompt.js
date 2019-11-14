import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './ActionPrompt.scss';
import App from '../App/App.js';
import {checkCookie} from "../../utils/cookie";
import {loadFile, loadFileContents, newTemplate} from "../../utils/template";
import {clearScreen} from "../../utils/util";
import {observable} from "mobx";

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
        this.state = {gameType: ''};
        this.state = {names: []};

    }
    /*
           Function Name: handleEntireGame
           Function Usage: Used by the state 'entireGame', which if is true, will call.
           Function Reason: If there is a cookie that exists, this will run, and display the
                            Continue Game on {button} to take the user to the game.
           Function Passage: Nothing is passed in or returned. It will just run to take the user to the game.
                             Passing in the Cookie.
        */
    handleEntireGame() {
    }
    /*
        Function Name: handleGame
        Function Usage: Used by the {button} if game is set to false.
        Function Reason: Sets the game to true, which if that's true, displays number of players.
        Function Passage: This function has nothing passed into it, nor does it return anything.
    */
    handleGame() {
        this.setState({game: true});
    }
    /*
           Function Name: handlePlayers
           Function Usage: Used by the the Select/Option DropDown assigned to {button}.
           Function Reason: Assigns the number of Players or the state 'player'.
           Function Passage: Passed in the value from the selection that then pulls in the value from the option,
                             Doesn't return, it just assigns the state.
           */
    handlePlayers(e) {
        this.setState({player: e.target.value});
    }
    /*
    Function Name: handleNames
    Function Usage: Used by onChange on the input assigned to {button}.
    Function Reason: Adds a character to the state 'tempName', for each time the onChange is called from
                     the input that is assigned to {button}.
     Function Passage: Passes in a character from the input, which isn't returned, 'tempName'
                       is used by handleSubmitNames().
    */
    handleNames(e) {
        this.setState({tempName: e.target.value});
    }
    /*
        Function Name: handleSubmitNames
        Function Usage: Used by the the Submit Button(along with input) that is assigned to {button}.
        Function Reason: Prevents the submit button to taking the user to a different page, and adds and SetState the
                         names to the state 'names' array.
        Function Passage: The submit button is passed into the function and is stopped from going to a different page.
                          The function doesn't specifically return anything, but does set the state.
    */
    handleSubmitNames(e) {
        e.preventDefault();
        //temp is a variable to represent the tempName state.
        let temp = this.state.tempName;
        //newName is the current state 'names' which then concatenates the current existing array with a new input.
        //Concatenating is used to combine 2 arrays, but in this instance is adding a new name to the state.
        let newName = this.state.names.concat(temp);
        this.setState({names: newName});
        this.setState({tempName: ''});
        alert("Names are now: " + this.state.names);
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
            button = <ChoosePlayers value={players} onChange={this.handlePlayers}/>;
        } else {
            button = <NewGame onClick={this.handleGame}/>;
        }
        if (players > "0") {
            let i;
            for (i = 0; i < players; i++) {
                button = <ChooseNames type="text" value={tempName} onChange={this.handleNames}
                                      onSubmit={this.handleSubmitNames}/>;
            }
        }
        if (names.length == players) {
            button = <ChooseGame value = {gameType} onChange = {this.handleGameType}/>;

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
            <Button class="newGame" onClick={props.onClick}>
                New Game?
            </Button>
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
/*
Called from the render of the main Class,
props.value is the currents state of the number of Players
props.onChange is the function that will run once the user selects a number
*/
function ChoosePlayers(props) {
    return (
        <div>
            <h2>Number of Players</h2>
            <select value={props.value} onChange={props.onChange} size={8}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
        </div>
    );
}

function ChooseNames(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <label>Player<input type={props.type} value={props.value} onChange={props.onChange}/></label>
            <input type="submit" value="Submit"/>
        </form>
    );
}

function ChooseGame(props) {
    return (
        <div>
            <h2>Pick a Game Type:</h2>
            <select value={props.value} onChange={props.onChange} size={4}>
                <option value="Commander">MTG Commander</option>
                <option value="Standard">MTG Standard</option>
                <option value="YGO">Yu-Gi-Oh</option>
                <option value="Munch">Munchkin</option>
            </select>
        </div>
    );
}

export default ActionPrompt;