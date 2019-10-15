import React, {Component} from 'react';
import './App.scss';
import ActionPrompt from "../ActionPrompt/ActionPrompt";
import {checkCookie} from "../../utils/cookie";
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

class App extends Component {
    render() {
        return (
            <div>
                <header>

                </header>
                <ActionPrompt/>
                <div id="menu" className="slide-in from-left">
                    <h1 className="logo">Oh Counter, My Counter</h1>
                    <a id="menuReturnGame" href="#" onClick="menuReturnToGame()" className="hide">Return to Game</a>
                    <a href="#" onClick="newGame()">New Game</a>
                    <a href="#" onClick="menuOpenDice()">Dice</a>
                    <a id="menuRandPlayer" href="#" onClick="menuRandPlayer()" className="hide">Random Player
                        Selector</a>
                    <a id="menuResetGame" href="#" onClick="menuResetGame()" className="hide">Reset Game</a>
                </div>

            </div>
        );
    }
}

export default App;
