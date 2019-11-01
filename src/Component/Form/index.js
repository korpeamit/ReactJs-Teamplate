

import React, { Component } from 'react';
import Form from '../Form/Form';
import Result from '../Form/Result'
class FormMain extends Component {
    constructor(props) {
        super(props);
        this.showFrmData = this.showFrmData.bind(this);
        this.state = {
            showResults: false
        }
    }
    showFrmData(stateobj) {
        console.log(stateobj);
        this.setState({
            showResults: true,
            stateobj
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        <Form showFrmData={this.showFrmData}></Form>
                    </div>
                    <div className="col s6">
                        {this.state.showResults ? <Result resultData={this.state.stateobj} /> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default FormMain;
