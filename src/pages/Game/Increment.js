import React from "react";
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

function increment(lifePoints, hitPoints){
    return lifePoints + hitPoints;
}
//onClick={increment(this.state.lifePoints, this.prop.incrementNums[2])}
class Increment extends React.Component {
    constructor(props) {
        super(props)
        this.prop = {incrementNums : [10, 5, 1]};
    }

    render(){
        return (
            <div className={"increment"}>
                <IconButton >
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                        <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"/>
                    </SvgIcon>
                </IconButton>
                {/*<h6>{this.state.lifePoints}</h6>*/}
            </div>
        );
    }
}

export default Increment;
