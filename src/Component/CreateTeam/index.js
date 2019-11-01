import React, { Component } from 'react';
import SelectMarkupOption from '../CreateTeam/SelectMarkupOption';
import { connect } from 'react-redux';
class CreateTeam extends Component {
    componentDidMount(){
        
    }

    render() {
        console.log(this.props.htmlMarkup)
        return (
            <div className="container">
                <div className="card">
                    <SelectMarkupOption htmlMarkupData={this.props.htmlMarkup}></SelectMarkupOption>
                </div>
                <div className="code-container">
                    <span className="copy-code">Copy Code</span>
                    <div className="">

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {htmlMarkup} = state;
    return {
        htmlMarkup
    }
}

export default connect(mapStateToProps, null)(CreateTeam);