import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectOption } from '../action/postAction'
class DropDown extends Component {
    selectOption = (e) => {
        // var selectedValue = this.props.teamData[e.target.value];
        // this.props.selectOption(selectedValue);
        var temp = this.props.teamData[e.target.value];
        console.log(temp);
        this.props.selectOption(temp);
    }
    componentDidMount(){
        this.props.selectOption(this.props.teamData[0])
    }
    render() {
        const selectedData = this.props.teamData ? (
            <div className="card" style={{backgroundColor:this.props.selectedObj.color}}>
                <div className="card-content">
                    <p style={{color:this.props.selectedObj.textColor}}>Name: {this.props.selectedObj.name}</p>
                    <p style={{color:this.props.selectedObj.textColor}}>continent: {this.props.selectedObj.continent}</p>
                </div>
            </div>
        ) : (
            <p>No country data</p>
        )
        // console.log(this.props);
        const { teamData } = this.props;
        const dropDownList = teamData.length ? (
            teamData.map((teamDeatils, i) => {
                return (
                    <option key={i} value={i}>{teamDeatils.name}</option>
                )
            })
        ) : (
                <option>No Data</option>
            )
        return (
            <div className="container">
                <div className="card">
                    <select onChange={this.selectOption}>
                        {dropDownList}
                    </select>
                </div>
                {selectedData}
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        teamData: state.teamData,
        selectedObj: state.selectedObj
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        selectOption: (name) => { dispatch(selectOption(name)) }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(DropDown);