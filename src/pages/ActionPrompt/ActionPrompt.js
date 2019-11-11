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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNames = this.handleNames.bind(this);
    this.state = {game: false};
    this.state = {entireGame:false};
    this.state = {player: 0 };
    this.state = {names:''};
}

handleGame() {
    this.setState({game: true});
}
handleSubmit(e){
    alert(this.state.names);

    e.preventDefault();

}
handlePlayers(e) {
    this.setState({player:e.target.value});
}
handleNames(e){
    let joined = this.state.names.concat(e.target.value);

    this.setState({names:joined});
}
handleEntireGame(){}

render() {
    const game = this.state.game;
    const entireGame = this.state.entireGame;
    const players = this.state.player;
    let p = this.state.player;
    let name = this.state.names;
    let button;
    let sub;
    if (entireGame) {
        button = <ContinueGame onClick={this.handleEntireGame} />;
    }
    if (game) {
        button = <ChoosePlayers value = {p} onChange={this.handlePlayers} />;
    } else {
        button = <NewGame onClick={this.handleGame} />;
    }
    if(players > "0")
    {
        let i;
        for(i = 0;i<players;i++) {
            button = <ChooseNames type="text" value={name} onChange={this.handleNames} onSubmit={this.handleSubmit}/>;
        }


    }
    return (
        <form onSubmit={this.handleSubmit}>
            {button}
        </form>
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
        <select value = {props.value} onChange = {props.onChange} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    );
}
function ChooseNames(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <label>Player<input type = {props.type}value = {props.value} onChange = {props.onChange}/></label>
            <input type ="submit" value = "Submit"/>
        </form>
    );
}
export default ActionPrompt;