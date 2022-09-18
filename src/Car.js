import React , {Component} from "react";

class Car extends Component {
    render() {
        return (
            <>
                <p>my car brand is {this.props.brand} and 
                it color is {this.props.color} </p>
                <span>{this.props.children}</span>
            </>
        )
    }
};

export default Car;