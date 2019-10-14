import React from 'react';
//import './Game.scss'

//Variables

//show counters for selected players
//create variables with let and const
//let variable means it changes and const means it cannot change

function activatePlayer() {
    // let playerTabs = document.getElementById('player-tabs');
    //
    // for (let i = 0; i < playerTabs.childElementCount; i++){
    //     let group = playerTabs.childNodes[i];
    //
    //     for (let j = 0; j < group.childElementCount; j++){
    //         let element = group.childNodes[i].getElementsByTagName('input')[0];
    //         let player = document.getElementsByClassName(element.id)[0];
    //         player.classList.toggle('active', element.checked);
    //     }
    // }
}

function decrementCounter() {
    
}

function incrementCounter() {

}

//Setup a game based on recentGameCookie
function setUp(data) {
    loadFile('templates', './pages/Game/Game.js').then(function (res) {
        let numPlayers = data.length;
        //Create the player tabs
        let platerTabs = document.createElement('div');
        platerTabs.setAttribute('id', 'player-tabs');
        let tabGroup = document.createElement('div');
        tabGroup.classList.add('horizontal-name-selection');
        tabGroup.classList.add('inputGroup1');
        tabGroup.classList.add('input-invert');
        let tabGroup2 = document.createElement('div');
        tabGroup2.classList.add('horizontal-name-selection');
        tabGroup2.classList.add('tabGroup2');
        tabGroup2.classList.add('input-invert');
        let players = document.createElement('div');
        players.setAttribute('id', 'players');

    });
}

function loadFile(file, directory){
    
}

function Game() {
    return (
        <body>
            <div className="item">
                <input type="radio" id="player0" name="player-tab" onChange={activatePlayer()}/>
                <label htmlFor="player0">Player 0</label>
            </div>

            <div className="increment-group">
                <span className="loss" onClick={decrementCounter(this)}></span>
                <span className="gain" onClick={incrementCounter(this)}></span>
            </div>

            <div className="primary">
                <div className="value-group">
                    <h5 className="counter-name"></h5>
                    <h4 className="counter-value"></h4>
                </div>
                <div className="multi-counter">
                </div>
            </div>


            <div className="primary">
                <h5 className="counter-name"></h5>
                <div className="single-counter">
                    <span className="loss" onClick={decrementCounter(this)}></span>
                    <div className="value-group">
                        <h4 className="counter-value"></h4>
                    </div>
                    <span className="gain" onClick={"incrementCounter(this);"}></span>
                </div>
            </div>

            <div className="secondary">
                <div className="value-group">
                    <h5 className="counter-name"></h5>
                    <h4 className="counter-value"></h4>
                </div>
                <div className="multi-counter">
                </div>
            </div>

            <div className="secondary">
                <h5 className="counter-name"></h5>
                <div className="single-counter">
                    <span className="loss" onClick={decrementCounter(this)}></span>
                    <div className="value-group">
                        <h4 className="counter-value"></h4>
                    </div>
                    <span className="gain" onClick={incrementCounter(this)}></span>
                </div>
            </div>

            <div className="tertiary">
                <h5 className="counter-name"></h5>
                <div className="single-counter">
                    <span className="loss" onClick={decrementCounter(this)}></span>
                    <div className="value-group">
                        <h4 className="counter-value"></h4>
                    </div>
                    <span className="gain" onClick={incrementCounter(this)}></span>
                </div>
            </div>
        </body>
    );
}

export default Game;