import React, { Component } from 'react';

class SelectMarkupOption extends Component {
    render() {
        const { htmlMarkupData } =  this.props;
        const optionListing = htmlMarkupData.length ? (
            htmlMarkupData.map((data,i) =>{
                return(
                    <option key={i}>{data.name}</option>
                )
            })
        ) : (
            <option>No Data</option>
        )
        return (
            <select>
                {optionListing}
            </select>
        )   
    }
}

export default SelectMarkupOption;