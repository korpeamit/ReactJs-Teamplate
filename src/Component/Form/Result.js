import React, {Component} from 'react';

class Result extends Component{
    render(){
        return(
            <div>
                <p>Name: {this.props.resultData.name}</p>
                <p>Password: {this.props.resultData.password}</p>
                <p>Mobile no: {this.props.resultData.phoneNo}</p>
                <p>Gender: {this.props.resultData.selectedOption}</p>
            </div>
            
        )
    }
}   
export default Result;

