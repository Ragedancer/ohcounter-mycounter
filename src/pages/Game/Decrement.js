import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import './Game.scss';

class Decrement extends React.Component {
    decrement = (counter,  newHitPoints) =>{
        counter -= newHitPoints;
        this.props.sendCounter(counter);
    }
    render(){
        return (
            <div className={"decrement-icon"}>
                <IconButton  onClick={() => this.decrement(this.props.counter, this.props.hitPoints)}>
                    <SvgIcon className={"operator"} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <rect height="4.010702" width="28.041473" y="21.994649" x="9.963878"/>
                    </SvgIcon>
                    <span className={"icon-num"}>{this.props.hitPoints}</span>
                </IconButton>
            </div>
        );
    }
}

export default Decrement;
