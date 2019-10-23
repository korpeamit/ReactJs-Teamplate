import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectOption } from '../action/postAction';
class CreateTeam extends Component {

    selectOption = (e) => {
        this.setState({
            selectValue: e.target.value
        })
        // console.log('setstateValue',e.target.value);
        this.props.selectOption(e.target.value)
    }
    componentDidMount(){
        // console.log("didMountData", this.props.teamData[0])
        this.props.selectOption(this.props.teamData[0].name)
    }
    render() {
        const selectedData = this.props.teamData ? (
            <p>Name: {this.props.name}</p>
        ) : (
            <p>No country data</p>
        )
        // console.log(this.props);
        const { teamData } = this.props;
        const dropDownList = teamData.length ? (
            teamData.map((teamDeatils, i) => {
                return (
                    <option key={i} value={teamDeatils.name}>{teamDeatils.name}</option>
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
        name : state.name
    }
}

const mapDispatchProps = (dispatch) =>{
    return{
        selectOption : (id) =>{ dispatch(selectOption(id))}
    }
}

export default connect(mapStateToProps,mapDispatchProps)(CreateTeam);