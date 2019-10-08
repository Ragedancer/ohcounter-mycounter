import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class ActionPrompt extends Component {
    render() {
        return (
            <div>
                <h2>What would you like to do?</h2>
                <div id={"action-selection"} className={"vertical-selection-input-rounded"}>
                    <div className={"item"}>
                        <label id={"action-option-label1"}>New Game</label>
                        <input type={"radio"} id={"action-option1"} name={"action-prompt-selection"} value={"newGame"}/>
                    </div>
                </div><br/><br/>

                {/*Button element is Material-UI component it is imported from the */}
                <Button variant="contained" color="primary">
                    Select
                </Button>

            </div>
        );
    }
}

//ActionPrompt is exported and can be referenced as an element when it is imported
export default ActionPrompt;