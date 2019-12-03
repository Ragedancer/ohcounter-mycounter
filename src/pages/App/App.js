import React, {Component} from 'react';
import "./App.css";
import ActionPrompt from "../ActionPrompt/ActionPrompt";
import Dice from "../Dice/Dice";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Game from "../Game/Game";
import RandomPlayerSelector from "../RandomPlayerSelector/RandomPlayerSelector";
import NumPlayerSelect from "../PlayerSelect/NumPlayerSelect";
import PlayerName from "../PlayerSelect/PlayerName";
import {GameSelect} from "../GameSelect/GameSelect";

const Hamburger = () => (
    <Router>
        <div id="demo">
            <div className="wrapper">
                <div className="content">
                    <ul>
                        <li><Link to="/">Action Prompt</Link></li>
<<<<<<< HEAD
=======
                        {/* <li><Link to="/numplayerselect">Select Player</Link></li>
                        <li><Link to="/gameselect">Game Select</Link></li> */}
>>>>>>> 0d930ad781228be7d6ef0872d462197a07d415f3
                        <li><Link to="/game">Game</Link></li>
                        {/* <li><Link to="/playername">Player Name</Link></li> */}
                        <li><Link to="/randomplayer">Random Player Selector</Link></li>
                        <li><Link to="/dice">Dice</Link></li>
                    </ul>
                </div>
                <div className="parent">Menu</div>
            </div>
        </div>

        
            <Route exact path={"/"} component={ActionPrompt}/>
            <Route path="/dice" component={Dice}/>
            <Route path="/game" component={Game}/>
            <Route path={"/randomplayer"} component={RandomPlayerSelector}/>
<<<<<<< HEAD
            <Route path="/gameselect" component={GameSelect}/>
=======
            {/* <Route path="/numplayerselect" Component={}/> */}
            {/* <Route path="/playername" Component={}/> */}
            {/* <Route path="/gameselect" component={GameSelect}/> */}
>>>>>>> 0d930ad781228be7d6ef0872d462197a07d415f3
        
    </Router>
);

class App extends Component {
    render() {
        return (
            <div>
                <Hamburger />
                </div>
        );
    }
}

export default App;
