import React from "react";
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import LifePoints from './LifePoints';

function increment(lifePoints, hitPoints){
    return lifePoints + hitPoints;
    this.setState()
}

const temp = {
    lifePoints: 0,
    increment : 0,
}



//onClick={increment(this.state.lifePoints, this.prop.incrementNums[2])}
class Increment extends React.Component {
    constructor(props) {
        super(props)

    }

    render(){
        return (
            <div className={"increment"}>
                <IconButton>
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
