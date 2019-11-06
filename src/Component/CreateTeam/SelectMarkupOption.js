import React, { Component } from 'react';

class SelectMarkupOption extends Component {
    render() {
        const { htmlMarkupData } =  this.props;
        const optionListing = htmlMarkupData.length ? (
            htmlMarkupData.map((data,i) =>{
                return(
                    <option key={i} value={i}>{data.name}</option>
                )
            })
        ) : (
            <option>No Data</option>
        )
        return (
            <select onChange={this.props.handleChange}>
                {optionListing}
            </select>
        )   
    }
}

export default SelectMarkupOption;