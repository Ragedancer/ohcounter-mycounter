import React, {Component} from 'react';
import {getCookie, setCookie} from "../../utils/cookie";
import {loadFile, loadFileContents, appendChildNodes, convertToElement} from "../../utils/template";
import {clearScreen} from "../../utils/util";
import {newState} from "../../utils/history";
//import './Game.scss'

//Variables
let recentGameCookie = 'RecentGame';

export function startGame(data) {
    createGameCookie(data).then(function(res) {
        openGame(res);
    });

    newState('game', recentGameCookie);
}

function createGameCookie(data) {
    return new Promise(function(resolve, reject) {
        let gameTemp = 'games/MTG-Commander.json';

        loadFileContents('lib/json/game-list.json').then(function(gameRes) {
            let json = JSON.parse(gameRes).games;

            for (let i = 0; i < json.length; i++) {
                if (data.game === json[i].name) {
                    gameTemp = json[i].template;
                }
            }
        }).then(function() {
            loadFileContents('lib/json/' + gameTemp).then(function(res) {
                let game = res;
                let numPlayers = data.numPlayers;
                let cookieData = [];

                for (let i = 0; i < numPlayers; i++) {

                    cookieData[i] = JSON.parse(game);
                    cookieData[i].playerName = data.playerNames[i];
                    resetCounter(cookieData[i].primary);
                    resetCounters(cookieData[i].secondary);
                    resetCounters(cookieData[i].tertiary);
                }
                setCookie(recentGameCookie, cookieData);
                resolve(cookieData);
            });
        });
    });
}

// For reseting one particular counter
function resetCounter(counter) {
    counter.value = counter.start;
}

// For reseting all counters of type
function resetCounters(counters) {
    for (let i = 0; i < counters.length; i++) {
        counters[i].value = counters[i].start;
    }
}

// Reset all players counters
function resetGame() {
    let game = getCookie(recentGameCookie);

    for (let i = 0; i < game.length; i++) {
        resetCounter(game[i].primary);
        resetCounters(game[i].secondary);
        resetCounters(game[i].tertiary);
    }

    setCookie(recentGameCookie, game);
    openGame(game);
}


// Clear screen before setting up the game
export function openGame(data) {
    clearScreen();
    setUpGame(data);
}

// Setup a game based on recentGameCookie
function setUpGame(data) {

    loadFile('templates', 'template/game.html').then(function(res) {
        let numPlayers = data.length;
        // Create the player tabs
        let playerTabs = document.createElement('div');
        playerTabs.setAttribute('id', 'player-tabs');
        let tabGroup = document.createElement('div');
        tabGroup.classList.add('horizontal-name-selection');
        tabGroup.classList.add('tabGroup1');
        tabGroup.classList.add('input-invert');
        let tabGroup2 = document.createElement('div');
        tabGroup2.classList.add('horizontal-name-selection');
        tabGroup2.classList.add('tabGroup2');
        tabGroup2.classList.add('input-invert');
        let players = document.createElement('div');
        players.setAttribute('id', 'players');

        // Loop through players
        for (let i = 0; i < numPlayers; i++) {
            let game = data[i];

            let playerTmp = convertToElement(document.getElementById('player-tab-template').innerHTML);
            let tab = playerTmp.getElementsByClassName('item')[0];
            tab.classList.add('item-' + numPlayers);
            let label = playerTmp.getElementsByTagName('label')[0];
            label.setAttribute('for', 'player' + i);
            label.innerHTML = game.playerName;
            let input = playerTmp.getElementsByTagName('input')[0];
            input.setAttribute('id', 'player' + i);

            let parent = document.createElement('div');
            parent.classList.add('player');
            parent.classList.add(input.id);

            if (i === 0) {
                // parent.classList.add('active');
                input.checked = true;
            }

            // Primary Counter
            let primary = game.primary;
            if (primary.increments.length > 1) {
                createCounterGroup('p-multi-template', primary, parent, i, data);
            }
            else {
                createCounter('p-single-template', primary, parent, i, data);
            }

            // Secondary counter
            let secondary = game.secondary;
            for (let s = 0; s < secondary.length; s++) {
                let stmp = secondary[s];
                if (stmp.increments.length > 1) {
                    createCounterGroup('s-multi-template', stmp, parent, i, data);
                }
                else {
                    createCounter('s-single-template', stmp, parent, i, data);
                }
            }

            // Tertiary counter
            let tertiary = game.tertiary;
            for (let t = 0; t < tertiary.length; t++) {
                let tTmp = tertiary[t];
                createCounter('t-single-template', tTmp, parent, i, data);
            }

            if (i > 3) {
                appendChildNodes(playerTmp, tabGroup2);
            }
            else {
                appendChildNodes(playerTmp, tabGroup);
            }

            players.appendChild(parent);
        }

        playerTabs.appendChild(tabGroup);

        if (numPlayers > 4) {
            playerTabs.appendChild(tabGroup2);
        }

        document.getElementById('content').appendChild(playerTabs);
        document.getElementById('content').appendChild(players);
        document.getElementsByClassName('player')[0].classList.add('active');
    });
}

// Create an instance of a multi increment counter
function createCounterGroup(template, counter, parent, playerIndex) {
    let temp = createCounterValueGroup(template, counter, playerIndex);
    let group = temp.getElementsByClassName('multi-counter')[0];

    // Loop through each increment
    for (let i = 0; i < counter.increments.length; i++) {

        let increment = convertToElement(document.getElementById('increment-group-template').innerHTML);
        let incr = counter.increments[i];
        createIncrement(increment, 'loss', incr, counter);
        createIncrement(increment, 'gain', incr, counter);
        appendChildNodes(increment, group);
    }
    appendChildNodes(temp, parent);
}

// Create a basic single increment counter
function createCounter(template, counter, parent, playerIndex, players) {

    if (counter.otherPlayers) {
        for (let i = 0; i < players.length; i++) {
            if (i !== playerIndex) {
                counterSetup(template, counter, parent, playerIndex, players[i]);
            }
        }
    } else {
        counterSetup(template, counter, parent, playerIndex);
    }
}

function counterSetup(template, counter, parent, playerIndex, player) {

    let temp = null;
    if (counter.otherPlayers) {
        temp = createCounterValueGroup(template, counter, playerIndex, player);
    } else {
        temp = createCounterValueGroup(template, counter, playerIndex);
    }
    let incr = counter.increments[0];
    createIncrement(temp, 'loss', incr, counter);
    createIncrement(temp, 'gain', incr, counter);
    appendChildNodes(temp, parent);
}

// Create the counter value group that displays the name and value of the counter
function createCounterValueGroup(template, counter, playerIndex, player) {
    let temp = convertToElement(document.getElementById(template).innerHTML);
    temp.getElementsByClassName('counter-name')[0].innerHTML = counter.otherPlayers ? player.playerName + ' ' + counter.name : counter.name;
    let count = temp.getElementsByClassName('counter-value')[0];
    count.innerHTML = counter.value;
    addDataset(count, counter, playerIndex);
    return temp;
}

// Create the individual increment or decrment for a counter
function createIncrement(temp, name, incr, counter) {
    let elem = temp.getElementsByClassName(name)[0];
    elem.innerHTML = (incr !== undefined) ? incr : counter.increments;
    elem.dataset.counter = counter.id;
}

// Add dataset variables to the counter
function addDataset(elem, counter, playerIndex) {
    let min, max;

    if (counter.min === 'null') {
        min = '';
    }
    else {
        min = counter.min;
    }

    if (counter.max === null) {
        max = '';
    }
    else {
        max = counter.max;
    }

    // Dataset values for the counter to function
    elem.dataset.start = counter.start;
    elem.dataset.min = min;
    elem.dataset.max = max;
    elem.dataset.value = counter.value;

    // Dataset values to allow updating the cookie with the counter state
    elem.dataset.playerIndex = playerIndex;
    elem.dataset.id = counter.id;
}

// Increment or decrement a counter and update the cookie
function increment(elem){
    new Promise(function(resolve, reject) {

        let value = getCounterValue(elem);
        let cvalue = value.innerHTML;
        let increment = (elem.classList.contains('loss')) ? '-' + elem.innerHTML : elem.innerHTML;
        cvalue = parseInt(cvalue, 10) + parseInt(increment, 10);

        let data = value.dataset;
        let min = data.min;
        let max = data.max;

        if (min !== 'null' && min !== null && min !== undefined && min !== '') {
            cvalue = (parseInt(cvalue, 10) >= parseInt(min, 10)) ? cvalue : min;
        }
        if (max !== 'null' && max !== null && max !== undefined && max !== '') {
            cvalue = (parseInt(cvalue, 10) <= parseInt(max, 10)) ? cvalue : max;
        }
        value.innerHTML = cvalue;
        value.dataset.value = cvalue;

        resolve(data);
    }).then(function(data) {
        let cookieData = getCookie(recentGameCookie);
        let player = cookieData[data.playerIndex];

        // Check Primary Counter
        if (data.id === player.primary.id) {
            player.primary.value = data.value;
        }

        // Check Secondary Counters
        checkCounters(player.secondary, data);

        // Check Tertiary Counters
        checkCounters(player.tertiary, data);

        // Update Cookie
        cookieData[data.playerIndex] = player;
        setCookie(recentGameCookie, cookieData);
    });
}


// Checks each counter of `counters` to find the counter to update
function checkCounters(counters, data) {
    for (let i = 0; i < counters.length; i++) {
        if (data.id === counters[i].id) {
            counters[i].value = data.value;
        }
    }
}

//let variable means it changes and const means it cannot change
// Show the counters for the player selected
function activatePlayer() {
    let playerTabs = document.getElementById('player-tabs');

    for (let i = 0; i < playerTabs.childElementCount; i++){
        let group = playerTabs.childNodes[i];

        for (let j = 0; j < group.childElementCount; j++){
            let element = group.childNodes[i].getElementsByTagName('input')[0];
            let player = document.getElementsByClassName(element.id)[0];
            player.classList.toggle('active', element.checked);
        }
    }
}

// Get the value of the counter to be incremented
function getCounterValue(elem) {
    let value = null;
    let curElem = elem.parentNode;

    while (value === null) {
        if (curElem.classList.contains('primary') || curElem.classList.contains('secondary') || curElem.classList.contains('tertiary')) {
            value = curElem.getElementsByClassName('counter-value')[0];
        }
        else {
            curElem = curElem.parentNode;
        }
    }

    return value;
}

function decrementCounter(elem) {
    increment(elem);
}

function incrementCounter(elem) {
    increment(elem);
}

class Game extends Component{
    render() {
        return(
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
                        <span className="gain" onClick={incrementCounter(this)}></span>
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
}

export default Game;