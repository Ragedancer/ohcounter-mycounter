import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import './ActionPrompt.scss';
import App from '../App/App.js';
import {checkCookie} from "../../utils/cookie";
import {loadFile, loadFileContents, newTemplate} from "../../utils/template";
import {clearScreen} from "../../utils/util";
import {observable} from "mobx";

class ActionPrompt extends Component{
constructor(props) {
    super(props);
    this.handleGame = this.handleGame.bind(this);
    this.handlePlayers = this.handlePlayers.bind(this);
    this.handleEntireGame = this.handleEntireGame.bind(this);
    this.state = {game: false};
    this.state = {entireGame:false}
    this.state = {player:null}
}

handleGame() {
    this.setState({game: true});
}

handlePlayers(e) {
    this.setState({player:e.value});
}
handleEntireGame(){}

render() {
    const game = this.state.game;
    const entireGame = this.state.entireGame;
    const players = this.state.player;
    let button;

    if (entireGame) {
        button = <ContinueGame onClick={this.handleEntireGame} />;
    }
    if (game) {
        button = <ChoosePlayers  onSelect={this.handlePlayers} />;
    } else {
        button = <NewGame onClick={this.handleGame} />;
    }
    if(players === 2)
    {
        button = <ChooseNames/>;
    }
    return (
        <div>
            {button}
        </div>
    );
}
}

function NewGame(props) {
    return (
        <button onClick={props.onClick}>
            New Game?
        </button>
    );
}

function ContinueGame(props) {
    return (
        <button onClick={props.onClick}>
            Continue Game?
        </button>
    );
}
function ChoosePlayers(props) {
    return (
        <select value = {props.value} onSelect = {props.onSelect} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    );
}
function ChooseNames() {
    return (
        <button>Woooh</button>
    );
}
export default ActionPrompt;