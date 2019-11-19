//This wasn't working so until it is fixed we will be having PlayerName be in ActionPrompt
import React from 'react';

export function PlayerName(props){
    return(
        <form onSubmit={props.onSubmit}>
            <label><input type={props.type} value={props.value}  onChange={props.onChange} /></label>
            <input type="submit" value="Submit"/>
        </form>)
    }
