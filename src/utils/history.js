import {getCookie} from "./cookie";
import {openGame} from "../pages/Game/Game";


// function domLoad(state) {
//     let name = state.name;
//     let cookie, data;
//
//     if (state.cookie !== undefined || state.cookie !== null) {
//
//         cookie = state.cookie;
//         // retrieve cookie data and pass to functions
//         data = getCookie(cookie);
//         // if cookie should not be null
//     }
//     console.log('pop: ' + name);
//     switch (name) {
//         case 'actionPrompt':
//             actionPrompt();
//             break;
//         case 'numPlayers':
//             openNumPlayerSelect(data);
//             break;
//         case 'playerNames':
//             enterPlayerNames(data);
//             break;
//         case 'gameSelect':
//             openGameSelect(data);
//             break;
//         case 'dice':
//             openDice(data);
//             break;
//         case 'game':
//             openGame(data);
//             break;
//         default:
//
//     }
// }

export function newState(name, cookie) {
    let state = {
        "name": name,
        "cookie": cookie
    };
    console.log('push: ' + name);
    //history.pushState(state, null, null);
}