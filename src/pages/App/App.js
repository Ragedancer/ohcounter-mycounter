import React, {Component} from 'react';
import './App.scss';
import ActionPrompt from "../ActionPrompt/ActionPrompt";

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <svg onClick="toggleHamMenu()" className="menu-button" xmlns="http://www.w3.org/2000/svg" width="48"
                         height="48" viewBox="0 0 48 48">
                        <path d="M0 0h48v48H0z" fill="none"></path>
                        <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"></path>
                    </svg>
                </header>
                <ActionPrompt/>
            </div>
        );
    }
}

export default App;
