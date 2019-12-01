import React, {Component} from 'react';
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import './Game.scss';

/*The purpose of this child component class is to create
 a reusable decrement buttons to change state of the counter points*/
class Decrement extends Component {
    //function decrement to change the data
    decrement = (counter,  newHitPoints) =>{
        counter -= newHitPoints;
        // send back data from child to parent or setter
        this.props.sendCounter(counter);
    }
    render(){
        return (
            <div className={"loss"}>
                {/*OnClick is used to execute the decrement function, this statement means the function in the Decrement class.
                the props in the decrement parameters are the data passed from LifePoints.js, PoisonPoints.js, etc
                 or the attributes injected in the Decrement tag*/}
                <IconButton  onClick={() => this.decrement(this.props.counter, this.props.hitPoints)}>
                    <SvgIcon className={"operator"} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <rect height="4.010702" width="28.041473" y="21.994649" x="9.963878"/>
                    </SvgIcon>
                    {/*use the prop of state in LifePoints.js, PoisonPoints.js, etc.*/}
                    <span className={"icon-num"}>{this.props.hitPoints}</span>
                </IconButton>
            </div>
        );
    }
}

export default Decrement;
