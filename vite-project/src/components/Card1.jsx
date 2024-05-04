import React, {Component} from "react";
import './card.css'


class Card1 extends Component{
    render(){
        return(

            <h3 class="class-component">{this.props.name}</h3>
            
        );
    }
}

export default Card1;