import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from '@material-ui/core/SvgIcon';



//onClick={increment(this.state.lifePoints, this.prop.incrementNums[2])}
class Increment extends React.Component {
    //function increment to change the data
    increment = (newCounter,  newHitPoints) =>{
        newCounter += newHitPoints;
        // send back data from child to parent or setter
        this.props.sendCounter(newCounter);
    }

    render(){
        return (
            <div className={"increment-icon"}>
                {/*OnClick is used to execute the increment function, this statement means the function in the Increment class.
                the props in the increment parameters are the data passed from LifePoints class or the attributes injected in the Increment tag*/}
                <IconButton onClick={() => this.increment(this.props.counter, this.props.hitPoints)}>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"/>
                    </SvgIcon>
                    {/*use the prop of state in LifePoints.js*/}
                    <span>{this.props.hitPoints}</span>
                </IconButton>
            </div>
        );
    }
}

export default Increment;
