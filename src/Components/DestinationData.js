import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="description-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="shimla-1" src={this.props.img1}/>
                    <img alt="shimla-2" src={this.props.img2}/>
                </div>
            </div>
        )
    }
}

export default DestinationData;