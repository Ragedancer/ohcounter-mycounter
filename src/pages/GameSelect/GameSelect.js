import React from "react";

export function GameSelect(props) {
    return (
            <div>
                <h2>Pick a Game Type:</h2>
                <select value={props.value} onChange={props.onChange} size={4}>
                    <option value="Commander">MTG Commander</option>
                    <option value="Standard">MTG Standard</option>
                    <option value="YGO">Yu-Gi-Oh</option>
                    <option value="Munch">Munchkin</option>
                </select>
            </div>
        );
}
