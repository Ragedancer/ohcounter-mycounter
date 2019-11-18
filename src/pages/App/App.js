import React, {Component} from 'react';
import "./App.css";
import ActionPrompt from "../ActionPrompt/ActionPrompt";
import Dice from "../Dice/Dice";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Game from "../Game/Game";
import RandomPlayerSelector from "../RandomPlayerSelector/RandomPlayerSelector";
import NumPlayerSelect from "../PlayerSelect/NumPlayerSelect";
import PlayerName from "../PlayerSelect/PlayerName";
import GameSelect from "../GameSelect/GameSelect";

// Toggle show on element
function toggleShow(element) {
    document.getElementById(element).classList.toggle('show');
}

// Toggle hide on cover
function toggleCover(element) {
    document.getElementById(element).classList.toggle('hide');
}


// Open the hamburger menu
function toggleHamMenu() {
    toggleShow('menu');
    toggleCover('menu-active');
   // toggleMenuOptions();
}
//
// function toggleMenuOptions() {
//     if (checkCookie(recentGameCookie)) {
//         document.getElementById('menuReturnGame').classList.toggle('hide', false);
//         document.getElementById('menuRandPlayer').classList.toggle('hide', false);
//         document.getElementById('menuResetGame').classList.toggle('hide', false);
//     }
//     else {
//         document.getElementById('menuReturnGame').classList.toggle('hide', true);
//         document.getElementById('menuRandPlayer').classList.toggle('hide', true);
//         document.getElementById('menuResetGame').classList.toggle('hide', true);
//     }
// }
//let gameFile = 'sadsada';



class App extends Component {

    render() {
        return (
            <div>
                <header>

                </header>

                {/*Passing in a fake game file, which would be a mobX file*/}
                 {/*let gameFile = -mobX file with current game*/}

                 {/*<ActionPrompt  gameFile= {gameFile} />*/}

                <ActionPrompt />
                {/*<div id="menu" className="slide-in from-left">*/}
                {/*    <h1 className="logo">Oh Counter, My Counter</h1>*/}
                {/*    <a id="menuReturnGame" href="#" onClick="menuReturnToGame()" className="hide">Return to Game</a>*/}
                {/*    <a href="#" onClick="newGame()">New Game</a>*/}
                {/*    <a href="#" onClick="menuOpenDice()">Dice</a>*/}
                {/*    <a id="menuRandPlayer" href="#" onClick="menuRandPlayer()" className="hide">Random Player*/}
                {/*        Selector</a>*/}
                {/*    <a id="menuResetGame" href="#" onClick="menuResetGame()" className="hide">Reset Game</a>*/}
                {/*</div>*/}
                {/*<Link to='/Game'>Game</Link>*/}

                    {/*<nav><input id={"check01"} type={"checkbox"} name={"menu"}>*/}
                    {/*    <label for={"check01"}>Index</label>*/}
                    {/*    <ul class={"submenu"}>*/}
                    {/*        <li><Link to="/actionprompt">Action Prompt</Link></li>*/}
                    {/*        <li><Link to="/numplayerselect">Select Player</Link></li>*/}
                    {/*        <li><Link to="/gameselect">Game Select</Link></li>*/}
                    {/*        <li><Link to="/game">Game</Link></li>*/}
                    {/*        <li><Link to="/playername">Player Name</Link></li>*/}
                    {/*        <li><Link to="/randomplayer">Random Player Selector</Link></li>*/}
                    {/*        <li><Link to="/dice">Dice</Link></li>*/}
                    {/*    </ul>*/}
                    {/*</input></nav>*/}
                <Router>
                <div id="demo">
                    <div className="wrapper">
                        <div className="content">

                            <ul>
                                <li><Link to="/actionprompt">Action Prompt</Link></li>
                                <li><Link to="/numplayerselect">Select Player</Link></li>
                                <li><Link to="/gameselect">Game Select</Link></li>
                                <li><Link to="/game">Game</Link></li>
                                <li><Link to="/playername">Player Name</Link></li>
                                <li><Link to="/randomplayer">Random Player Selector</Link></li>
                                <li><Link to="/dice">Dice</Link></li>
                            </ul>
                        </div>
                        <div className="parent">Menu</div>
                    </div>
                </div>
                    <Switch>
                        <Route path="/actionprompt"><ActionPrompt /></Route>
                        <Route path="/dice"><Dice /></Route>
                        <Route path="/game"><Game /></Route>
                        <Route path={"/randomplayer"}><RandomPlayerSelector /></Route>
                        <Route path="/numplayerselect"><NumPlayerSelect /></Route>
                        <Route path="/playername"><PlayerName /></Route>
                        <Route path="/gameselect"><GameSelect /></Route>

                    </Switch>
            </Router>
            </div>

        );
    }
}

export default App;
