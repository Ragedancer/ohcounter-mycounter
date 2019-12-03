/*
        Function Name: PlayerName
        Links to:ActionPrompt.js
        Function Usage: The user types in the player names and once the press enter or submit,
                        the names are added to an array.
    */
import React from 'react';

export function PlayerName(props){
    return(
        <form onSubmit={props.onSubmit}>
            <label><input type={props.type} value={props.value}  onChange={props.onChange} /></label>
            <input type="submit" value="Submit"/>
        </form>);
    }
