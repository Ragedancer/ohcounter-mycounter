import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";

function decrement(lifePoints, hitPoints){
    return lifePoints - hitPoints;
}

class Decrement extends React.Component {

    render(){
        return (
            <div className={"life-points"}>
                <IconButton>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <path d="M38 -4V26H10v-4h12V10h4v12h12v4z"/>
                    </SvgIcon>
                    <span>{this.props.hitPoints}</span>
                </IconButton>
            </div>
        );
    }
}

export default Decrement;
